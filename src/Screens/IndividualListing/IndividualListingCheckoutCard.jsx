import { useState, useEffect } from "react";
import { Card, CardContent, TextField, Button, Grid, Box, Typography } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import GroupsIcon from "@mui/icons-material/Groups";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useSelector } from "react-redux";

const IndividualListingCheckoutCard = () => {
    const currencyOptions = { style: "currency", currency: "USD" };
    const [tripLength, setTripLength] = useState("0");
    const [nightlyRentalSum, setNightlyRentalSum] = useState(0);
    const [hydropassFee, setHydropassFee] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    // eslint-disable-next-line no-unused-vars
    const [selectedDates, setSelectedDates] = useState({
        startDate: "",
        endDate: ""
    });

    const listingInformation = useSelector((state) => 
        state.individualListing.listingInformation
    );

    const updateSelectedDates = (startDate, endDate) => {
        setSelectedDates([
            startDate,
            endDate
        ]);
        setTripLength(getDaysBetweenDates([startDate, endDate]));
    };

    useEffect(() => {
        const parsedDailyRate = parseInt(listingInformation.dailyRate);
        const parsedTripLength = parseInt(tripLength);
        const nightlyTotal = parsedDailyRate * parsedTripLength;
        const hydropassTotal = nightlyTotal * 0.1;
        setNightlyRentalSum(nightlyTotal);
        setHydropassFee(hydropassTotal);
        setTotalCost(nightlyTotal + hydropassTotal);
    }, [tripLength, listingInformation.dailyRate]);

    const getDaysBetweenDates = (dates) => {
        const oneDayMs = 1000 * 60 * 60 * 24; // Number of milliseconds in one day
        const date1Ms = dates[0].getTime(); // Get the number of milliseconds since Jan 1, 1970 for date 1
        const date2Ms = dates[1].getTime(); // Get the number of milliseconds since Jan 1, 1970 for date 2
        const diffMs = date2Ms - date1Ms; // Get the difference between the two dates in milliseconds
        const diffDays = diffMs / oneDayMs; // Convert the difference to days
      
        return diffDays;
    };

    return (
        <Card raised sx={{ mb: 5, borderRadius: "25px"}}>
            <CardContent>
                <Grid container sx={{px: 2}}>
                    <Grid item xs={5} sm={5} md={5} lg={5}>
                        <Typography variant="h5">
                            ${listingInformation.dailyRate} Day
                        </Typography>
                    </Grid>
                    <Grid item xs={7} sm={7} md={7} lg={7} sx={{mb: 3}}>
                        <Grid container justifyContent="flex-end">
                            <Typography variant="h5">
                                <StarIcon color="lightSalmon" sx={{ fontSize: 35, mb: 1 }}/> {listingInformation.rating} | {listingInformation.reviews.length} Reviews
                            </Typography>
                        </Grid>
                        
                    </Grid>
                </Grid>
                <Box sx={{ width: "100%", p: 2 }}>
                    <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} onChange={(e) => e[1] !== null ? updateSelectedDates(e[0].$d, e[1].$d) : null}/>
                    <TextField
                        id="NumberOfGuests"
                        label={<Box><GroupsIcon /> Number of Guests</Box>}
                        sx={{width: "100%",  mt: 3}}
                        variant="outlined"
                        type="number"
                    />
                    <Grid container sx={{ pt: 4, pb: 2 }}>
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            ${listingInformation.dailyRate}
                            <svg height="5" width="5" className="mx-2">
                                <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                            </svg>
                            {tripLength} Days
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Grid container justifyContent="flex-end">
                                {(nightlyRentalSum).toLocaleString("en-US", currencyOptions)}
                            </Grid>
                        </Grid>
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            Hydropass Service Fee
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Grid container justifyContent="flex-end">
                                {(hydropassFee).toLocaleString("en-US", currencyOptions)}
                            </Grid>
                        </Grid>
                        <Box variant="div" sx={{ borderBottom: "1px solid gray", my: 2, width: "100%" }} />
                        <Grid item xs={8} sm={8} md={8} lg={8}>
                            <Typography variant="h6">Total</Typography>
                        </Grid>
                        <Grid item xs={4} sm={4} md={4} lg={4}>
                            <Grid container justifyContent="flex-end">
                                {(totalCost).toLocaleString("en-US", currencyOptions)}
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} md={12} lg={12} sx={{mt: 2}}>
                            <Button variant="contained" disabled={tripLength === "0"} sx={{width: "100%", py: 3}}>Book Now</Button>
                        </Grid>
                    </Grid>
                </Box>
            </CardContent>
        </Card>
    );
};

export default IndividualListingCheckoutCard;