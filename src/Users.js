import * as React from "react";
import Box from "@mui/material/Box";
import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import { MenuItem } from "@mui/material";

import { Search } from "@mui/icons-material";
import dayjs from "dayjs";
// import { DemoContainer, DemoItem } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "fullname",
    headerName: "Full name",
    width: 150,
    editable: true,
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

export default function Users({ newUsers }) {
  const [fullnamesearchVal, setFullNameSearchVal] = React.useState("");
  const [usernamesearchVal, setUserNameSearchVal] = React.useState("");
  const [users, setUsers] = React.useState(rows);
  const [status, setStatus] = React.useState([""]);
  const [value, setValue] = React.useState([
    dayjs("2022-04-17"),
    dayjs("2022-04-21"),
  ]);
  console.log(status);
  React.useEffect(() => {
    status.includes("") || status.length == 0
      ? setUsers(rows)
      : setUsers(rows.filter((item) => status.includes(item.status)));
  }, [status]);
  React.useEffect(() => {
    var updatedRows = {};
    let tempObj = newUsers;
    console.log("my new users =>>>>> ", newUsers);
    if (Object.keys(newUsers).length === 0) {
      updatedRows = [...users];
    } else {
      tempObj.id = users.length + 1;
      updatedRows = [...users, tempObj];
    }
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
            sx={{ m: 1, width: "35ch" }}
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
            sx={{ m: 1, width: "18ch" }}
            onChange={(e) => searchUserName(e.target.value)}
            value={usernamesearchVal}
          />
          <FormControl label="User Status" sx={{ m: 1, minWidth: 120 }}>
            <Select
              defaultValue="any"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
                console.log("state =>>>>> ", status);
                console.log("value =>>>>>>", e.target.value);
                console.log("state =>>>>> ", status);
              }}
              displayEmpty
              multiple
              inputProps={{
                name: "User Status",
                id: "status-select",
                // "aria-label": "Without label",
              }}
            >
              {/* <FormGroup>
                <FormControlLabel
                  control={<Checkbox defaultChecked />}
                  label="Label"
                />
                <FormControlLabel
                  required
                  control={<Checkbox />}
                  label="Required"
                />
                <FormControlLabel
                  disabled
                  control={<Checkbox />}
                  label="Disabled"
                />
              </FormGroup> */}
              <MenuItem value={""}>Any</MenuItem>
              <MenuItem value={"Locked"}>Locked</MenuItem>
              <MenuItem value={"Inactive"}>Inactive</MenuItem>
              <MenuItem value={"Active"}>Active</MenuItem>
            </Select>
          </FormControl>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            {/* <DemoContainer components={["DateRangePicker", "DateRangePicker"]}>
              <DemoItem label="Controlled picker" component="DateRangePicker"> */}
            <DatePicker
              label="Creation Date"
              value={value}
              sx={{ m: 1 }}
              onChange={(newValue) => setValue(newValue)}
            />
          </LocalizationProvider>
        </Box>
        <DataGrid
          rows={users}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 5,
              },
            },
          }}
          pageSizeOptions={[5]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
    </React.Fragment>
  );
}
