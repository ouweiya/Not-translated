import React, { Fragment as f, createElement as e } from 'react';
import 'typeface-roboto';
import Options from './OptionsPage/index';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import Store from './OptionsPage/Store';

const theme = createMuiTheme({
  palette: {
    primary: blue,
    secondary: blue
  }
});

export default e(ThemeProvider, { theme }, e(CssBaseline), e(Store, null, e(Options)));
