import { useState, useContext, useEffect } from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Grid,
  Card,
  CardContent,
  List,
  ListItem,
  Badge,
  Typography,
  Avatar,
  Tabs,
  Tab,
  InputAdornment,
  TextField
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useTheme, styled } from "@mui/material/styles";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import AuthContext from "../../Contexts/AuthContext";
import { useWebsocket } from "../../Contexts/WebsocketContext";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      borderRadius: "50%",
      animation: "ripple 1.2s infinite ease-in-out",
      border: "1px solid currentColor",
      content: "''"
    }
  },
  "@keyframes ripple": {
    "0%": {
      transform: "scale(.8)",
      opacity: 1
    },
    "100%": {
      transform: "scale(2.4)",
      opacity: 0
    }
  }
}));

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
        <Box sx={{ pt: 3, pb: 3}}>
          <Typography>{children}</Typography>
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

const MessagingScreen = () => {
  const theme = useTheme();
  const auth = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const allMessages = useSelector((state) => state.customer.messages);
  const { socket, sendMessage } = useWebsocket();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSendMessage = () => {
    if (socket) {
      sendMessage({"action": "sendMessage", "senderId": auth.user?.profile.sub, "recipientId": allMessages[0].contact.accountID, "text": currentMessage});
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const fetchMessages = async () => {
      // Send a request to the server to fetch the messages
      const message = { type: "getMessages" };
      socket.send(JSON.stringify(message));
    };

    if (socket && socket.readyState === WebSocket.OPEN) {
      fetchMessages();
    }

    return () => {
      // Clean up the effect if needed
    };
  }, [socket]);
  

  return (
    <Card raised sx={{ height: "80vh", borderRadius: "25px"}}>
      <CardContent>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <List component="nav" aria-label="Previous Messages">
              <ListItem
                  sx={{
                    borderBottom: `2px solid ${theme.palette.lightGray.main}`
                  }}
                >
                  <Typography variant="h5">Conversations</Typography>
              </ListItem>
              <Tabs 
                orientation="vertical" 
                centered 
                sx={{ ml: 5 }} 
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{ style: { background: "transparent", height: "30%" } }}
              >
                {allMessages.map((messages, index) => {
                  return (
                    <Tab 
                      label={
                        <ListItem
                          sx={{
                            borderBottom: `2px solid ${theme.palette.lightGray.main}`
                          }}
                        >
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                            variant="dot"
                          >
                            <Avatar
                              alt={messages.contact.name}
                              src={messages.contact.profilePicture}
                            />
                          </StyledBadge>
                          <Grid container sx={{ ml: 4 }}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Typography variant="subtitle1" sx={{ color: value === index ? theme.palette.coastalBlue.main : null}}>
                                {messages.contact.name}
                                <br />
                                {messages.messageHistory[messages.messageHistory.length - 1].timestamp}
                              </Typography>
                              <Typography variant="subtitle2" sx={{ color: value === index ? theme.palette.coastalBlue.main : null}}>
                                {messages.messageHistory[messages.messageHistory.length - 1].message.length > 25 ? messages.messageHistory[messages.messageHistory.length - 1].message.slice(0, 25) + "..." : messages.messageHistory[messages.messageHistory.length - 1].message}
                              </Typography>
                            </Grid>
                          </Grid>
                        </ListItem>
                      } 
                      {...a11yProps(index)}
                    />
                  );
                })}
              </Tabs>
            </List>
          </Grid>
          <Grid
            item
            xs={9}
            sm={9}
            md={9}
            lg={9}
            sx={{ borderLeft: `2px solid ${theme.palette.lightGray.main}`, height: "80vh" }}
          >
            <Box sx={{ ml: 5 }}>
              {allMessages.map((messages, index) => {
                return (
                  <TabPanel value={value} index={index}>
                    <AppBar position="static" color="transparent">
                      <Toolbar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                          variant="dot"
                        >
                          <Avatar
                            alt={messages.contact.name}
                            src={messages.contact.profilePicture}
                          />
                        </StyledBadge>
                        <Grid container sx={{ ml: 4 }}>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="subtitle1">{messages.contact.name}</Typography>
                          </Grid>
                        </Grid>
                      </Toolbar>
                    </AppBar>
                    <Grid container sx={{ mt: 5 }}>
                      {messages.messageHistory.map((message) => {
                        return message.sender === "You" ? (
                          <Grid container justifyContent="flex-end">
                            <Grid item xs={5} />
                            <Grid item xs={1.5} sx={{ color: `${theme.palette.silver.main}`}}>
                              {message.timestamp}
                            </Grid>
                            <Grid item xs={3.75}>
                              <Typography variant="body" sx={{ mr: 5, transform: "translateY(20%)" }}>
                                {message.message}
                              </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ ml: 1 }}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                variant="dot"
                              >
                                <Avatar alt={message.sender} src={messages.contact.profilePicture} />
                              </StyledBadge>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid container justifyContent="flex-start" sx={{ mt: 5 }}>
                            <Grid item xs={0.5}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                                variant="dot"
                              >
                                <Avatar alt={message.sender} src={messages.contact.profilePicture} />
                              </StyledBadge>
                            </Grid>
                            <Grid item xs={4.5} sx={{ ml: 3 }}>
                              <Typography variant="body" sx={{ transform: "translateY(20%)" }}>
                                {message.message}
                              </Typography>
                            </Grid>
                            <Grid item xs={1.5} sx={{ color: `${theme.palette.silver.main}`}}>
                              {message.timestamp}
                            </Grid>
                            <Grid item xs={5} />
                          </Grid>
                        );
                      })}
                      <Grid item xs={12} sx={{ position: "absolute", bottom: "5%", width: "49%" }}>
                        <TextField
                          fullWidth
                          label="Message the Host"
                          value={currentMessage}
                          onChange={(e) => setCurrentMessage(e.target.value)}
                          InputProps={{
                            endAdornment: <InputAdornment position="end" onClick={handleSendMessage}>
                              <SendIcon sx={{ fontSize: 40 }}/>
                            </InputAdornment>,
                          }}
                        />              
                      </Grid>
                    </Grid>
                  </TabPanel>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MessagingScreen;
