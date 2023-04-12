import css from "./HomeTemplate.module.css";
import HomePageSearchBar from "../../Components/HomePageSearchBar";
const HomeTemplate = (props) => {
  return (
    <div className={css.containerAlignment}>
      <h1>{props.title}</h1>
      <h3>{props.subHeader}</h3>
      <HomePageSearchBar />
    </div>
  );
};

export default HomeTemplate;
