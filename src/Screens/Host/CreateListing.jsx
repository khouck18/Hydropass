import React, { useState, useCallback, useContext } from "react";
import Card from "@mui/material/Card";
import { CardContent, IconButton, Button, FormControl, TextField, InputAdornment, Chip, OutlinedInput, Box, Select, MenuItem, InputLabel } from "@mui/material";
import { Delete, Save, Publish, CloudUpload, AttachMoney } from "@mui/icons-material";
import { useDropzone } from "react-dropzone";
import { Theme, useTheme } from "@mui/material/styles";
import { ApiPOST } from "../../Utils/axiosRequests";
import AuthContext from "../../Contexts/AuthContext";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const getStyles = (name, activityType, theme) => {
    return {
      fontWeight:
        activityType.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
};
  

const CreateListing = () => {
    const auth = useContext(AuthContext);
    const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;
    const theme = useTheme();
    const [createListingInformation, setCreateListingInformation] = useState({
       listingImages: [],
       propertyName: "",
       propertyAddress: "",
       dailyRate: 0,
       propertyDescription: "",
       propertyRules: "",
       selectedActivities: [],
       maximumGuests: 0
    });
    const [files, setFiles] = useState([]);
    const [selectedActivities, setSelectedActivities] = useState([]);
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
        "Scuba Diving",
      ];

    const postNewListing = async () => {
        const response = await ApiPOST(`${apiBaseUrl}/listings`, auth.user, createListingInformation);
    };
    
    const onDrop = useCallback((acceptedFiles) => {
        const fileNames = [];
        acceptedFiles.forEach((file) => {
            fileNames.push(file.name);
        });
        setCreateListingInformation({...createListingInformation, listingImages: fileNames});

        acceptedFiles.forEach((file) => {
            const reader = new FileReader();

            reader.onabort = () => console.log("file reading was aborted");
            reader.onerror = () => console.log("file reading has failed");
            reader.onload = () => {
                // Do whatever you want with the file contents
                const binaryStr = reader.result;
                console.log(binaryStr);
            };
            reader.readAsArrayBuffer(file);
        });
        setFiles([...files, ...acceptedFiles]);
    }, [files]);

    const {getRootProps, getInputProps} = useDropzone({onDrop});

    const handleSelectedActivitesChange = (selectedActivity) => {
        console.log(selectedActivity);
        setSelectedActivities(selectedActivity);
    };

    const updateCreateListingInformation = (fieldName, updatedValue) => {
        setCreateListingInformation({...createListingInformation, [fieldName]: updatedValue});
        console.log(createListingInformation);
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
                            <Delete fontSize="inherit"/>
                        </IconButton>
                        <IconButton aria-label="save" size="large">
                            <Save fontSize="inherit"/>
                        </IconButton>
                        <IconButton aria-label="publish" size="large" onClick={() => postNewListing()}>
                            <Publish fontSize="inherit"/>
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
                                ),
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
                        <InputLabel id="selectedActivites" className="bg-white pe-1">Selected Activities</InputLabel>
                            <Select
                                labelId="selectedActivites"
                                id="selectedActivitesChip"
                                multiple
                                value={createListingInformation.selectedActivities}
                                // onChange={(e) => handleSelectedActivitesChange(e.target.value)}
                                onChange={(e) =>
                                   updateCreateListingInformation("selectedActivities", e.target.value)
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
                                        style={getStyles(name, selectedActivities, theme)}
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
                            {files.map((file, index) => (
                                <li key={index}>{file.name}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default CreateListing;
