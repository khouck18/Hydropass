import css from"./ListingsTemplate.module.css";
import { AiFillStar } from "react-icons/ai";

const ListingTemplate = (props) => {
  return (
    <div style={{ justifyContent: "center", margin: "auto", display: "flex" }}>
      <div
        style={{
          borderRadius: "20px",
        }}
        className={`${css.image}`}
      >
        <img
          src={props.image}
          alt=""
          style={{
            height: "280px",
            width: "280px",
            objectFit: "cover",
            borderRadius: "20px",
            cursor: "pointer",
          }}
          
        />
        <div
          style={{
            marginTop: "3px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between"
          }}
        >
          <div>
            <div style={{ fontWeight: "600", fontSize: "17px" }}>
              {props.name}
            </div>
            <div style={{ fontWeight: "lighter", color: "black" }}>
              {props.location}
            </div>
            <div
              style={{ fontWeight: "600", fontSize: "17px", display: "flex" }}
            >
              ${props.dailyRate}{" "}
              <div style={{ fontWeight: "lighter" }}> /night</div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <AiFillStar size={18} />
            <div
              style={{
                fontWeight: "lighter",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "-3px"
              }}
            >
              {props.ratings}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingTemplate;

/* <div class="flex justify-between items-center relative bottom-28">
<div class="text-left ml-10">
  <p class="inline-block align-middle text-2xl text-white font-normal">
    {photos[currentIndex].location}
  </p>
</div>
<div class="text-right mr-6">
  <p class="inline-block align-middle text-2xl text-white font-normal">
    ${photos[currentIndex].dailyRate}
  </p>
</div>
</div> */

/* <div style={{columnSpan: "all", cursor: "pointer"}}
    className={`${css.container}`}
    className="col-span-1 cursor-pointer group">
    <div style={{
      flex: "auto",
      gap: "2",
    }}
    className="flex flex-col gap-2 w-full">
      <div className="aspect-square w-128 relative overflow-hidden rounded-xl bg-gray-200">
        <img
          fill
          className="object-cover h-full w-full :scale-110 transition group-hover:scale-110"
          src={props.image}
          alt="Listing"
        />
      </div>
      <div className="font-semibold text-lg">{props.name}</div>
      <div className="font-semibold text-black">{props.location}</div>
      <div className="flex items-center justify-between gap-1">
        <div className="font-semibold text-left">${props.dailyRate}</div>
        <div className="flex text-right align-middle font-light text-black">
          <div className=" text-yellow-200">
            <AiFillStar size={28} />
          </div>
          <div>{props.ratings}/5.0</div>
        </div>
      </div>
    </div>
  </div> 

*/
