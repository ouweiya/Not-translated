import React, { useEffect, Fragment as f, createElement as e, useReducer, useMemo, useState } from 'react';

export const Context = React.createContext(null);

const reducer = (state, action) => {
  switch (action.type) {
    case 'data':
      return { ...state, data: action.data };
    case 'rows':
      return { ...state, rows: action.rows };
    case 'selected':
      return { ...state, selected: action.selected };
    case 'domain':
      return { ...state, domain: action.domain };
    case 'error':
      return { ...state, error: action.error };
    case 'toggle':
      return { ...state, toggle: action.toggle };
    default:
      return state;
  }
};

const debounce = (_ => {
  let time = null;
  return callback => {
    clearTimeout(time);
    time = setTimeout(() => {
      callback();
    }, 100);
  };
})();

const Store = props => {
  const [state, dispatch] = useReducer(reducer, {
    data: {},
    rows: [],
    selected: [],
    domain: '',
    error: false,
    toggle: false
  });

  let localData = {};
  useEffect(() => {
    chrome.runtime.onMessage.addListener((request, sender) => {
      if (request.type === 'currentDomain') {
        chrome.storage.sync.get(null, data => {
          dispatch({ type: 'data', data });
          console.log('获取数据', data);
          localData = data;
          let first = Object.keys(data).includes(request.currentDomain)
            ? request.currentDomain
            : Object.keys(data)[0];

          dispatch({ type: 'domain', domain: first === 'globalCss' ? '' : first });
        });
      }
    });

    chrome.runtime.onMessage.addListener((request, sender) => {
      if (request === 'sel') {
        chrome.storage.sync.get(null, data => {
          dispatch({ type: 'data', data });
          localData = data;
          const domain = new URL(sender.url).hostname;
          if (Object.keys(data).includes(domain)) {
            dispatch({ type: 'domain', domain });
          }
        });
      }

      if (request === 'current') {
        const domain = new URL(sender.url).hostname;
        if (Object.keys(localData).includes(domain)) {
          dispatch({ type: 'domain', domain });
        }
      }
    });
  }, []);

  useEffect(() => {
    debounce(() => {
      chrome.storage.sync.set(state.data);
    });
    localData = state.data;
  }, [state]);

  const M = useMemo(_ => e(Context.Provider, { value: [state, dispatch] }, props.children), [state]);
  return M;
};

export default Store;
