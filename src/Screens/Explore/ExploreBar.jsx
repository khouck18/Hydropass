"use client";
import { BiSearch } from "react-icons/bi";

const ExploreBar = () => {
  return (
    <div
      style={{
        border: "1px solid",
        width: "auto",
        paddingTop: "8px",
        paddingBottom: "8px",
        borderRadius: "40px",
        transition: "ease-in",
        cursor: "pointer"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center"
        }}
      >
        <div
          style={{
            fontSize: "15px",
            //paddingRight:"22.5%",
            padding: "0 48px",
            borderRight: "1px solid"
          }}
        >
          Location
        </div>

        <div
          style={{
            fontSize: "15px",
            //paddingLeft:"22.5%",
            padding: "0 48px",
            alignItems: "center",
            // gap: "12px",
            borderRight: "1px solid"
          }}
        >
          <div style={{ justifyContent: "center" }}> Dates </div>
        </div>

        <div
          style={{
            fontSize: "15px",
            paddingLeft: "48px",
            paddingRight: "48px",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            
            //gap:"12px",
          }}
        >
          <div>Add Guests</div>
          <div style={{ transform:"translateX(44px)", padding: "0 2px 0 2px", borderRadius: "100px", backgroundColor:"white"}}>
            <BiSearch size={24} color="#2d6fb8" />
          </div>
        </div>


      </div>
    </div>
  );
};

export default ExploreBar;
