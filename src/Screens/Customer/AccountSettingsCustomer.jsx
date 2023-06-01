import React from "react";
import {
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import SaveIcon from "@mui/icons-material/Save";

const AccountSettingsCustomer = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="span">
          Account Settings
        </Typography>
        <Typography variant="subtitle1" component="span">
          Hydropass collects this information to keep you and our hosts safe
        </Typography>
        <Grid container sx={{ mt: 3 }}>
          <Grid item xs={5.5}>
            <TextField label="First Name" type="text" fullWidth />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5.5}>
            <TextField label="Last Name" type="text" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField label="Username" type="text" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField label="Password" type="password" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField label="Email" type="email" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField label="Phone Number" type="tel" fullWidth />
          </Grid>
          <Grid item xs={12} sx={{ mt: 3 }}>
            <TextField label="Address" type="text" fullWidth />
          </Grid>
          <Grid item xs={5.5} sx={{ mt: 3 }}>
            <TextField
              label="Government ID Front"
              type="file"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid item xs={1} />
          <Grid item xs={5.5} sx={{ mt: 3 }}>
            <TextField
              label="Government ID Back"
              type="file"
              fullWidth
              InputLabelProps={{
                shrink: true
              }}
            />
          </Grid>
          <Grid container justifyContent="flex-end" sx={{ mt: 3 }}>
            <Button
              variant="contained"
              sx={{
                color: "white.main",
                backgroundColor: "sunsetOrange.main",
                "&:hover": { backgroundColor: "burntOrange.main" }
              }}
            >
              Cancel <DeleteIcon sx={{ ml: 1 }} color="white" />
            </Button>
            <Button
              variant="contained"
              sx={{
                color: "white.main",
                backgroundColor: "coastalBlue.main",
                "&:hover": { backgroundColor: "darkBlue.main" },
                ml: 3
              }}
            >
              Save <SaveIcon sx={{ ml: 1 }} color="white" />
            </Button>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default AccountSettingsCustomer;
