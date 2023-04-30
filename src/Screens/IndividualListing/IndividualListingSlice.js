import { createSlice } from "@reduxjs/toolkit";
// import { PostNewHost, PostNewListing } from "./HostActions";

const initialState = {
    listingInformation: {
        dailyRate: "353",
        listingImages: [],
        maximumGuests: "6",
        propertyAddress: "50 Sportsman Rd, Port Angeles, WA 98363",
        propertyDescription: `Welcome to one of the most beautiful and pristine lakes in North America - Lake Sutherland. Situated between entrances to Olympic National Park, this spectacular lake front cottage is 608 sq ft with high ceilings, a modern design and a 1,400 sq ft dock to take in the sweeping views of the mountains. The cabin's gracious floor to ceiling windows let you soak in the views while you cozy up by the fireplace. Whether you are inside or out, you will be getting your much needed dose of nature.
        The space
        This cozy lakefront home boasts an open floor plan comfortably holding 4 guests, with a limit of 6 guests max. There are two bedrooms, one bathroom, a kitchen stocked with essentials, living room, dining table, washer & dryer. The primary bedroom has a full-sized bed and the second bedroom has a bunk bed including three twin beds. Located in the living room the couch can double as a 5th bed and another twin mattress is located under the couch.
        
        We provide all basic necessities to make you feel at home including but not limited to:
        - Kitchen with essentials including, coffee, tea, creamer, salt, pepper, and - cooking oil.
        - Towels and linens, but for extra comfort, please bring your own extra towels, cooking ingredients and bottled water.
        - Shampoo, conditioner & body wash
        - Starlink WIFI
        - Smart TV w/ Netflix and HBO
        - Adult-sized kayak, child-sized kayak and stand-up paddle board.
        - Charcoal BBQ
        - Onsite Washer/Dryer
        
        More about the outside space: To access the home there are 70+ stairs that lead you from the parked car to this serene lake front home. Guests will have access to a small yard, fire pit, dock and kayaks.
        
        More about the location: 17 min drive to downtown PA and the BC ferry, 17 minutes to the Hurricane Ridge Visitors Center, 10 min to lake crescent, 41 min to Sequim, 56 min to Sol Duc Resort, 26 minutes to Salt Creek Rec area, 12 min to Elwha River, 1h 5m to lapush, 1hr 26min to Cape Flattery, 1hr 36min to hobuck and much more!
        Guest access
        Guests have access to a small yard, fire pit, massive 1,400 sq ft dock and the gorgeous lake.`,
        propertyName: "",
        propertyRules: `***There are 70+ stairs to access the cabin. If you or another guest have limited mobility, this home is not for you.***

        ***Water: Our tap water is filtered water from the lake. We recommend bringing bottled water or boiling water before drinking.***
        
        ***The bedrooms are open air and don't have ceilings.***
        
        ***We do not provide firewood. If you would like to have an indoor or outdoor fire, we suggest purchasing some at a grocery store or convenient store.***
        
        Storm: No refunds will be given in the event that a storm or severe weather conditions limits your accessibility to the lake house or causes a power outage. We do not refund due to road conditions; however, we will assess this case by case and are willing to compensate accordingly to make it fair for both parties`,
        selectedActivities: ["Fishing", "Overnight Stays", "Swimming"],
        rating: "4.5",
        reviews: ["Great place", "Best place"]
    },
    loading: false,
    error: null
};

export const individualListingSlice = createSlice({
    name: "individualListing",
    initialState,
    reducers: {
    },
    // extraReducers: (builder) => {
    //     builder
    //         .addCase(PostNewHost.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(PostNewHost.fulfilled, (state) => {
    //             state.loading = false;
    //             state.error = null;
    //         })
    //         .addCase(PostNewHost.rejected, (state, action) => {
    //             state.error = action.error.message;
    //             state.loading = false;
    //         });
    //     builder
    //         .addCase(PostNewListing.pending, (state) => {
    //             state.loading = true;
    //         })
    //         .addCase(PostNewListing.fulfilled, (state) => {
    //             state.loading = false;
    //             state.error = null;
    //         })
    //         .addCase(PostNewListing.rejected, (state, action) => {
    //             state.error = action.error.message;
    //             state.loading = false;
    //         });
    // }
});


export const hostActions = individualListingSlice.actions;

export default individualListingSlice;

