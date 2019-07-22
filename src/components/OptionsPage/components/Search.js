import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SearchIcon from '@material-ui/icons/Search';
import Input from '@material-ui/core/Input';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  search: {
    position: 'relative'
  },
  searchIcon: {
    width: theme.spacing(3.5),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 5),
    width: '100%'
  },
  input: {
    margin: theme.spacing(1)
  }
}));

export default function SearchAppBar({ setFilter }) {
  const classes = useStyles();

  return (
    <Toolbar className={classes.root}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <Input
          placeholder='Search…'
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput
          }}
          onChange={e => setFilter(e.target.value.trim())}
        />
      </div>
    </Toolbar>
  );
}
