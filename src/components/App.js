import React, { createElement as e, Fragment as f } from 'react';
import Popup from './Popup';
import Options from './Options';

const App = () => {
  const El = window.location.hash === '#popup' ? e(Popup) : Options;
  return e(f, null, El);
};

export default App;
// e(Store, null, Options)
