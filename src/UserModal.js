import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Autocomplete from "@mui/material/Autocomplete";

export default function UserModal({
  open,
  handleClose,
  handleFormSubmit,
  editUser,
}) {
  const [formValues, setFormValues] = useState({
    fullname: "",
    username: "",
    email: "",
    group: "",
    status: "",
    created_on: "Dec 10, 2022",
    id: null,
  });

  const handleInputChange = (event) => {
    const { id, value } = event.target;

    setFormValues((prevState) => ({
      ...prevState,
      [id]: value,
    }));
  };

  const handleSubmit = () => {
    handleFormSubmit(formValues);
    handleClose();
  };

  useEffect(() => {
    if (Object.keys(editUser).length != 0) {
      setFormValues(editUser);
    } else {
      setFormValues({
        fullname: "",
        username: "",
        email: "",
        group: "",
        status: "",
        created_on: "Dec 10, 2022",
        id: null,
      });
    }
  }, [editUser]);

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="fullname"
            label="Full Name"
            fullWidth
            variant="standard"
            value={formValues.fullname}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="username"
            label="User Name"
            fullWidth
            variant="standard"
            value={formValues.username}
            onChange={handleInputChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            fullWidth
            variant="standard"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <Autocomplete
            disablePortal
            id="group"
            options={["Office", "Managers", "Head Office"]}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="User Group" />
            )}
            value={formValues.group}
            onChange={(event, value) =>
              handleInputChange({ target: { id: "group", value } })
            }
          />
          <Autocomplete
            disablePortal
            id="status"
            options={["Locked", "Inactive", "Active"]}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Assign Profile" />
            )}
            value={formValues.status}
            onChange={(event, value) =>
              handleInputChange({ target: { id: "status", value } })
            }
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit}>
            {Object.keys(editUser).length !== 0 ? "Edit User" : "Add User"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
