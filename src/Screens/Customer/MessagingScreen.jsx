import {
  useState,
  useContext,
  useEffect,
  useRef,
  useLayoutEffect
} from "react";
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
import { useSelector, useDispatch } from "react-redux";
import AuthContext from "../../Contexts/AuthContext";
import { useWebsocket } from "../../Contexts/WebsocketContext";
import { GetAllMessages } from "./CustomerActions";
import { customerActions } from "./CustomerSlice";

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
        <Box sx={{ pt: 3, pb: 3 }}>
          <Typography component="span">{children}</Typography>
        </Box>
      )}
    </Box>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired
};

const a11yProps = (index) => {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`
  };
};

const MessagingScreen = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  const apiBaseUrl = `${process.env.REACT_APP_API_URL}`;
  const auth = useContext(AuthContext);
  const [value, setValue] = useState(0);
  const [currentMessage, setCurrentMessage] = useState("");
  const allMessages = useSelector((state) => state.customer.messages);
  const newMessages = useSelector((state) => state.customer.newMessages);
  const { socket, sendMessage } = useWebsocket();
  const containerRef = useRef(null);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSendMessage = () => {
    if (socket) {
      sendMessage({
        action: "sendMessage",
        senderId: auth.user?.profile.sub,
        recipientId: allMessages[value].contact.accountId,
        text: currentMessage
      });
      setCurrentMessage("");
    }
  };

  useEffect(() => {
    const user = auth.user;
    dispatch(GetAllMessages({ apiBaseUrl, user }));
  }, [apiBaseUrl, auth, dispatch]);

  useEffect(() => {
    allMessages?.forEach((message) => {
      if (
        newMessages !== [] &&
        message.contact.accountId === newMessages[0]?.contact
      ) {
        const updatedMessageHistory = [
          ...message.messageHistory,
          {
            sender_id: newMessages[0].message.sender,
            text: newMessages[0].message.message,
            timestamp: newMessages[0].message.timestamp
            // type: newMessages[0].message.type
          }
        ];
        dispatch(
          customerActions.updateMessages({
            accountId: newMessages[0].contact,
            updatedMessageHistory: updatedMessageHistory
          })
        );
        dispatch(
          customerActions.createNewMessage(
            newMessages.length >= 2 ? newMessages.shift() : []
          )
        );
      }
    });
  }, [newMessages, allMessages, dispatch]);

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);

    const options = {
      month: "numeric",
      day: "numeric",
      year: "2-digit",
      hour: "numeric",
      minute: "numeric",
      hour12: true
    };

    return date.toLocaleString("en-US", options);
  };

  useLayoutEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo(0, containerRef.current.scrollHeight);
    }
  }, [allMessages]);

  return (
    <Card raised sx={{ height: "80vh", borderRadius: "25px" }}>
      <CardContent>
        <Grid container>
          <Grid item xs={3} sm={3} md={3} lg={3}>
            <List component="nav" aria-label="Previous Messages">
              <ListItem
                sx={{
                  borderBottom: `2px solid ${theme.palette.lightGray.main}`
                }}
              >
                <Typography variant="h5" component="span">
                  Conversations
                </Typography>
              </ListItem>
              <Tabs
                orientation="vertical"
                centered
                sx={{ ml: 5 }}
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: { background: "transparent", height: "30%" }
                }}
              >
                {allMessages.map((messages, index) => {
                  const firstMessage =
                    messages.messageHistory[messages.messageHistory.length - 1];

                  return (
                    <Tab
                      key={index}
                      label={
                        <ListItem
                          sx={{
                            borderBottom: `2px solid ${theme.palette.lightGray.main}`
                          }}
                        >
                          <StyledBadge
                            overlap="circular"
                            anchorOrigin={{
                              vertical: "bottom",
                              horizontal: "right"
                            }}
                            variant="dot"
                          >
                            <Avatar
                              alt={messages.contact.name}
                              src={messages.contact.profilePicture}
                            />
                          </StyledBadge>
                          <Grid container sx={{ ml: 4 }}>
                            <Grid item xs={12} sm={12} md={12} lg={12}>
                              <Typography
                                variant="subtitle1"
                                sx={{
                                  color:
                                    value === index
                                      ? theme.palette.coastalBlue.main
                                      : null
                                }}
                                component="span"
                              >
                                {messages.contact.name}
                                <br />
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                sx={{
                                  color:
                                    value === index
                                      ? theme.palette.coastalBlue.main
                                      : null
                                }}
                                component="span"
                              >
                                {firstMessage &&
                                  formatDate(firstMessage.timestamp)}
                                <br />
                              </Typography>
                              <Typography
                                variant="subtitle2"
                                component="span"
                                sx={{
                                  color:
                                    value === index
                                      ? theme.palette.coastalBlue.main
                                      : null
                                }}
                              >
                                {firstMessage && firstMessage.text.length > 25
                                  ? `${firstMessage.text.slice(0, 25)}...`
                                  : firstMessage && firstMessage.text}
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
            sx={{
              borderLeft: `2px solid ${theme.palette.lightGray.main}`,
              height: "80vh"
            }}
          >
            <Box sx={{ ml: 5 }}>
              {allMessages.map((messages, index) => {
                return (
                  <TabPanel value={value} index={index} key={index}>
                    <AppBar position="static" color="transparent">
                      <Toolbar>
                        <StyledBadge
                          overlap="circular"
                          anchorOrigin={{
                            vertical: "bottom",
                            horizontal: "right"
                          }}
                          variant="dot"
                        >
                          <Avatar
                            alt={messages.contact.name}
                            src={messages.contact.profilePicture}
                          />
                        </StyledBadge>
                        <Grid container sx={{ ml: 4 }}>
                          <Grid item xs={12} sm={12} md={12} lg={12}>
                            <Typography variant="subtitle1" component="span">
                              {messages.contact.name}
                            </Typography>
                          </Grid>
                        </Grid>
                      </Toolbar>
                    </AppBar>
                    <Box
                      sx={{ maxHeight: "55vh", overflow: "auto", mt: 5 }}
                      ref={containerRef}
                    >
                      {messages.messageHistory.map((message, index) => {
                        return message.sender_id === auth.user?.profile.sub ? (
                          <Grid
                            container
                            justifyContent="flex-end"
                            sx={{ mt: 3 }}
                            key={index}
                          >
                            <Grid item xs={5} />
                            <Grid
                              item
                              xs={5.25}
                              sx={{
                                backgroundColor: `${theme.palette.darkBlue.main}`,
                                borderRadius: "25px",
                                px: 3,
                                pt: 1
                              }}
                            >
                              <Typography
                                variant="body"
                                sx={{ mr: 5, transform: "translateY(20%)" }}
                                component="span"
                              >
                                <Box
                                  sx={{
                                    color: `${theme.palette.paleBlue.main}`
                                  }}
                                >
                                  {formatDate(message.timestamp)}
                                </Box>
                                <Box
                                  sx={{ color: `${theme.palette.white.main}` }}
                                >
                                  {message.text}
                                </Box>
                              </Typography>
                            </Grid>
                            <Grid item xs={1} sx={{ ml: 1 }}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "right"
                                }}
                                variant="dot"
                              >
                                <Avatar
                                  alt={message.sender_id}
                                  src={messages.contact.profilePicture}
                                />
                              </StyledBadge>
                            </Grid>
                          </Grid>
                        ) : (
                          <Grid
                            container
                            justifyContent="flex-start"
                            sx={{ mt: 3 }}
                            key={index}
                          >
                            <Grid item xs={0.5}>
                              <StyledBadge
                                overlap="circular"
                                anchorOrigin={{
                                  vertical: "bottom",
                                  horizontal: "right"
                                }}
                                variant="dot"
                              >
                                <Avatar
                                  alt={message.sender_id}
                                  src={messages.contact.profilePicture}
                                />
                              </StyledBadge>
                            </Grid>
                            <Grid
                              item
                              xs={5.25}
                              sx={{
                                backgroundColor: `${theme.palette.silver.main}`,
                                borderRadius: "25px",
                                px: 3,
                                pt: 1,
                                ml: 3
                              }}
                            >
                              <Typography
                                variant="body"
                                sx={{ mr: 5, transform: "translateY(20%)" }}
                                component="span"
                              >
                                <Box
                                  sx={{ color: `${theme.palette.white.main}` }}
                                >
                                  {formatDate(message.timestamp)}
                                </Box>
                                <Box
                                  sx={{ color: `${theme.palette.white.main}` }}
                                >
                                  {message.text}
                                </Box>
                              </Typography>
                            </Grid>
                            <Grid item xs={5} />
                          </Grid>
                        );
                      })}
                    </Box>

                    <Grid
                      item
                      xs={12}
                      sx={{
                        position: "absolute",
                        bottom: "5%",
                        width: "49%"
                      }}
                    >
                      <TextField
                        fullWidth
                        label="Message the Host"
                        value={currentMessage}
                        onChange={(e) => setCurrentMessage(e.target.value)}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment
                              position="end"
                              onClick={handleSendMessage}
                            >
                              <SendIcon sx={{ fontSize: 40 }} />
                            </InputAdornment>
                          )
                        }}
                      />
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
