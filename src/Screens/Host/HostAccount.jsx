import React, { useState, useContext } from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import { ApiPOST } from "../../Utils/axiosRequests";
import AuthContext from "../../Contexts/AuthContext";

const HostAccount = () => {
  const auth = useContext(AuthContext);
  const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;
  const [accountInformation, setAccountInformation] = useState({
    firstName: "",
    lastName: "",
    streetAddress: "",
    cityAddress: "",
    zipCodeAddress: ""
  });

  const updateAccountInformation = (fieldName, updatedValue) => {
    setAccountInformation({ ...accountInformation, [fieldName]: updatedValue });
  };

  const postAccountInformation = async () => {
    const response = await ApiPOST(`${apiBaseUrl}/users`, auth.user, accountInformation);
  };

  return (
    <div className="card">
      <div className="card-body ms-3">
        <h4>Account Settings</h4>
        <h5 className="mt-5">Personal Information</h5>
        <FormControl>
          <div className="row">
            <div className="col-4">
              <TextField
                fullWidth
                id="firstName"
                label="First Name"
                variant="outlined"
                onChange={(e) =>
                  updateAccountInformation(e.target.id, e.target.value)
                }
              />
            </div>
            <div className="col-4">
              <TextField
                fullWidth
                id="lastName"
                label="Last Name"
                variant="outlined"
                onChange={(e) =>
                  updateAccountInformation(e.target.id, e.target.value)
                }
              />
            </div>
            <div className="col-6 mt-5">
              <TextField
                fullWidth
                id="streetAddress"
                label="Street"
                variant="outlined"
                onChange={(e) =>
                  updateAccountInformation(e.target.id, e.target.value)
                }
              />
              <div className="col mt-3">
                <TextField
                  id="cityAddress"
                  label="City"
                  variant="outlined"
                  className="me-4"
                  onChange={(e) =>
                    updateAccountInformation(e.target.id, e.target.value)
                  }
                />
                <TextField
                  id="zipCodeAddress"
                  label="Zip Code"
                  variant="outlined"
                  onChange={(e) =>
                    updateAccountInformation(e.target.id, e.target.value)
                  }
                />
              </div>
            </div>
          </div>
        </FormControl>
        <button onClick={() => postAccountInformation()}>SUBMIT</button>
      </div>
    </div>
  );
};

export default HostAccount;
