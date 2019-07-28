import React, { useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Container from '@material-ui/core/Container';
import { Context } from '../Store';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    maxWidth: 960,
    margin: 'auto'
  },
  textField: {
    margin: theme.spacing(4, 1),
    '& textarea': {
      fontFamily: 'Fira Code Regular',
      fontSize: '14px'
    }
  },
  last: {
    marginBottom: theme.spacing(8)
  }
}));

export default function OutlinedTextFields() {
  const c = useStyles();
  const [{ data, domain }, dispatch] = useContext(Context);

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
    dispatch({ type: 'data', data: a });
  };

  let Css = '';
  if (data[domain]) {
    Css = data[domain].css || '';
  }

  return (
    <Container maxWidth='md'>
      <TextField
        label={domain || '未选择'}
        multiline
        rows='8'
        className={c.textField}
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
        className={`${c.textField} ${c.last}`}
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
