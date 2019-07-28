import React, { Fragment as f, createElement as e, useContext, useEffect, useState } from 'react';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import { Context } from '../Store';
import InputMe from './MyInput';

const MyTableBody = _ => {
  const [{ data, selected, rows, domain }, dispatch] = useContext(Context);
  const createData = (sty, def, mid, id) => ({ sty, def, mid, id });

  useEffect(() => {
    let k = Object.keys(data).filter(v => v !== 'globalCss');

    if (k.length === 1) {
      dispatch({ type: 'domain', domain: `${k}` });
    }
    if (data[domain]) {
      let { sty, def, mid } = data[domain];
      const i = [sty, def, mid].reduce((acc, v) => (v.length > acc ? v.length : acc), 0);
      const rows = [...Array(i)].map((v, i) => createData(sty[i] || '', def[i] || '', mid[i] || '', i));

      dispatch({ type: 'rows', rows });

      if (!rows.length) {
        let k = Object.keys(data).filter(v => v !== 'globalCss');
        let i = k.indexOf(domain) + 1;
        let newdom = k[i];

        dispatch({ type: 'domain', domain: newdom });

        const obj = { ...data };
        delete obj[domain];
        dispatch({ type: 'data', data: obj });
        chrome.storage.sync.remove(domain);
      }
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
      {rows.length ? (
        rows.map((row, i) => {
          return (
            <TableRow hover onClick={e => handleClick(e, row.id)} key={i} selected={selected.includes(row.id)}>
              <TableCell padding='checkbox'>
                <Checkbox checked={selected.includes(row.id)} />
              </TableCell>
              <TableCell scope='row'>
                <InputMe row={row} field='sty' />
              </TableCell>
              <TableCell align='left'>
                <InputMe row={row} field='def' />
              </TableCell>
              <TableCell align='left'>
                <InputMe row={row} field='mid' />
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
