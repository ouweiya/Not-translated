import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import './Css.css';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 960,
    margin: 'auto'
  },
  textField: {
    margin: theme.spacing(4, 1)
  },
  last: {
    marginBottom: theme.spacing(8)
  }
}));

const debounce = (() => {
  let time = null;
  return (domain, data) => {
    clearTimeout(time);
    time = setTimeout(() => {
      // console.log(domain, data);
      // chrome.storage.sync.set({ '127.0.0.1': { css: 'dsdsdfasfdfr342343242342343' } });
    }, 500);
  };
})();

export default function OutlinedTextFields({ domain, dataAll }) {
  const classes = useStyles();
  const code = `font-family: 'Fira Code Regular', Consolas !important;\nfont-size: 14px !important;`;
  const [globalCss, setGlobalCss] = useState(code);
  const [localCss, setLocalCss] = useState(code);

  useEffect(() => {
    // console.log(localCss);
    // debounce(domain, { ...dataAll[domain], css: localCss });
    // chrome.storage.sync.set({ [domain]: { ...dataAll[domain], css: localCss } });
    // chrome.storage.sync.set({ [domain]: { ...dataAll[domain], css: localCss } });
    // console.log('ccc', domain, dataAll);
    // console.log({ ...dataAll[domain], css: localCss });
  }, [localCss]);

  useEffect(() => {
    console.log(globalCss);
  }, [globalCss]);

  return (
    <Container maxWidth='md'>
      <TextField
        label={domain || '未选择'}
        multiline
        rows='8'
        className={classes.textField}
        margin='normal'
        variant='outlined'
        fullWidth
        value={localCss}
        onChange={e => setLocalCss(e.target.value)}
        id='text'
      />

      <TextField
        label='Global'
        multiline
        rows='8'
        className={`${classes.textField} ${classes.last}`}
        margin='normal'
        variant='outlined'
        fullWidth
        value={globalCss}
        onChange={e => setGlobalCss(e.target.value)}
        id='text'
      />
    </Container>
  );
}
