import React from 'react';
import Popup from './Popup';
import Options from './Options';

// import Button from '@material-ui/core/Button';

const App = () => {
  return <>{window.location.hash === '#popup' ? <Popup /> : <Options />}</>;
};

export default App;
