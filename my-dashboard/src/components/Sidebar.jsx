import React from "react";
import { Drawer, List, ListItem, ListItemText, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

const Sidebar = ({ open, setOpen }) => {
  return (
    <Drawer variant="permanent" open={open} sx={{ width: open ? 240 : 60 }}>
      <IconButton onClick={() => setOpen(!open)}><MenuIcon /></IconButton>
      <List>
        <ListItem button>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="FAQ Page" />
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Sidebar;
