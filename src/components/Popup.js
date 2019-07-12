import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    padding: 10,
    width: 150
  },
  button: {
    marginBottom: 8
  }
}));

export default _ => {
  const classes = useStyles();
  const [once, setOnce] = useState(true);

  const Selection = e => {
    chrome.tabs.getSelected(tab => {
      chrome.tabs.executeScript(tab.id, {
        file: 'selector.js',
        runAt: 'document_start'
      });
    });
    setOnce(false);
    window.close();
  };

  const clear = () => {
    chrome.storage.sync.clear(console.log.bind(console, 'Clear'));
  };
  const stop = () => {
    chrome.tabs.query({ active: true, currentWindow: true }, tab => {
      chrome.tabs.sendMessage(tab[0].id, 'NOTRANSLATE');
    });
  };

  return (
    <div className={classes.root}>
      <Button
        color='primary'
        variant='contained'
        fullWidth
        className={classes.button}
        onClick={once ? Selection : null}
      >
        翻译
      </Button>
      <Button
        color='secondary'
        variant='contained'
        fullWidth
        className={classes.button}
        onClick={stop}
      >
        不翻译
      </Button>
      <Button color='secondary' variant='contained' fullWidth onClick={clear}>
        清空
      </Button>
    </div>
  );
};
