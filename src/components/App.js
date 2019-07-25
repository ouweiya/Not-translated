import React from 'react';
import Popup from './Popup';
import Options from './Options';
import { Provider } from 'react-redux';
import { store } from './redux';

const App = () => {
  return (
    <>
      {window.location.hash === '#popup' ? (
        <Popup />
      ) : (
        <Provider store={store}>
          <Options />
        </Provider>
      )}
    </>
  );
};

export default App;
