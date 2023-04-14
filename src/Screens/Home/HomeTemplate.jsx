import css from "./HomeTemplate.module.css";
import HomePageSearchBar from "../../Components/HomePageSearchBar";
import HomePageCarousel from "../../Components/HomePageCarousel";
const HomeTemplate = (props) => {
  return (
    <div
      className={css.containerAlignment}
      style={{
        backgroundImage: `url(${props.backgroundImage})`,
        backgroundSize: "cover"
      }}
    >
      <h1>{props.title}</h1>
      <h3>{props.subHeader}</h3>
      <HomePageSearchBar />
      <h5 className={css.spacerHomePage}>{props.additionalInformation}</h5>
      <div className="border-top me-5 mb-5" />
      <HomePageCarousel listOfActivities={props.listOfActivities} />
    </div>
  );
};

export default HomeTemplate;
