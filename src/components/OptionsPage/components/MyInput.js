import React, { useEffect, Fragment as f, createElement as e, useContext, useMemo, useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import { Context } from '../Store';

const useStyles = makeStyles(theme => ({
  root: {
    '& div::before': {
      borderBottomColor: '#00000000'
    }
  }
}));

const InputMe = ({ row, field }) => {
  const c = useStyles();
  const [{ rows, domain, data, error }, dispatch] = useContext(Context);
  const [Error, setError] = useState(false);
  const [Txt, setTxt] = useState('');

  useEffect(() => {
    setError(false);
    setTxt('');
  }, [data]);

  const fn = v => {
    return [...new Set(rows.reduce((acc, v2) => (v2[v] && isNaN(parseFloat(v2[v])) ? acc.concat(v2[v]) : acc), []))];
  };

  const Submit = e => {
    let obj2 = ['sty', 'def', 'mid'].reduce((obj, v) => {
      return { ...obj, [v]: fn(v) };
    }, {});
    obj2 = { ...data[domain], ...obj2 };
    console.log('obj2', obj2);

    let obj = { ...data, [domain]: obj2 };
    dispatch({ type: 'data', data: obj });
  };

  const edit = e => {
    if (!domain) {
      return;
    }
    const val = e.target.value;
    if (!isNaN(parseFloat(val))) {
      setError(true);
      setTxt('选择器不能是数字');
    } else if (rows.map(v => v[field]).includes(val) && val) {
      setError(true);
      setTxt('重复选择器');
    } else {
      setError(false);
      setTxt('');
    }

    dispatch({ type: 'error', error: val });

    const newRow = { ...row, [field]: val };
    let newRows = rows.map(v => (v === row ? newRow : v));
    dispatch({ type: 'rows', rows: newRows });
  };

  return (
    <TextField
      value={row[field] === undefined ? '' : row[field]}
      onChange={edit}
      classes={{ root: c.root }}
      onClick={e => e.stopPropagation()}
      onBlur={Submit}
      label={Txt}
      error={!!(error === row[field] && error && Error)}
    />
  );
};

const MyInput = props => {
  return useMemo(() => {
    console.log('xxxxxxx');
    return <InputMe {...props} />;
  }, [props.row]);
};

export default MyInput;

// const compare = (prev, next) => {
//   console.log(prev, '===', next);
//   if (prev.value === next.value) {
//     return true;
//   }
//   return false;
// };

// return (
//   <MyInput
//     value={row[field] === undefined ? '' : row[field]}
//     onChange={edit}
//     className={c.root}
//     onClick={e => e.stopPropagation()}
//   />
// );
// let MyInput = React.memo(props => {
//   console.log('MyInput', props);
//   return <Input {...props} />;
// }, compare);

// const MyInput = React.memo(props => {
//   console.log('MyInput', props);
//   return <Input {...props} />;
// }, compare);

// const MyInput = React.memo(props => {
//   return <InputMe {...props} />;
// }, compare);

// export default MyInput;

// (prevProps, nextProps) => {
//   if (prevProps.row === nextProps.row) return true;
//   return false;
// };

// onBlur={e => toggle || (toggle = true)}
// const classes = useStyles2();
// // let toggle = true;
// const click = e => {
//   e.stopPropagation();
//   // (toggle = !toggle) && e.target.blur();
// };
