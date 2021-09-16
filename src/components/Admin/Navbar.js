import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import Divider from '@material-ui/core/Divider';

import {
  HomeOutlined, 
} from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
  selected: {
    color: "red",
    background: "transparent"
  },
}));

function Navbar() {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };

  return (
    <div className="h-16 shadow-md flex justify-end" style={{background: "#132361"}}>
      <Divider orientation="vertical" className="bg-gray-500" />
      <div className="flex items-center px-3">
            <div className="balance">0 $</div>
            <span className="userName">Gold Dev</span>
            <Icon className="text-white">expand_more</Icon>
          </div>
    </div>
  );
}

export default Navbar;
