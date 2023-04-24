import { useState } from "react";
import TextField from "@mui/material/TextField";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import css from "./HomePageSearchBar.module.css";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
  && {
    input {
      color: white;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }
  }
`;

const StyledDatePicker = styled(DateRangePicker)`
  && {
    input {
      color: white;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }

    & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }
  }
`;

const StyledSelect = styled(Select)`
  && {
    input {
      color: white;
    }

    .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }

    &:hover .MuiOutlinedInput-notchedOutline {
      border-color: white;
    }

    && .MuiOutlinedInput-input {
      color: white;
    }
    
    & .MuiSvgIcon-root {
      color: white;
    }

    
    & .MuiInputLabel-shrink {
      transform-origin: top left;
      transform: translate(0, 1.5px) scale(0.75);
      padding-right: 8px;
    }
  }
`;


const HomePageSearchBar = () => {
  const [guidedTripFilter, setGuidedTripFilter] = useState("");

  const handleGuidedFilterChange = (selectValue) => {
    setGuidedTripFilter(selectValue ? true : false);
  };

  return (
    <form className={`${css.glassBackground} border rounded py-4 px-5 me-5`}>
      <div className="row">
        <div
          className={`${css.flexGridAdditionalStyles} col-12 col-md-4 col-lg-2`}
        >
          <StyledTextField
            id="locationInput"
            label={<div className="text-white"> <i className="bi bi-globe-americas" /> Location</div>}
            className={`${css.input} w-100`}
            variant="outlined"
          />
        </div>
        <div
          className={`${css.flexGridAdditionalStyles} col-12 col-md-8 col-lg-4`}
        >
          <FormControl variant="outlined" fullWidth>
            <StyledDatePicker
              label={<div className="text-white"><i className="bi bi-calendar-week" /> Reservation Dates</div>}
              slots={{ field: SingleInputDateRangeField }}
              id="reservation-dates"
            />
          </FormControl>
        </div>
        <div className="col-4 col-md-4 col-lg-2">
          <StyledTextField
            id="numberOfGuestsInput"
            label={<div className="text-white"><i className="bi bi-people-fill" /> Guests</div>}
            variant="outlined"
          />
        </div>
        <div className="col-4 col-md-4 col-lg-2">
          <StyledTextField
            id="activityTypeInput"
            label={<div className="text-white"><i className="bi bi-droplet" /> Activity Type</div>}
            variant="outlined"
          />
        </div>
        <div className="col-4 col-md-4 col-lg-2">
          <FormControl fullWidth>
            <InputLabel id="guidedTripFilterSelectLabel" className="text-white">
            <i className="bi bi-person-fill-add" />{" "}
              Guided
            </InputLabel>
            <StyledSelect
              labelId="guidedTripFilterSelectLabel"
              id="guidedTripFilterSelect"
              value={guidedTripFilter}
              label="Guided Trip"
              color="success"
              onChange={(e) => handleGuidedFilterChange(e.target.value)}
            >
              <MenuItem value={false}>No</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
            </StyledSelect>
          </FormControl>
        </div>
      </div>
    </form>
  );
};

export default HomePageSearchBar;
