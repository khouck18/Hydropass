import { useState, useEffect } from "react";
import { Card, CardContent, TextField, Button } from "@mui/material";
import { DateRangePicker } from "@mui/x-date-pickers-pro/DateRangePicker";
import { useSelector } from "react-redux";

const IndividualListingCheckoutCard = () => {
    const currencyOptions = { style: "currency", currency: "USD" };
    const [tripLength, setTripLength] = useState("0");
    const [nightlyRentalSum, setNightlyRentalSum] = useState(0);
    const [hydropassFee, setHydropassFee] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
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
        <Card raised className="mb-5" style={{borderRadius: "25px"}}>
            <CardContent>
                <div className="row px-2">
                    <h5 className="col-5">
                        ${listingInformation.dailyRate} Day
                    </h5>
                    <div className="col-7 mb-3">
                        <h5 className="d-flex justify-content-end">
                            <i className="bi bi-star-fill me-1" style={{color: "#ffa07a"}}/> {listingInformation.rating} | {listingInformation.reviews.length} Reviews
                        </h5>
                    </div>
                </div>
                <div className="w-100 p-2">
                        <DateRangePicker localeText={{ start: "Check-in", end: "Check-out" }} onChange={(e) => e[1] !== null ? updateSelectedDates(e[0].$d, e[1].$d) : null}/>
                        <TextField
                            id="NumberOfGuests"
                            label={<div><i className="bi bi-people-fill" /> Number of Guests</div>}
                            className="w-100 mt-3"
                            variant="outlined"
                            type="number"
                        />
                        
                        <div className="row pt-4 px-2 pb-2">
                            <div className="col-8">
                                ${listingInformation.dailyRate}
                                <svg height="5" width="5" className="mx-2">
                                    <circle cx="2.5" cy="2.5" r="2.5" fill="black" />
                                </svg>
                                {tripLength} Days
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-end">
                                    {(nightlyRentalSum).toLocaleString("en-US", currencyOptions)}
                                </div>
                            </div>
                            <div className="col-8">
                                Hydropass Service Fee
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-end">
                                    {(hydropassFee).toLocaleString("en-US", currencyOptions)}
                                </div>
                            </div>
                            <div className="border-bottom my-2" />
                            <div className="col-8">
                                <h6><strong>Total</strong></h6>
                            </div>
                            <div className="col-4">
                                <div className="d-flex justify-content-end">
                                    {(totalCost).toLocaleString("en-US", currencyOptions)}
                                </div>
                            </div>
                            <div className="col-12 mt-2">
                                <Button variant="contained" disabled={tripLength === "0"} className="w-100 py-3">Book Now</Button>
                            </div>
                        </div>
                    </div>
        
            </CardContent>
        </Card>
    );
};

export default IndividualListingCheckoutCard;