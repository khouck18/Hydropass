import { Icon, SvgIcon } from "@mui/material";
import css from "./FilterBox.module.css";
import React, { useState } from "react";

const FilterBox = (props) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth:"2px",
        cursor: "pointer",
        fontWeight:"lighter",
        // color:"#949494"
        //fontWeight: selected ? "bold" : "lighter"
      }}
      className={`${css.filter}`}
    >
      <img width="30" height="30" src={props.icon} />
      <div> {props.name} </div>
    </div>
  );
};

export default FilterBox;
