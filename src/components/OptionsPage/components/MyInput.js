import React, { useEffect, Fragment as f, createElement as e, useReducer, useMemo } from 'react';

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
