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

  useEffect(() => {
    chrome.storage.sync.get(null, data => {
      dispatch({ type: 'data', data });
      let first = Object.keys(data)[0];
      dispatch({ type: 'domain', domain: first === 'globalCss' ? '' : first });
      console.log('获取数据', data);
    });

    chrome.runtime.onMessage.addListener((request, sender) => {
      chrome.storage.sync.get(null, data => {
        if (request === 'sel') {
          dispatch({ type: 'data', data });
        } else {
          const domain = new URL(sender.url).hostname;
          console.log(request, domain);

          if (Object.keys(data).includes(domain)) {
            dispatch({ type: 'domain', domain });
          }
        }
      });
    });
  }, []);

  useEffect(() => {
    debounce(() => {
      console.log('全局商店: ', state.data);
      chrome.storage.sync.set(state.data);
    });
  }, [state]);

  const M = useMemo(_ => e(Context.Provider, { value: [state, dispatch] }, props.children), [state]);
  return M;
};

export default Store;
