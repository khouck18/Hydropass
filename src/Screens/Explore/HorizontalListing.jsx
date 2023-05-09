
import { AiFillStar } from "react-icons/ai";

const HorizontalListing = (props) => {
  return (
    <div style={{
      position: "absolute",
      gridRow: "auto",
      width: "100%",
      height: "60%",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      justifyContent: "space-between",
      display: "flex",
      color: "white",

    }}>
      <div style={{marginLeft: "40px"}}>{props.name}</div>
      <div>{props.location}</div>
      {/* <div>{props.icons}</div> */}
      <div><AiFillStar size={"18"} style={{transform: "translateY(-2px)"}} color="orange"/>  {props.rating} </div>
      <div style={{marginRight: "40px"}}>${props.dailyRate} / night</div>
    </div>
  );
};

export default HorizontalListing;