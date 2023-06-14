// import React, { Component } from "react";
// import Button from "@mui/material/Button";

// export default class Sidebar extends Component {
//   render() {
//     return (
//       <div>
//         <Button variant="contained">Hello World</Button>
//       </div>
//     );
//   }
// }
import logo from "./logo.png";
import * as React from "react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import MuiDrawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import NotificationsIcon from "@mui/icons-material/Notifications";
import {
  InputAdornment,
  FormControl,
  OutlinedInput,
  Button,
} from "@mui/material";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

import DashList from "./DashList";
import Users from "./Users";

import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";

import DashboardIcon from "@mui/icons-material/Dashboard";

import { Search } from "@mui/icons-material";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  "& .MuiDrawer-paper": {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    boxSizing: "border-box",
    ...(!open && {
      overflowX: "hidden",
      transition: theme.transitions.create("width", {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      width: theme.spacing(7),
      [theme.breakpoints.up("sm")]: {
        width: theme.spacing(9),
      },
    }),
  },
}));

// const ariaLabel = { "aria-label": "description" };
// TODO remove, this demo shouldn't need to reset the theme.
const grayColor = "#828796";
const navyColor = "#050e2d";

export default function Dashboard() {
  const [open, setOpen] = React.useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };

  const curDT = new Date().toUTCString().substring(0, 22);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar color="default" position="absolute" open={open}>
        <Toolbar
          sx={{
            pr: "24px",
            color: "GrayText", // keep right padding when drawer closed
          }}
        >
          <IconButton
            edge="start"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              marginRight: "36px",
              color: "#777777",
              ...(open && { display: "flex" }),
            }}
          >
            <ChevronLeftIcon
              sx={{ display: "none", ...(open && { display: "flex" }) }}
            />
            <MenuIcon />
          </IconButton>
          <Typography
            align="left"
            component="h1"
            variant="subtitle1"
            color="inherit"
            noWrap
            sx={{ flexGrow: 1, fontWeight: "bold" }}
          >
            Good Morning!
            <Typography
              variant="span"
              sx={{ fontWeight: "normal", marginLeft: "10px" }}
            >
              {curDT}
            </Typography>
          </Typography>

          <Box
            sx={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <IconButton color="inherit">
              <HelpOutlineIcon />
            </IconButton>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="primary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
            <Divider orientation="vertical" variant="middle" flexItem />
            <Typography
              variant="subtitle1"
              color="initial"
              sx={{ color: navyColor, fontWeight: "bold" }}
            >
              Nader Amer
            </Typography>

            <IconButton
              sx={{
                color: navyColor,
                backgroundColor: "#e6f1ff",
                fontSize: "18px",
                fontWeight: "bold",
              }}
            >
              NA
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        open={open}
        sx={{ "& .MuiDrawer-paper": { backgroundColor: navyColor } }}
      >
        <Toolbar
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            px: [1],
            backgroundColor: "#050e2d",
          }}
        >
          <img src={logo} />
        </Toolbar>

        <FormControl
          sx={{
            m: 1,
            width: "25ch",
            display: "none",
            ...(open && { display: "flex" }),
          }}
          variant="outlined"
        >
          <OutlinedInput
            id="outlined-adornment-weight"
            placeholder="Quick access"
            endAdornment={
              <InputAdornment position="end">
                {" "}
                <Search />
              </InputAdornment>
            }
            inputProps={{
              "aria-label": "weight",
            }}
            sx={{ background: "#fff", borderRadius: "50px" }}
          ></OutlinedInput>
        </FormControl>

        <Divider />
        <List sx={{ color: grayColor }} component="nav">
          <ListItemButton>
            <ListItemIcon>
              <DashboardIcon sx={{ color: grayColor }} />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>

          <DashList isOpen={open} grayColor={grayColor} navyColor={navyColor} />
        </List>
      </Drawer>
      <Box
        component="main"
        sx={{
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[100]
              : theme.palette.grey[900],
          flexGrow: 1,
          height: "100vh",
          overflow: "auto",
        }}
      >
        <Toolbar />
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
            <Typography
              variant="h5"
              element="h5"
              sx={{ color: navyColor, fontWeight: "bold" }}
            >
              User Management
            </Typography>
            <Button
              className="add-new-btn"
              variant="contained"
              sx={{ backgroundColor: "#22a565" }}
            >
              + Add New
            </Button>
          </Box>

          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: "flex", flexDirection: "column" }}>
              <Users />
            </Paper>
          </Grid>
          <Copyright sx={{ pt: 4 }} />
        </Container>
      </Box>
    </Box>
  );
}
