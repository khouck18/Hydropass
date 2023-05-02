import css from "./HomeTemplate.module.css";
import HomePageSearchBar from "../../Components/HomePageSearchBar";
import HomePageCarousel from "../../Components/HomePageCarousel";
import { Box, Typography } from "@mui/material";
const HomeTemplate = (props) => {
  return (
    <Box
      className={css.containerAlignment}
    >
      <Typography variant="h1" sx={{ textShadow: "0 0 2px black" }}>{props.title}</Typography>
      <Typography variant="h3" sx={{ textShadow: "0 0 2px black" }}>{props.subHeader}</Typography>
      <HomePageSearchBar />
      <Typography variant="h4" sx={{ marginTop: "15%", textShadow: "0 0 2px black" }}>{props.additionalInformation}</Typography>
      <Box sx={{ borderTop: "white solid 1px", mr: 5, mb: 5}} />
      <HomePageCarousel title={props.title} listOfActivities={props.listOfActivities} />
    </Box>
  );
};

export default HomeTemplate;
