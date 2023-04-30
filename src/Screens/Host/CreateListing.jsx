import React, { useState, useCallback, useContext } from "react";
import Card from "@mui/material/Card";
import {
  CardContent,
  IconButton,
  FormControl,
  TextField,
  InputAdornment,
  Chip,
  OutlinedInput,
  Box,
  Select,
  MenuItem,
  InputLabel
} from "@mui/material";
import {
  Delete,
  Save,
  Publish,
  CloudUpload,
  AttachMoney
} from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import { useTheme } from "@mui/material/styles";
import { useDispatch, useSelector } from "react-redux";
import { hostActions } from "./HostSlice";
import { PostNewListing } from "./HostActions";
import AuthContext from "../../Contexts/AuthContext";

import { uploadImages } from "../../Utils/s3Uploader";
import { v4 as uuidv4 } from "uuid";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  }
};

const getStyles = (name, activityType, theme) => {
  return {
    fontWeight:
      activityType.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium
  };
};

const CreateListing = () => {
  const auth = useContext(AuthContext);
  const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;
  const dispatch = useDispatch();
  const theme = useTheme();
  const createListingInformation = useSelector((state) => state.host.createListingInformation);
  const [imageNames, setImageNames] = useState([]);
  const availableActivityTypes = [
    "Fishing",
    "Rafting",
    "Kayaking",
    "Surfing",
    "Overnight Stays",
    "Private Beach",
    "Swimming",
    "Jet Skiing",
    "Kite Surfing",
    "Scuba Diving"
  ];

  const postNewListing = async () => {
    const listingId = uuidv4();
    dispatch(hostActions.updateCreateListingInformation({fieldName: "listingId", value: listingId}));
    if(imageNames.length !== 0){
      const uploadedImages = await uploadImages(imageNames, listingId);
      dispatch(hostActions.updateCreateListingInformation({fieldName: "listingImages", value: uploadedImages}));
    }
    const body = {
      ...createListingInformation,
      listingId
    };
    dispatch(PostNewListing({apiBaseUrl, auth, createListingInformation: body}));
  };

  const onDrop = useCallback(
    (acceptedFiles) => {
      setImageNames([...imageNames, ...acceptedFiles]);
    },
    [imageNames]
  );

  // const onDrop = useCallback(
  //   (acceptedFiles) => {
  //     const fileNames = [];

  //     acceptedFiles.forEach((file) => {
  //       const reader = new FileReader();

  //       reader.onabort = () => console.log("file reading was aborted");
  //       reader.onerror = () => console.log("file reading has failed");
  //       reader.onload = () => {
  //         const base64 = btoa(
  //           new Uint8Array(reader.result).reduce(
  //             (data, byte) => data + String.fromCharCode(byte),
  //             ""
  //           )
  //         );
  //         fileNames.push(base64);
          
  //         if(fileNames.length === acceptedFiles.length){
  //           setImageNames([...imageNames, ...acceptedFiles]);
  //           dispatch(hostActions.updateCreateListingInformation({fieldName: "listingImages", value: fileNames}));
  //         }
  //       };
  //       reader.readAsArrayBuffer(file);
  //     });
  //   },
  //   [dispatch, imageNames]
  // );

  const { getRootProps, getInputProps } = useDropzone({ onDrop });

  const updateCreateListingInformation = (fieldName, updatedValue) => {
    dispatch(hostActions.updateCreateListingInformation({fieldName, value: updatedValue}));
  };

  return (
    <Card variant="outlined">
      <CardContent>
        <div className="row">
          <div className="col-3">
            <h3>New Listing</h3>
          </div>
          <div className="col" />
          <div className="col-3 d-flex justify-content-end">
            <IconButton aria-label="delete" size="large">
              <Delete fontSize="inherit" />
            </IconButton>
            <IconButton aria-label="save" size="large">
              <Save fontSize="inherit" />
            </IconButton>
            <IconButton
              aria-label="publish"
              size="large"
              onClick={() => postNewListing()}
            >
              <Publish fontSize="inherit" />
            </IconButton>
          </div>
        </div>

        <div className="row">
          <div className="col-3 text-center">
            <h5>Listing Information</h5>
            <div {...getRootProps()} className="border border-1 p-2">
              <input {...getInputProps()} />
              <CloudUpload fontSize="inherit" />
              <p>Upload Listing Images</p>
            </div>
            <TextField
              fullWidth
              id="propertyName"
              label="Property Name"
              variant="outlined"
              className="mt-3"
              type="text"
              onChange={(e) =>
                updateCreateListingInformation(e.target.id, e.target.value)
              }
            />
            <TextField
              fullWidth
              id="propertyAddress"
              label="Property Address"
              variant="outlined"
              className="mt-3"
              type="text"
              onChange={(e) =>
                updateCreateListingInformation(e.target.id, e.target.value)
              }
            />
            <TextField
              fullWidth
              id="dailyRate"
              label="Daily Rate"
              variant="outlined"
              className="mt-3"
              type="number"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AttachMoney fontSize="inherit" />
                  </InputAdornment>
                )
              }}
              onChange={(e) =>
                updateCreateListingInformation(e.target.id, e.target.value)
              }
            />
            <TextField
              fullWidth
              id="propertyDescription"
              label="Property Description"
              multiline
              rows={6}
              variant="outlined"
              className="mt-3"
              type="text"
              onChange={(e) =>
                updateCreateListingInformation(e.target.id, e.target.value)
              }
            />
            <TextField
              fullWidth
              id="propertyRules"
              label="Property Rules"
              multiline
              rows={4}
              variant="outlined"
              className="mt-3"
              type="text"
              onChange={(e) =>
                updateCreateListingInformation(e.target.id, e.target.value)
              }
            />
            <FormControl className="mt-3 w-100">
              <InputLabel id="selectedActivites" className="bg-white pe-1">
                Selected Activities
              </InputLabel>
              <Select
                labelId="selectedActivites"
                id="selectedActivitesChip"
                multiple
                value={createListingInformation.selectedActivities}
                onChange={(e) =>
                  updateCreateListingInformation(
                    "selectedActivities",
                    e.target.value
                  )
                }
                input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                renderValue={(selected) => (
                  <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
                    {selected.map((value) => (
                      <Chip key={value} label={value} />
                    ))}
                  </Box>
                )}
                MenuProps={MenuProps}
              >
                {availableActivityTypes.map((name) => (
                  <MenuItem
                    key={name}
                    value={name}
                    style={getStyles(name, createListingInformation.selectedActivities, theme)}
                  >
                    {name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              fullWidth
              id="maximumGuests"
              label="Maximum Guests"
              variant="outlined"
              className="mt-3"
              type="number"
              onChange={(e) =>
                updateCreateListingInformation(e.target.id, e.target.value)
              }
            />
          </div>
          <div className="col-9">
            <h5>Uploaded Files</h5>
            <ul>
              {imageNames.map((image, index) => (
                <li key={index}>{image.name}</li>
              ))}
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreateListing;
