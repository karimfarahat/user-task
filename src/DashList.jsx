import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Divider } from "@mui/material";

export default function NestedList(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{
        width: "100%",
        maxWidth: 360,
        color: props.grayColor,

        ...(!props.isOpen && { display: "none" }),
      }}
    >
      <ListSubheader
        align="left"
        sx={{
          backgroundColor: props.navyColor,
          color: props.grayColor,
          letterSpacing: "1.5px",
          marginTop: "10px",
          fontSize: "18px",
        }}
      >
        SETTINGS
      </ListSubheader>
      <Divider />

      <ListItemButton>
        <ListItemText primary="ATM Settings" />
        <ExpandMore />
      </ListItemButton>
      <ListItemButton>
        <ListItemText primary="Business Setup" />
        <ExpandMore />
      </ListItemButton>
      <ListItemButton
        selected={open}
        onClick={handleClick}
        className="ListItemButton"
      >
        <ListItemText primary="User Management" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List
          component="div"
          disablePadding
          sx={{ backgroundColor: "#1e2642" }}
        >
          <ListItemButton
            className="sidenav-user"
            selected={open}
            sx={{ pl: 4 }}
          >
            <ListItemText primary="Users" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Profiles" />
          </ListItemButton>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="Groups" />
          </ListItemButton>
        </List>
      </Collapse>
      <ListItemButton>
        <ListItemText primary="License Management" />
      </ListItemButton>
    </List>
  );
}
