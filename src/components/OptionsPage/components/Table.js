import React, { useEffect, useState, useRef, Fragment as f, createElement as e, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

import MyTableHead from './MyTableHead';
import MyTableToolbar from './MyTableToolbar';
import MyTableBody from './MyTableBody';
import Css from './Css';

import { Context } from '../Store';

const useToolbarStyles = makeStyles(theme => ({
  absolute: {
    position: 'fixed',
    bottom: theme.spacing(10),
    right: theme.spacing(5),
    zIndex: 20
  },
  spacer: {
    position: 'absolute',
    top: 0,
    right: 20,
    zIndex: 20
  }
}));

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%'
  },
  paper: {
    width: '100%',
    marginBottom: theme.spacing(2)
  },
  table: {
    minWidth: 750
  },
  tableWrapper: {
    overflowX: 'auto'
  }
}));

const createData = (sty, def, mid, id) => ({ sty, def, mid, id });

export default function EnhancedTable() {
  const c = useToolbarStyles();
  const [{ toggle }, dispatch] = useContext(Context);

  return e(
    Paper,
    { className: c.paper },
    e(MyTableToolbar),
    !toggle
      ? e(
          'div',
          { className: c.tableWrapper },
          e(Table, { className: c.table, size: 'medium' }, e(MyTableHead), e(MyTableBody))
        )
      : e(Css)
  );
}
