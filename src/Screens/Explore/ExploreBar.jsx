"use client";
import { borderLeft } from "@mui/system";
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
          justifyContent:"center"
        }}
      >
        <div
          style={{
            fontSize: "15px",
            //paddingRight:"22.5%",
            padding:"0 24px",
            borderRight: "1px solid",
          }}
        >
          Location
        </div>

        <div
          style={{
            fontSize: "15px",
            //paddingLeft:"22.5%",
            padding:"0 24px",
            alignItems: "center",
           // gap: "12px",
            padding:"0 24px",
            borderRight: "1px solid",
          }}
        >
          <div style={{justifyContent:"center"}}> Dates </div>
        </div>

        <div style={{
            fontSize:"15px",
            paddingLeft:"24px",
            paddingRight:"8px",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            //gap:"12px",
        }}>
            <div>Add Guests</div>
            <div style={{ padding:"0 2px 0 8px", borderRadius:"100px"}}> <BiSearch size={18}/></div>
        </div>


      </div>
    </div>
  );
};

export default ExploreBar;
