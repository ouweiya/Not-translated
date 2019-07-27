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
      dispatch({ type: 'domain', domain: Object.keys(data)[0] });
      console.log('获取数据', data);
    });
  }, []);

  const M = useMemo(_ => e(Context.Provider, { value: [state, dispatch] }, props.children), [state]);
  return M;
};

export default Store;
