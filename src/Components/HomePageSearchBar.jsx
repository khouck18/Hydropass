import { useState } from "react";
import { TextField, InputLabel, MenuItem, Select, FormControl, Grid, Box} from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { SingleInputDateRangeField } from "@mui/x-date-pickers-pro/SingleInputDateRangeField";
import MapIcon from "@mui/icons-material/Map";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import GroupsIcon from "@mui/icons-material/Groups";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
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
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={4} lg={2} sx={{ mb: 0 }}>
          <StyledTextField
            id="locationInput"
            label={<Box sx={{ color: "white.main" }}> <MapIcon /> Location</Box>}
            className={`${css.input} w-100`}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={8} lg={4} sx={{ mb: 0 }}>
          <FormControl variant="outlined" fullWidth>
            <StyledDatePicker
              label={<Box sx={{ color: "white.main" }}> <CalendarMonthIcon /> Reservation Dates</Box>}
              slots={{ field: SingleInputDateRangeField }}
              id="reservation-dates"
            />
          </FormControl>
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={2}>
          <StyledTextField
            id="numberOfGuestsInput"
            label={<Box sx={{ color: "white.main" }}> <GroupsIcon /> Guests</Box>}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={2}>
          <StyledTextField
            id="activityTypeInput"
            label={<Box sx={{ color: "white.main" }}> <WaterDropIcon /> Activity Type</Box>}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={4} sm={4} md={4} lg={2}>
          <FormControl fullWidth>
            <InputLabel id="guidedTripFilterSelectLabel" sx={{ color: "white.main" }}>
            <PersonAddIcon />{" "}
              Guided
            </InputLabel>
            <StyledSelect
              labelId="guidedTripFilterSelectLabel"
              id="guidedTripFilterSelect"
              value={guidedTripFilter}
              label="Guided Trip"
              color="white"
              onChange={(e) => handleGuidedFilterChange(e.target.value)}
            >
              <MenuItem value={false}>No</MenuItem>
              <MenuItem value={true}>Yes</MenuItem>
            </StyledSelect>
          </FormControl>
        </Grid>
      </Grid>
    </form>
  );
};

export default HomePageSearchBar;
