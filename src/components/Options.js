import React from 'react';
import 'typeface-roboto';
import App from './OptionsPage/App';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';

import { connect } from 'react-redux';
import { activateGeod, closeGeod } from './redux';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue
  }
});

const Options = _ => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

const mapStateToProps = state => ({
  geod: state.geod
});

const mapDispatchToProps = {
  activateGeod,
  closeGeod
};

const OptionsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Options);

export default OptionsContainer;
