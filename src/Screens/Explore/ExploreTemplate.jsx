import css from "./ExploreTemplate.module.css";
import HorizontalScrollView from "../../Components/ExplorePage/HorizontalScrollView";
const ExploreTemplate = (props) => {
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

    </div>
  );
};

export default ExploreTemplate;
