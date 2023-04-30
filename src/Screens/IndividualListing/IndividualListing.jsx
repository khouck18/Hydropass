import React from "react";
import GoogleMap from "../../Components/GoogleMap";
import IndividualListingCheckoutCard from "./IndividualListingCheckoutCard";
import IndividualListingImageGallery from "./IndividualListingImageGallery";
import css from "./IndividualListing.module.css";
import IndividualListingDescription from "./IndividualListingDescription";

const IndividualListing = () => {
    const col5Style = {
        height: "75vh",
        backgroundImage: "url(https://picsum.photos/id/1018/1000/600/)",
        backgroundPosition: "left 25%",
        backgroundSize: "auto 100%",
        backgroundRepeat: "no-repeat",
        transform: "translateX(-35%)",
      };

  return (
    <div className="row me-5">
      <div className="col-5 px-0" style={col5Style}>
        <div className={css.glassBackground} style={{ transform: "translateX(35%)" }}>
          <IndividualListingImageGallery />
        </div>
      </div>
      <div className="col-4">
        <IndividualListingDescription />
      </div>
      <div className="col-3">
        <IndividualListingCheckoutCard />
        <GoogleMap address={"6336 SW Seymour Street, Portland OR 97221"}/>
      </div>
    </div>
  );
};

export default IndividualListing;
