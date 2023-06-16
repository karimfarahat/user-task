import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { InputLabel, MenuItem, Link, Button, Divider } from "@mui/material";
import IconButton from "@mui/material/IconButton";

import NotInterestedIcon from "@mui/icons-material/NotInterested";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ModeEditOutlineIcon from "@mui/icons-material/ModeEditOutline";
import LockIcon from "@mui/icons-material/Lock";
import { Search } from "@mui/icons-material";
import dayjs from "dayjs";

import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from "@mui/x-data-grid";
import { TableCell, TableBody, TableRow, Typography } from "@mui/material";

function getRandomColor(factor) {
  // Generate random RGB values between 0 and 255
  const r = factor + Math.floor(Math.random() * 56);
  const g = factor + Math.floor(Math.random() * 56);
  const b = factor + Math.floor(Math.random() * 56);

  // Construct the color string in the format "rgb(r, g, b)"
  const color = `rgb(${r}, ${g}, ${b})`;

  return color;
}

const columns = [
  {
    field: "fullname",
    headerName: "Full name",
    width: 250,
    editable: true,
    renderCell: (params) => {
      const { row } = params;
      const initials = row.fullname
        .split(" ")
        .map((name) => name.charAt(0))
        .join("");
      const randomBackgroundColor = getRandomColor(200);
      const randomTextColor = getRandomColor(30);
      return (
        <TableBody>
          <TableRow>
            <TableCell
              sx={{
                display: "flex",
                gap: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <IconButton
                sx={{
                  color: randomTextColor,
                  backgroundColor: randomBackgroundColor,
                  fontSize: "12px",
                  width: "30px",
                  height: "30px",
                  fontWeight: "bold",
                }}
              >
                {initials}
              </IconButton>
              {row.fullname}
            </TableCell>
          </TableRow>
        </TableBody>
      );
    },
  },
  {
    field: "username",
    headerName: "User name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",

    width: 150,
    editable: true,
  },
  {
    field: "group",
    headerName: "Group",
    width: 150,
    editable: true,
  },
  {
    field: "status",
    headerName: "Status",

    width: 150,
    editable: true,
  },
  {
    field: "created_on",
    headerName: "Created On",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) => `${params.row.created_on || ""}`,
  },
];

const rows = [
  {
    id: 1,
    username: "mdrinan0",
    fullname: "Maryjane Drinan",
    email: "mdrinan0@about.me",
    group: "Office",
    status: "Locked",
    created_on: "Dec 10, 2022",
  },
  {
    id: 2,
    username: "sstorres1",
    fullname: "Sonnie Storres",
    email: "sstorres1@harvard.edu",
    group: "Managers",
    status: "Inactive",
    created_on: "Jan 20, 2022",
  },
  {
    id: 3,
    username: "osyddie2",
    fullname: "Olin Syddie",
    email: "osyddie2@google.nl",
    group: "Office",
    status: "Active",
    created_on: "April 13, 2018",
  },
  {
    id: 4,
    username: "sahmad3",
    fullname: "Shannah Ahmad",
    email: "sahmad3@liveinternet.ru",
    group: "Managers",
    status: "Active",
    created_on: "Oct 10, 2022",
  },
  {
    id: 5,
    username: "rphiller4",
    fullname: "Ripley Philler",
    email: "rphiller4@cyberchimps.com",
    group: "Head Office",
    status: "Active",
    created_on: "Jun 03, 2020",
  },
  {
    id: 6,
    username: "ghebner5",
    fullname: "Gherardo Hebner",
    email: "ghebner5@infoseek.co.jp",
    group: "Office",
    status: "Active",
    created_on: "Aug 10, 1999",
  },
  {
    id: 7,
    username: "jsawtell6",
    fullname: "Julie Sawtell",
    email: "jsawtell6@imgur.com",
    group: "Head Office",
    status: "Active",
    created_on: "Mar 22, 2003",
  },
  {
    id: 8,
    username: "lwashington7",
    fullname: "Lazaro Washington",
    email: "lwashington7@baidu.com",
    group: "Training",
    status: "Active",
    created_on: "Jul 10, 2025",
  },
  {
    id: 9,
    username: "emacgown8",
    fullname: "Elinor MacGown",
    email: "emacgown8@google.pl",
    group: "Engineering",
    status: "Active",
    created_on: "Sep 30, 2020",
  },
  {
    id: 10,
    username: "gfeely9",
    fullname: "Gavra Feely",
    email: "gfeely9@bravesites.com",
    group: "Research and Development",
    status: "Active",
    created_on: "Nov 15, 2022",
  },
];

export default function Users({ newUsers, handleEdit }) {
  const [fullnamesearchVal, setFullNameSearchVal] = React.useState("");
  const [usernamesearchVal, setUserNameSearchVal] = React.useState("");
  const [users, setUsers] = React.useState(rows);
  const [status, setStatus] = React.useState([""]);
  const [value, setValue] = React.useState("All Times");
  const [selected, setSelected] = React.useState(null);

  console.log(status);
  React.useEffect(() => {
    status.includes("") || status.length === 0
      ? setUsers(rows)
      : setUsers(rows.filter((item) => status.includes(item.status)));
  }, [status]);
  React.useEffect(() => {
    var updatedRows = {};
    let tempObj = newUsers;
    console.log("my new users =>>>>> ", newUsers);
    if (Object.keys(newUsers).length === 0) {
      updatedRows = [...users];
      console.log("first", tempObj);
    } else if (tempObj.id != null) {
      console.log("sencond", tempObj);
      updatedRows = users.map((item) => {
        if (tempObj.id === item.id) {
          //item return
          return tempObj;
        } else {
          return item;
        }
      });
    } else {
      tempObj.id = users[users.length - 1].id + 1;
      updatedRows = [...users, tempObj];
      console.log("tempObj", tempObj);
      console.log("Updated rows", updatedRows);
    }
    console.log("updated row", updatedRows);
    setUsers(updatedRows);
    console.log("this is ny usrss", users);
  }, [newUsers]);

  const searchFullName = (value) => {
    console.log(value);
    setFullNameSearchVal(value);
    setUserNameSearchVal("");
    return setUsers(
      rows.filter((item) =>
        item.fullname.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  const handleDelete = () => {
    console.log(selected);
    setSelected(null);
    return setUsers((prevUsers) =>
      prevUsers.filter((item) => item.id != selected)
    );
  };

  const searchUserName = (value) => {
    // console.log(value);
    setUserNameSearchVal(value);
    setFullNameSearchVal("");
    console.log(status);
    return setUsers(
      rows.filter((item) =>
        item.username.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  return (
    <React.Fragment>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <TextField
            placeholder="Search..."
            sx={{ m: 1 }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <Search />
                </InputAdornment>
              ),
            }}
            onChange={(e) => searchFullName(e.target.value)}
            value={fullnamesearchVal}
          />
          <TextField
            placeholder="User Name"
            sx={{ m: 1 }}
            onChange={(e) => searchUserName(e.target.value)}
            value={usernamesearchVal}
          />
          <FormControl label="User Status" sx={{ m: 1, minWidth: 120 }}>
            <InputLabel>User Status</InputLabel>
            <Select
              defaultValue="any"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                console.log("state =>>>>> ", status);
                console.log("value =>>>>>>", e.target.value);
                console.log("state =>>>>> ", status);
              }}
              label="User Status"
              displayEmpty
              multiple
              inputProps={{
                name: "User Status",
                id: "status-select",
              }}
            >
              <MenuItem value={""}>Any</MenuItem>
              <MenuItem value={"Locked"}>Locked</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              defaultValue="All Times"
              label="Creation Date"
              value={value === "All Times" ? dayjs("2020-01-01") : value}
              sx={{ m: 1 }}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
          <Link underline="none" component="button">
            All Filters
          </Link>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <Typography overflow={"visible"} sx={{ color: "text.dark" }}>
            {selected == null || selected.length == 0
              ? ""
              : selected.length + " rows selected"}
          </Typography>
          {!(selected == null || selected.length == 0) && (
            <Divider orientation="vertical" flexItem />
          )}
          <Button
            sx={{
              p: 0,
              m: 0,
              minWidth: 30,

              backgroundColor: "button.grey",
              position: "sticky",
            }}
          >
            <ModeEditOutlineIcon sx={{ color: "text.dark" }} />
          </Button>
          <Button
            aria-label="delete"
            onClick={handleDelete}
            sx={{
              p: 0,
              m: 0,
              minWidth: 30,

              backgroundColor: "button.grey",
              position: "sticky",
            }}
          >
            <NotInterestedIcon sx={{ fontSize: "16px", color: "text.dark" }} />
          </Button>
          <Button
            sx={{
              p: 0,
              m: 0,
              minWidth: 30,

              backgroundColor: "button.grey",
              position: "sticky",
            }}
          >
            <LockIcon sx={{ fontSize: "16px", color: "text.dark" }} />
          </Button>
          <Button
            sx={{
              backgroundColor: "button.grey",
              position: "sticky",
              textTransform: "none",
            }}
          >
            <Typography sx={{ fontSize: "10px", color: "text.dark" }}>
              Assign to Profile
            </Typography>
          </Button>
          <Button
            sx={{
              backgroundColor: "button.grey",
              position: "sticky",

              textTransform: "none",
            }}
          >
            <Typography sx={{ fontSize: "10px", color: "text.dark" }}>
              Assign to Group
            </Typography>
          </Button>
          <Button
            sx={{
              p: 0,
              m: 0,
              minWidth: 30,

              backgroundColor: "button.grey",
              position: "sticky",
            }}
          >
            <MoreVertIcon sx={{ fontSize: "16px", color: "text.dark" }} />
          </Button>
          <Link
            component="button"
            sx={{ fontSize: "12px", color: "text.dark" }}
          >
            Unselect all
          </Link>
        </Box>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 10,
              },
            },
          }}
          pageSizeOptions={[10]}
          checkboxSelection
          onRowClick={handleEdit}
          onRowSelectionModelChange={(item) => setSelected(item)}
        />
      </Box>
    </React.Fragment>
  );
}
