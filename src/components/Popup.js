import React, { useState, useEffect } from 'react';
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
  useEffect(() => {
    // Selection();
  }, []);
  const clear = () => {
    chrome.storage.sync.clear(console.log.bind(console, 'Clear'));

    chrome.tabs.getSelected(tab => {
      chrome.tabs.executeScript(tab.id, {
        code: `window.location.reload();`,
        runAt: 'document_start'
      });
    });
  };
  const stop = () => {
    // chrome.tabs.query({ active: true, currentWindow: true }, tab => {
    //   chrome.tabs.sendMessage(tab[0].id, 'NOTRANSLATE');
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   chrome.tabs.reload(tabs[0].id);
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
    //   chrome.tabs.update(tabs[0].id, { url: tabs[0].url });
    // });
    // chrome.tabs.query({ active: true, currentWindow: true }, function(arrayOfTabs) {
    //   var code = 'window.location.reload();';
    //   chrome.tabs.executeScript(arrayOfTabs[0].id, { code: code });
    // });
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
      <Button color='secondary' variant='contained' fullWidth className={classes.button} onClick={stop}>
        不翻译
      </Button>
      <Button color='secondary' variant='contained' fullWidth onClick={clear}>
        清空
      </Button>
    </div>
  );
};
