import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import a from '../assets/18.png';
import b from '../assets/14.png';

const App = () => {
  const [count, setCount] = useState(0);
  const print = _ => {
    setCount(count + 1);
    console.log(count);
  };

  useEffect(() => {
    // console.log('Init-2000');
  }, []);

  return (
    <>
      <Button variant='contained' color='primary' onClick={print}>
        Hello World
      </Button>
      <br />
      {location.hash === '#options' ? (
        <img src={b} width='500' alt='ouwei' />
      ) : (
        <img src={a} width='300' alt='ouwei' />
      )}
    </>
  );
};

export default App;
