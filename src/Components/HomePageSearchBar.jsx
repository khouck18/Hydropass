import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

const HomePageSearchBar = () => {
  const [guidedTripFilter, setGuidedTripFilter] = useState(false);

  const handleGuidedFilterChange = (selectValue) => {
    setGuidedTripFilter(selectValue ? true : false);
  };

  return (
    <form>
      <div className="row">
        <div className="col-2">
          <TextField
            id="locationInput"
            label="Location"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="bi bi-globe-americas" />
                </InputAdornment>
              )
            }}
            variant="outlined"
          />
        </div>
        <div className="col-4">
          <DateRangePicker
            localeText={{ start: "Check-in", end: "Check-out" }}
          />
        </div>
        <div className="col-2">
          <TextField
            id="numberOfGuestsInput"
            label="Number of Guests"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="bi bi-people-fill" />
                </InputAdornment>
              )
            }}
            variant="outlined"
          />
        </div>
        <div className="col-2">
          <TextField
            id="activityTypeInput"
            label="Activity Type"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="bi bi-droplet" />
                </InputAdornment>
              )
            }}
            variant="outlined"
          />
        </div>
        <div className="col-2">
          <InputLabel id="guidedTripFilterSelectLabel">Guided Trip</InputLabel>
          <Select
            labelId="guidedTripFilterSelectLabel"
            id="guidedTripFilterSelect"
            value={guidedTripFilter}
            label="Guided Trip"
            onChange={(e) => handleGuidedFilterChange(e.target.value)}
          >
            <MenuItem value={false}>No</MenuItem>
            <MenuItem value={true}>Yes</MenuItem>
          </Select>
        </div>
      </div>
    </form>
  );
};

export default HomePageSearchBar;
