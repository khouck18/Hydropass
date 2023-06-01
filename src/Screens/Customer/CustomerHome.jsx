import { useState } from "react";
import { Box, Grid, Tabs, Tab, Typography } from "@mui/material";
import MessagingScreen from "./MessagingScreen";
import AccountSettingsCustomer from "./AccountSettingsCustomer";
import { useTheme } from "@mui/material/styles";
import PropTypes from "prop-types";
import TableChartIcon from "@mui/icons-material/TableChart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MessageIcon from "@mui/icons-material/Message";
import CollectionsBookmarkIcon from "@mui/icons-material/CollectionsBookmark";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";


const TabPanel = (props) => {
    const { children, value, index, ...other } = props;
  
    return (
      <Box
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography component="span">{children}</Typography>
          </Box>
        )}
      </Box>
    );
  };
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  
  const a11yProps = (index) => {
    return {
      id: `vertical-tab-${index}`,
      "aria-controls": `vertical-tabpanel-${index}`,
    };
  };

const CustomerHome = () => {
    const theme = useTheme();
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabItems = [
        {
            name: "Dashboard",
            icon: <TableChartIcon color="white" sx={{ mr: 3}}/> 
        },
        {
            name: "Account Settings",
            icon: <ManageAccountsIcon color="white" sx={{ mr: 3}}/> 
        },
        {
            name: "Passes",
            icon: <CollectionsBookmarkIcon color="white" sx={{ mr: 3}}/> 
        },
        {
            name: "Messages",
            icon: <MessageIcon color="white" sx={{ mr: 3}}/> 
        },
        {
            name: "Saved Listings",
            icon: <FavoriteIcon color="white" sx={{ mr: 3}}/> 
        },
    ];

    return (
        <Grid container height="85vh">
            <Grid item xs={3}>
                <Box sx={{ backgroundColor: `${theme.palette.coastalBlue.main}`, borderRadius: "25px", height: "100%", width: "100%", transform: "TranslateX(-10%)"}}>
                    <Grid container direction="row" justifyContent="center" alignItems="center" sx={{ pl: "5%", height: "100%"}}>
                        <Tabs
                            orientation="vertical"
                            centered
                            value={value}
                            onChange={handleChange}
                            TabIndicatorProps={{ style: { background: theme.palette.common.white } }}
                        >
                            {tabItems.map((item, index) => {
                                return (
                                    <Tab
                                        key={item.name} 
                                        label={
                                            <Grid container alignItems="center">
                                                {item.icon}
                                                <Typography component="span" variant="h5" sx={{ color: value === index ? theme.palette.white.main : theme.palette.white.main }}>
                                                    {item.name}
                                                </Typography>
                                            </Grid>
                                        } 
                                        {...a11yProps(index)} 
                                    />
                                );
                            })}
                        </Tabs>
                    </Grid>
                </Box>
            </Grid>
            <Grid item xs={9}>
                <TabPanel value={value} index={0}>
                    Dashboard
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AccountSettingsCustomer />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Passes
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <MessagingScreen />
                </TabPanel>
                <TabPanel value={value} index={4}>
                    Saved Listings
                </TabPanel>
            </Grid>
        </Grid>
    );
};

export default CustomerHome;