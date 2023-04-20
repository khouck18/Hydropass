import { useState } from "react";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import css from "./HomePageSearchBar.module.css";

const HomePageSearchBar = () => {
  const [guidedTripFilter, setGuidedTripFilter] = useState(false);

  const handleGuidedFilterChange = (selectValue) => {
    setGuidedTripFilter(selectValue ? true : false);
  };

  return (
    <form className={`${css.glassBackground} border rounded py-4 px-5 me-5`}>
      <div className="row">
        <div
          className={`${css.flexGridAdditionalStyles} col-12 col-md-4 col-lg-2`}
        >
          <TextField
            id="locationInput"
            label="Location"
            className={`${css.input} w-100`}
            variant="outlined"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <i className="bi bi-globe-americas" />
                </InputAdornment>
              )
            }}
          />
        </div>
        <div
          className={`${css.flexGridAdditionalStyles} col-12 col-md-8 col-lg-4`}
        >
          <FormControl variant="outlined" fullWidth>
            <InputLabel
              htmlFor="reservation-dates"
              shrink
            >
              Reservation Dates
            </InputLabel>
            <DateRangePicker
              slots={{ field: SingleInputDateRangeField }}
              id="reservation-dates"
            />
          </FormControl>
        </div>
        <div className="col-4 col-md-4 col-lg-2">
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
        <div className="col-4 col-md-4 col-lg-2">
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
        <div className="col-4 col-md-4 col-lg-2">
          <FormControl fullWidth>
            <InputLabel id="guidedTripFilterSelectLabel">
              Guided Trip
            </InputLabel>
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
          </FormControl>
        </div>
      </div>
    </form>
  );
};

export default HomePageSearchBar;
