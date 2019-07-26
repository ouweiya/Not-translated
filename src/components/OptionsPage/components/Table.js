import React, { useEffect, useState, useRef, Fragment as f, createElement as e } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';

import MyTableHead from './MyTableHead';
import MyTableToolbar from './MyTableToolbar';
import MyTableBody from './MyTableBody';

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

const useStyles2 = makeStyles(theme => ({
  root: {
    '&::before': {
      borderBottomColor: '#00000000'
    },
    '&:hover:not(.Mui-disabled)::before': {
      borderBottomColor: '#00000000'
    }
  }
}));

const createData = (sty, def, mid, id) => ({ sty, def, mid, id });

export default function EnhancedTable({ domain, data: dataAll }) {
  const c = useToolbarStyles();
  return e(
    Paper,
    { className: c.paper },
    e(MyTableToolbar),
    e(
      'div',
      { className: c.tableWrapper },
      e(Table, { className: c.table, size: 'medium' }, e(MyTableHead), e(MyTableBody))
    )
  );
}
{
  /* <Table className={classes.table} size='medium'> </Table> */
}
/* <EnhancedTableHead2
numSelected={selected.length}
order={order}
orderBy={orderBy}
onSelectAllClick={handleSelectAllClick}
onRequestSort={handleRequestSort}
rowCount={data.length}
/> */
