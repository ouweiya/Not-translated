import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import a from '../assets/18.png';

const App = () => {
  const [count, setCount] = useState(0);
  const print = _ => {
    setCount(count + 1);
    console.log(count);
  };

  return (
    <>
      <h1>popup & option</h1>
      <Button variant='contained' color='primary' onClick={print}>
        Hello World 2019
      </Button>
      <br />
      <img src={a} width='300' alt='ouwei' />
    </>
  );
};

export default App;
