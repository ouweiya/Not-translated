import React, { useState, useRef, useEffect, Fragment as f, createElement as e } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from './components/Table';
import Drawer from './components/Drawer';

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },

  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  const [currentData, setCurrentData] = useState({});

  return (
    <div className={classes.root}>
      <Drawer />

      <main className={classes.content}>
        <Table {...currentData} />
      </main>
    </div>
  );
}
