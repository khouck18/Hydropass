import React, { useState, useEffect } from "react";
import { AppBar, Toolbar, useScrollTrigger, Button, Grid, Typography } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import MessageIcon from "@mui/icons-material/Message";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Logo from "../Images/logo_transparency.png";
import css from "./Navbar.module.css";

const ElevationScroll = (props) => {
    const { children, window } = props;
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
      target: window ? window() : undefined,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
};
  
ElevationScroll.propTypes = {
    children: PropTypes.element.isRequired,
    window: PropTypes.func,
};
  

const Navbar = (props) => {
    const [isTop, setIsTop] = useState(true);

    useEffect(() => {
        function handleScroll() {
        const scrollTop = document.documentElement.scrollTop;
        if (scrollTop === 0) {
            setIsTop(true);
        } else {
            setIsTop(false);
        }
        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <ElevationScroll {...props} color="coastalBlue">
            <AppBar color="transparent" className={isTop ? "" : css.glassBackground}>
                <Toolbar>
                    <Grid container spacing={2} sx={{ pb: 2, mt: 1, ml: 2 }}>
                        <Grid item xs={12} sm={2} md={2} lg={2} sx={{ mr: 5 }}>
                            <Link to="/home">
                                <img src={Logo} alt="Hydropass Logo" className="w-100" />
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={2} md={2} lg={1} sx={{ ml: 5, mr: 5 }}>
                            <Link to="/explore" className="text-decoration-none">
                                <Typography variant={"h4"} sx={{ color: "coastalBlue.main", textShadow: "0 0 2px black"}}>
                                    Explore
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={5} sm={5} md={4} lg={3}>
                            <Link to="/host" className="text-decoration-none">
                                <Typography variant={"h4"} sx={{ color: "coastalBlue.main", textShadow: "0 0 2px black"}}>
                                    Become a Host
                                </Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={4} sm={4} md={5} lg={5} display="flex" justifyContent="right">
                            <NotificationsIcon color="coastalBlue" sx={{ fontSize: 50, mr: 2}}/>
                            <MessageIcon color="coastalBlue" sx={{ fontSize: 50, mr: 2 }}/>
                            <Button variant="contained"  sx={{ px: 5, height: "40%", mt: "5px", color: "white.main", backgroundColor: "coastalBlue.main", "&:hover": {backgroundColor: "darkBlue.main"} }}>Login</Button>
                        </Grid>
                    </Grid>
                </Toolbar>
            </AppBar>
      </ElevationScroll>
    );
};

export default Navbar;