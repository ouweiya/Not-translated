import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Table from './components/Table';
import Search from './components/Search';

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  appBar: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflow: 'hidden'
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default
  },
  box: {
    background: '#fff',
    boxSizing: 'border-box',
    position: 'fixed',
    zIndex: 10,
    width: drawerWidth - 5,
    transition: 'box-shadow 0.3s ease-in-out'
  },
  shadow: {
    boxShadow: '0px 2px 4px -1px #00000033, 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)'
  },
  txt: {
    paddingLeft: 8
  }
}));

export default function PermanentDrawerLeft() {
  const classes = useStyles();
  let arr = ['127.0.0.1', 'github.com', 'material-ui.com'];
  arr = [...Array(10)].reduce((acc, v) => acc.concat(arr), []);

  const [domain, setDomain] = useState(arr);
  const [txt, setFilter] = useState('');
  const ref = useRef(null);

  const scroll = e => {
    e.target.scrollTop > 30 && ref.current.classList.add(classes.shadow);
    e.target.scrollTop < 30 && ref.current.classList.remove(classes.shadow);
  };

  return (
    <div className={classes.root}>
      <Drawer
        className={classes.drawer}
        variant='permanent'
        classes={{
          paper: classes.drawerPaper
        }}
        anchor='left'
        onScroll={scroll}
      >
        <div className={classes.box} ref={ref}>
          <Search setFilter={setFilter} />
          <Divider />
        </div>

        <div className={classes.toolbar} />

        <List>
          {domain
            .filter(v => v.includes(txt))
            .map((v, i) => (
              <ListItem button key={i}>
                <ListItemText primary={v} className={classes.txt} />
              </ListItem>
            ))}
        </List>
      </Drawer>

      <main className={classes.content}>
        <Table />
      </main>
    </div>
  );
}
