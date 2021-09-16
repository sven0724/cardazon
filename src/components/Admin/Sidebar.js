import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';
import { useHistory } from "react-router-dom";

import {
  HomeOutlined,
  WhatshotOutlined,
  AccountBalanceWalletOutlined,
  FolderOutlined,
  RestorePageOutlined,
  AlarmOutlined,
  FavoriteBorderOutlined,
  MusicNoteOutlined,
  SportsEsportsOutlined,
  ExpandMoreOutlined
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  selected: {
    color: "red",
    background: "transparent"
  },
}));

const MenuList = [
  {
    icon: <HomeOutlined />,
    label: 'Home',
    path: 'dashboard'
  },
  {
    icon: <Icon>school</Icon>,
    label: 'Lessons',
    path: 'lessons'
  },
  {
    icon: <AccountBalanceWalletOutlined />,
    label: 'Leads',
    path: 'leads'
  },
  {
    icon: <Icon>menu_book</Icon>,
    label: 'Chops',
    path: 'chops'
  },
  {
    icon: <Icon>credit_card</Icon>,
    label: 'Fullz',
    path: 'fullz'
  },
  {
    icon: <RestorePageOutlined />,
    label: 'Spoofing',
    path: 'spoofing'
  },
  {
    icon: <Icon>build</Icon>,
    label: 'Tools',
    path: 'tools'
  },
  {
    icon: <Icon>home_repair_service</Icon>,
    label: 'Services',
    path: 'services'
  },
  {
    icon: <Icon>call</Icon>,
    label: 'Contact Us',
    path: 'contact'
  },
]

function Sidebar(props) {
  const classes = useStyles();
  const history = useHistory();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const handleListItemClick = (event, index, listItem) => {
    setSelectedIndex(index);
    history.push(`/admin/${listItem.path}`)
  };

  console.log(history.location.pathname);

  return (
    <div className="w-64 h-screen shadow-md" style={{ background: "linear-gradient(to bottom left, #223c87, #0c1852)" }}>
      <div className="h-16 text-center text-xl my-auto">
        <img src="/logo.png" alt="logo" />
      </div>
      <Divider />
      <List component="nav" aria-label="main mailbox folders">
        {MenuList.map((listItem, index) => (
          <ListItem
            key={index}
            classes={{ selected: "active" }}
            className="pl-8 py-3 sidebar-item"
            button
            selected={selectedIndex === index}
            onClick={(event) => handleListItemClick(event, index, listItem)}
          >
            <ListItemIcon className={`min-w-max mr-2.5 text-crypton`}>
              {listItem.icon}
            </ListItemIcon>
            <ListItemText primary={listItem.label} className="text-sm text-gray-200" />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List component="nav" aria-label="secondary mailbox folder">
        <ListItem
          className="pl-8 py-3 sidebar-item"
          button
        // onClick={(event) => handleListItemClick(event, index)}
        >
          <ListItemIcon className={`min-w-max mr-2.5 text-crypton`}>
            <Icon>login</Icon>
          </ListItemIcon>
          <ListItemText primary="Log out" className="text-sm text-gray-200" />
        </ListItem>
      </List>
    </div>
  );
}

export default Sidebar;
