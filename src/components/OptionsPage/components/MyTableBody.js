import React, { Fragment as f, createElement as e, useContext, useEffect, useState } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { Context } from '../Store';

const MyTableBody = _ => {
  const [{ data, selected, rows, domain }, dispatch] = useContext(Context);
  // const [localData, setLocalData] = useState(data);
  const createData = (sty, def, mid, id) => ({ sty, def, mid, id });

  useEffect(() => {
    if (data[domain]) {
      let { sty, def, mid } = data[domain];
      const i = Object.values(data[domain]).reduce((acc, v) => (v.length > acc ? (acc = v.length) : acc), 0);
      const rows = [...Array(i)].map((v, i) => createData(sty[i] || '', def[i] || '', mid[i] || '', i));
      console.log(rows, 111);
      dispatch({ type: 'rows', rows });
    }
    return () => {
      dispatch({ type: 'selected', selected: [] });
    };
  }, [data, domain]);

  const handleClick = (e, id) => {
    selected.includes(id)
      ? dispatch({ type: 'selected', selected: selected.filter(v => v !== id) })
      : dispatch({ type: 'selected', selected: selected.concat(id) });
  };

  return (
    <TableBody>
      {1 ? (
        rows.map((row, i) => {
          return (
            <TableRow hover onClick={e => handleClick(e, row.id)} key={i} selected={selected.includes(row.id)}>
              <TableCell padding='checkbox'>
                <Checkbox checked={selected.includes(row.id)} />
              </TableCell>
              <TableCell scope='row'>
                {row.sty}
                {/* <InputMe val={row.sty} onChange={edit('sty', row)} row={row} /> */}
              </TableCell>
              <TableCell align='center'>
                {row.def}
                {/* <InputMe val={row.def} onChange={edit('def', row)} row={row} /> */}
              </TableCell>
              <TableCell align='center'>
                {row.mid}
                {/* <InputMe val={row.mid} onChange={edit('mid', row)} row={row} /> */}
              </TableCell>
            </TableRow>
          );
        })
      ) : (
        <TableRow>
          <TableCell colSpan={4}>
            <Typography align='center' variant='subtitle2' color='textSecondary'>
              没有数据
            </Typography>
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  );
};

export default MyTableBody;
// selected.includes(id) ? setSelected(selected.filter(v => v !== id)) : setSelected(selected.concat(id));
