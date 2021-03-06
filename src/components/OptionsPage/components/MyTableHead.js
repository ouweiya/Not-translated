import React, { useState, Fragment as f, createElement as e, useContext } from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import { Context } from '../Store';

const headRows = [
  { id: 'sty', label: '运用样式' },
  { id: 'def', label: '不运用样式' },
  { id: 'mid', label: '强制翻译' }
];

const EnhancedTableHead = () => {
  const [{ selected, rows, data }, dispatch] = useContext(Context);

  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('sty');
  const numSelected = selected.length;
  const rowCount = rows.length;

  const handleSelectAllClick = event => {
    if (event.target.checked) {
      const newSelecteds = rows.map(row => row.id);
      dispatch({ type: 'selected', selected: newSelecteds });
      return;
    }
    dispatch({ type: 'selected', selected: [] });
  };

  const onRequestSort = (e, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    dispatch({ type: 'rows', rows: [...rows].reverse() });
  };
  const createSortHandler = property => e => onRequestSort(e, property);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={!!rowCount && numSelected === rowCount}
            onChange={handleSelectAllClick}
          />
        </TableCell>

        {headRows.map((row, i) => (
          <TableCell key={i} align='left' sortDirection={orderBy === row.id ? order : false}>
            <TableSortLabel active={orderBy === row.id} direction={order} onClick={createSortHandler(row.id)}>
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

export default EnhancedTableHead;
