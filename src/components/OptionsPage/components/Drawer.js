import React, { useState, useRef, useEffect, Fragment as f, createElement as e, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Search from './Search';
import { Context } from '../Store';

const drawerWidth = 300;
const useStyles = makeStyles(theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    overflow: 'hidden'
  },
  drawerPaper: {
    width: drawerWidth
  },
  toolbar: theme.mixins.toolbar,
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

export default _ => {
  const c = useStyles();
  const ref = useRef(null);
  const [txt, setFilter] = useState('');
  const [currentData, setCurrentData] = useState({});
  const [{ data, domain }, dispatch] = useContext(Context);
  // console.log(11, useContext(Context));
  // console.log('抽屉:', data);

  const scroll = e => {
    e.target.scrollTop > 30 && ref.current.classList.add(c.shadow);
    e.target.scrollTop < 30 && ref.current.classList.remove(c.shadow);
  };

  const SearchBox = e('div', { className: c.box, ref }, e(Search, { setFilter }), e(Divider));

  const renderlist = Object.keys(data)
    .filter(v => v !== 'globalCss')
    .filter(v => v.includes(txt))
    .map((v, i) =>
      e(
        ListItem,
        { button: true, key: i, onClick: e => dispatch({ type: 'domain', domain: v }), selected: domain === v },
        e(ListItemText, { primary: v, className: c.txt })
      )
    );

  const listBox = e(List, null, renderlist);

  const drawerOption = {
    className: c.drawer,
    variant: 'permanent',
    classes: { paper: c.drawerPaper },
    anchor: 'left',
    onScroll: scroll
  };

  return e(Drawer, drawerOption, SearchBox, e('div', { className: c.toolbar }), listBox);
};
