import React, { Fragment as f, createElement as e, useContext, useEffect, useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Tooltip from '@material-ui/core/Tooltip';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
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

const EnhancedTableToolbar = props => {
  const c = useToolbarStyles();
  const [{ selected, data, domain, rows, toggle }, dispatch] = useContext(Context);

  const createData = (sty, def, mid, id) => ({ sty, def, mid, id });

  const remove = _ => {
    let rows2 = rows.filter(v => !selected.includes(v.id));

    let obj2 = ['sty', 'def', 'mid'].reduce((obj, v) => {
      return { ...obj, [v]: rows2.reduce((acc, v2) => (v2[v] ? acc.concat(v2[v]) : acc), []) };
    }, {});
    obj2 = { ...data[domain], ...obj2 };
    let obj = { ...data, [domain]: obj2 };
    dispatch({ type: 'data', data: obj });
  };

  const add = _ => {
    if (rows.every(v => v.sty || v.def || v.mid)) {
      const row = createData(undefined, undefined, undefined, Date.now());
      dispatch({ type: 'rows', rows: rows.concat(row) });
    }
  };

  const Icon = (title, callback, icon) => {
    return e(Tooltip, { title }, e(Fab, { color: 'primary', className: c.absolute, onClick: callback }, e(icon)));
  };

  const toggleHandler = _ => {
    dispatch({ type: 'toggle', toggle: !toggle });
    dispatch({ type: 'selected', selected: [] });
  };

  return e(
    f,
    null,
    !toggle && (selected.length === 0 ? Icon('Add', add, AddIcon) : Icon('Delete', remove, DeleteIcon)),
    e(Switch, {
      color: 'primary',
      checked: toggle,
      onChange: toggleHandler,
      value: true,
      className: c.spacer
    })
  );
};

export default EnhancedTableToolbar;
