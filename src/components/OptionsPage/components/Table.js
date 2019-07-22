import React, { useEffect, useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import Tooltip from '@material-ui/core/Tooltip';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Input from '@material-ui/core/Input';
import Switch from '@material-ui/core/Switch';
import Css from './Css';

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

const headRows = [
  { id: 'sty', numeric: false, label: '运用样式' },
  { id: 'def', numeric: true, label: '不运用样式' },
  { id: 'mid', numeric: true, label: '强制翻译' }
];

const EnhancedTableToolbar = props => {
  const classes = useToolbarStyles();
  const { numSelected, remove, add, toggle, setToggle } = props;

  return (
    <>
      {toggle &&
        (numSelected === 0 ? (
          <Tooltip title='Add'>
            <Fab color='primary' className={classes.absolute} onClick={add}>
              <AddIcon />
            </Fab>
          </Tooltip>
        ) : (
          <Tooltip title='Delete'>
            <Fab color='primary' className={classes.absolute} onClick={remove}>
              <DeleteIcon />
            </Fab>
          </Tooltip>
        ))}
      <Switch
        color='primary'
        checked={!toggle}
        onChange={_ => setToggle(d => !d)}
        value='checkedA'
        className={classes.spacer}
      />
    </>
  );
};

const EnhancedTableHead = props => {
  const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
  const createSortHandler = property => event => onRequestSort(event, property);

  return (
    <TableHead>
      <TableRow>
        <TableCell padding='checkbox'>
          <Checkbox
            indeterminate={numSelected > 0 && numSelected < rowCount}
            checked={!!rowCount && numSelected === rowCount}
            onChange={onSelectAllClick}
          />
        </TableCell>

        {headRows.map((row, i) => (
          <TableCell key={i} align={row.numeric ? 'center' : 'left'} sortDirection={orderBy === row.id ? order : false}>
            <TableSortLabel active={orderBy === row.id} direction={order} onClick={createSortHandler(row.id)}>
              {row.label}
            </TableSortLabel>
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

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

const InputMe = React.memo(
  ({ val, row, ...props }) => {
    const classes = useStyles2();
    // let toggle = true;
    const click = e => {
      e.stopPropagation();
      // (toggle = !toggle) && e.target.blur();
    };

    return (
      <Input
        className={classes.root}
        value={val === undefined ? '' : val}
        onClick={click}
        // onBlur={e => toggle || (toggle = true)}
        {...props}
      />
    );
  },
  (prevProps, nextProps) => {
    if (prevProps.row === nextProps.row) return true;
    return false;
  }
);

const Checkbox2 = React.memo(
  props => {
    return <Checkbox {...props} />;
  },
  (prevProps, nextProps) => {
    if (prevProps.checked === nextProps.checked) return true;
    return false;
  }
);

const EnhancedTableToolbar2 = React.memo(
  props => <EnhancedTableToolbar {...props} />,
  (prevProps, nextProps) => {
    if (prevProps.numSelected === nextProps.numSelected && prevProps.toggle === nextProps.toggle) return true;
    return false;
  }
);
const EnhancedTableHead2 = React.memo(
  props => <EnhancedTableHead {...props} />,
  (prevProps, nextProps) => {
    if (
      prevProps.numSelected === nextProps.numSelected &&
      prevProps.order === nextProps.order &&
      prevProps.orderBy === nextProps.orderBy &&
      prevProps.rowCount === nextProps.rowCount
    )
      return true;
    return false;
  }
);

const debounce = (_ => {
  let time = null;
  return (domain, data) => {
    clearTimeout(time);
    time = setTimeout(() => {
      const fn = (sty, def, mid) => ({ sty, def, mid });
      let arr = ['sty', 'def', 'mid'].map(name => data.reduce((acc, v) => (v[name] ? acc.concat(v[name]) : acc), []));
      // arr = arr.map(v => [...new Set(v)]);
      // console.log(arr);
      let result = fn(...arr);
      console.log('result', { [domain]: result });
      chrome.storage.sync.set({ [domain]: result });
    }, 500);
  };
})();

const createData = (sty, def, mid, id) => ({ sty, def, mid, id });

export default function EnhancedTable({ domain, data: dataAll }) {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('calories');
  const [selected, setSelected] = useState([]);
  const [toggle, setToggle] = useState(true);
  const ref = useRef(true);

  const handleRequestSort = (event, property) => {
    const isDesc = orderBy === property && order === 'desc';
    setOrder(isDesc ? 'asc' : 'desc');
    setOrderBy(property);
    setData(data => [...data].reverse());
    console.log('reverse');
  };

  useEffect(
    _ => {
      if (dataAll && dataAll[domain]) {
        let { sty, def, mid } = dataAll[domain];
        const i = Object.values(dataAll[domain]).reduce((acc, v) => (v.length > acc ? (acc = v.length) : acc), 0);
        const rows = [...Array(i)].map((v, i) => createData(sty[i] || '', def[i] || '', mid[i] || '', i));
        setData(rows);
        // console.log(rows);
      }
    },
    [domain, dataAll]
  );

  useEffect(
    _ => {
      if (ref.current) {
        ref.current = false;
        return;
      }
      !data.length && chrome.storage.sync.remove(domain);
      console.log('之后', data);
      debounce(domain, data);
    },
    [data]
  );

  const handleSelectAllClick = event => {
    console.log('event.target.checked', event.target.checked);
    if (event.target.checked) {
      const newSelecteds = data.map(n => n.id);
      console.log(newSelecteds);
      setSelected(newSelecteds);
      return;
    }
    setSelected([]);
  };

  const handleClick = (event, name) => {
    selected.includes(name) ? setSelected(selected.filter(v => v !== name)) : setSelected(selected.concat(name));
  };

  const isSelected = name => selected.indexOf(name) !== -1;

  const remove = _ => {
    setData(data => data.filter(v => !selected.includes(v.id)));
    setSelected([]);
  };

  const add = _ => {
    const a = createData(undefined, undefined, undefined, Date.now());
    setData(data => data.concat(a));
  };
  const edit = (field, row) => e => {
    const val = e.target.value;
    const newRow = { ...row, [field]: val };
    setData(data => data.map(v => (v === row ? newRow : v)));
    console.log('edit:', data.map(v => (v === row ? newRow : v)));
    console.log('是否重复 => ', data.map(v => v[field]).includes(val));
  };

  return (
    <Paper className={classes.paper}>
      <EnhancedTableToolbar2
        numSelected={selected.length}
        remove={remove}
        add={add}
        toggle={toggle}
        setToggle={setToggle}
      />

      <div className={classes.tableWrapper}>
        {toggle ? (
          <Table className={classes.table} size='medium'>
            <EnhancedTableHead2
              numSelected={selected.length}
              order={order}
              orderBy={orderBy}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={data.length}
            />

            <TableBody>
              {data.length ? (
                data.map((row, i) => {
                  const isItemSelected = isSelected(row.id);

                  return (
                    <TableRow hover onClick={e => handleClick(e, row.id)} key={i} selected={isItemSelected}>
                      <TableCell padding='checkbox'>
                        <Checkbox2 checked={isItemSelected} />
                      </TableCell>

                      <TableCell scope='row'>
                        <InputMe val={row.sty} onChange={edit('sty', row)} row={row} />
                      </TableCell>
                      <TableCell align='center'>
                        <InputMe val={row.def} onChange={edit('def', row)} row={row} />
                      </TableCell>
                      <TableCell align='center'>
                        <InputMe val={row.mid} onChange={edit('mid', row)} row={row} />
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
          </Table>
        ) : (
          <Css />
        )}
      </div>
    </Paper>
  );
}
