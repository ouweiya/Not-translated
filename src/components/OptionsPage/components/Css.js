import React, { useState, useEffect, useContext, useCallback } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import './Css.css';
import { Context } from '../Store';

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

export default function OutlinedTextFields() {
  const classes = useStyles();
  const [{ data, domain }, dispatch] = useContext(Context);
  // const [Css, setCss] = useState('');
  // window.data = data;
  useEffect(() => {
    // console.log(data);
    // if (data[domain]) {
    //   setCss(data[domain].css);
    //   console.log('CCC:', Css);
    // }
  }, [data, domain]);

  const setLocalCss = e => {
    if (!domain) {
      return;
    }
    const css = e.target.value;
    const newCss = { ...data[domain], css };
    let newdata = { ...data, [domain]: newCss };
    dispatch({ type: 'data', data: newdata });
  };

  const setGlobalCss = e => {
    const css = e.target.value;
    let a = { ...data, globalCss: css };
    console.log(a);
    dispatch({ type: 'data', data: a });
  };

  let Css = '';
  if (data[domain]) {
    Css = data[domain].css || '';
    // console.log('CCC:', Css);
  }
  // console.log(data.globalCss, 3323);

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
        onChange={setLocalCss}
        id='text'
        value={Css}
        placeholder='默认运用全局'
        InputLabelProps={{
          shrink: true
        }}
      />

      <TextField
        label='全局'
        multiline
        rows='8'
        className={`${classes.textField} ${classes.last}`}
        margin='normal'
        variant='outlined'
        fullWidth
        value={data.globalCss}
        onChange={setGlobalCss}
        id='text'
        InputLabelProps={{
          shrink: true
        }}
      />
    </Container>
  );
}
