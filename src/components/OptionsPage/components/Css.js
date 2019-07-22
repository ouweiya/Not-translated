import React, { useState } from 'react';
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
    marginBottom: theme.spacing(8),
    fontFamily: 'Fira Code Regular',
    color: 'pink'
  },
  root: {
    padding: 0
  }
}));

export default function OutlinedTextFields() {
  const classes = useStyles();
  const code = `font-family: 'Fira Code Regular', Consolas !important;\nfont-size: 14px !important;`;
  const [Css, setCss] = useState(code);

  const handleChange = e => {
    console.log(e.target.value);
    setCss(e.target.value);
  };

  return (
    <Container maxWidth='md'>
      <TextField
        label={'www.google.com'}
        multiline
        rows='8'
        className={classes.textField}
        margin='normal'
        variant='outlined'
        fullWidth
        value={Css}
        onChange={handleChange}
      />

      <TextField
        label='Global'
        multiline
        rows='8'
        className={`${classes.textField} ${classes.last}`}
        margin='normal'
        variant='outlined'
        fullWidth
        value={Css}
        onChange={handleChange}
      />
    </Container>
  );
}
