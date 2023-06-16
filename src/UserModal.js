import { React, useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Autocomplete from "@mui/material/Autocomplete";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import { Box, Stack, InputLabel, Link } from "@mui/material";
import { Close } from "@mui/icons-material";

export default function UserModal({
  open,
  handleClose,
  handleFormSubmit,
  editUser,
  navyColor,
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
    if (Object.keys(editUser).length !== 0) {
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
      <Dialog fullWidth open={open} onClose={handleClose}>
        <Box
          component={"div"}
          sx={{
            px: 0.4,
            display: "flex",
            justifyContent: "space-between",
            // alignItems: "center",
            backgroundColor: navyColor,
          }}
        >
          <DialogTitle
            sx={{
              fontWeight: "bold",
              mt: 1,
              color: "#fff",
            }}
            gutterBottom
          >
            {Object.keys(editUser).length !== 0 ? "Edit User" : "Add New User"}
          </DialogTitle>
          <IconButton onClick={handleClose} sx={{ px: 2.2 }}>
            <Close sx={{ color: "text.white" }} />
          </IconButton>
        </Box>
        <DialogContent>
          <InputLabel sx={{ fontWeight: "bold", color: navyColor }}>
            Full Name
          </InputLabel>
          <TextField
            // autoFocus
            // gutterBottom
            margin="dense"
            id="fullname"
            label="Enter full name"
            fullWidth
            variant="outlined"
            value={formValues.fullname}
            onChange={handleInputChange}
          />
          <InputLabel
            sx={{ p: 1, px: 0.4, fontWeight: "bold", color: navyColor }}
          >
            User Name
          </InputLabel>
          <TextField
            // gutterBottom
            // autoFocus
            margin="dense"
            id="username"
            label="Enter username"
            fullWidth
            variant="outlined"
            value={formValues.username}
            onChange={handleInputChange}
          />
          <InputLabel
            sx={{ p: 1, px: 0.4, fontWeight: "bold", color: navyColor }}
          >
            Email Address
          </InputLabel>
          <TextField
            // gutterBottom
            // autoFocus
            margin="dense"
            id="email"
            label="Enter user email address"
            fullWidth
            variant="outlined"
            value={formValues.email}
            onChange={handleInputChange}
          />
          <InputLabel
            sx={{ p: 1.5, px: 0.4, fontWeight: "bold", color: navyColor }}
          >
            User Group
          </InputLabel>
          <Autocomplete
            margin="dense"
            // gutterBottom
            isOptionEqualToValue={(option, value) => option.id === value.id}
            disablePortal
            id="group"
            options={["Office", "Managers", "Head Office"]}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Choose User Group" />
            )}
            value={formValues.group}
            onChange={(event, value) =>
              handleInputChange({ target: { id: "group", value } })
            }
          />
          <InputLabel
            sx={{ p: 1.5, px: 0.4, fontWeight: "bold", color: navyColor }}
          >
            Assign Profile
          </InputLabel>
          <InputLabel />
          <Autocomplete
            isOptionEqualToValue={(option, value) => option.id === value.id}
            disablePortal
            id="status"
            margin="dense"
            options={["Locked", "Inactive", "Active"]}
            fullWidth
            renderInput={(params) => (
              <TextField {...params} label="Choose Profile" />
            )}
            value={formValues.status}
            onChange={(event, value) =>
              handleInputChange({ target: { id: "status", value } })
            }
          />
        </DialogContent>
        <DialogActions
          sx={{
            px: 3,
            display: "flex",
            justifyContent: "space-between",
            mb: 2,
          }}
        >
          <Link
            component="button"
            color="text.primary"
            sx={{ fontWeight: "bold" }}
            onClick={() => {
              setFormValues({
                fullname: "",
                username: "",
                email: "",
                group: "",
                status: "",
                created_on: "Dec 10, 2022",
                id: null,
              });
            }}
          >
            Reset fields
          </Link>
          <Stack direction="row" spacing={2}>
            <Button
              sx={{
                backgroundColor: "button.white",
                color: "text.primary",
                // "&:hover": {
                //   backgroundColor: "",
                // },
              }}
              variant="contained"
              onClick={handleClose}
            >
              Cancel
            </Button>
            <Button
              sx={{
                backgroundColor: "button.green",
                "&:hover": {
                  backgroundColor: "state.hover",
                },
              }}
              variant="contained"
              onClick={handleSubmit}
            >
              {Object.keys(editUser).length !== 0 ? "Edit User" : "Add User"}
            </Button>
          </Stack>
        </DialogActions>
      </Dialog>
    </div>
  );
}
