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
  Avatar
} from "@mui/material";
import { useTheme, styled } from "@mui/material/styles";

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

const MessagingScreen = () => {
  const theme = useTheme();

  return (
    <Card raised>
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
                    alt="Billy Bob Joe"
                    src="/static/images/avatar/1.jpg"
                  />
                </StyledBadge>
                <Grid container sx={{ ml: 4 }}>
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Typography variant="subtitle1">Billy Bob Joe</Typography>
                    <Typography variant="subtitle2">
                      Your last message with them here...
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    10:32 AM
                  </Grid>
                </Grid>
              </ListItem>
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
                    alt="Billy Bob Joe"
                    src="/static/images/avatar/1.jpg"
                  />
                </StyledBadge>
                <Grid container sx={{ ml: 4 }}>
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Typography variant="subtitle1">Billy Bob Joe</Typography>
                    <Typography variant="subtitle2">
                      Your last message with them here...
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    10:32 AM
                  </Grid>
                </Grid>
              </ListItem>
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
                    alt="Billy Bob Joe"
                    src="/static/images/avatar/1.jpg"
                  />
                </StyledBadge>
                <Grid container sx={{ ml: 4 }}>
                  <Grid item xs={10} sm={10} md={10} lg={10}>
                    <Typography variant="subtitle1">Billy Bob Joe</Typography>
                    <Typography variant="subtitle2">
                      Your last message with them here...
                    </Typography>
                  </Grid>
                  <Grid item xs={2} sm={2} md={2} lg={2}>
                    10:32 AM
                  </Grid>
                </Grid>
              </ListItem>
            </List>
          </Grid>
          <Grid
            item
            xs={9}
            sm={9}
            md={9}
            lg={9}
            sx={{ borderLeft: `2px solid ${theme.palette.lightGray.main}` }}
          >
            <Box sx={{ ml: 5 }}>
              <AppBar position="static" color="transparent">
                <Toolbar>
                  <StyledBadge
                    overlap="circular"
                    anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                    variant="dot"
                  >
                    <Avatar
                      alt="Billy Bob Joe"
                      src="/static/images/avatar/1.jpg"
                    />
                  </StyledBadge>
                  <Grid container sx={{ ml: 4 }}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography variant="subtitle1">Billy Bob Joe</Typography>
                    </Grid>
                  </Grid>
                </Toolbar>
              </AppBar>
              <Grid container sx={{ mt: 5 }}>
                <Grid container justifyContent="flex-end">
                  <Grid item xs={6} />
                  <Grid item xs={1}>
                    10:32 AM
                  </Grid>
                  <Grid item xs={3.75}>
                    <Typography
                      variant="p"
                      sx={{ mr: 5, transform: "translateY(20%)" }}
                    >
                      Hi Billy Bob, could you tell me more about your property
                      on the river? Does it come with kayaks?
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sx={{ ml: 1 }}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar alt="You" src="/static/images/avatar/1.jpg" />
                    </StyledBadge>
                  </Grid>
                </Grid>
                <Grid container justifyContent="flex-start" sx={{ mt: 5 }}>
                  <Grid item xs={0.5}>
                    <StyledBadge
                      overlap="circular"
                      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                      variant="dot"
                    >
                      <Avatar
                        alt="Billy Bob Joe"
                        src="/static/images/avatar/1.jpg"
                      />
                    </StyledBadge>
                  </Grid>
                  <Grid item xs={4.5}>
                    <Typography
                      variant="p"
                      sx={{ transform: "translateY(20%)" }}
                    >
                      Hi there, yes the property does have kayaks and you are
                      welcome to use them during your stay. They are in the shed
                      and the code will be provided once you have booked!
                    </Typography>
                  </Grid>
                  <Grid item xs={1} sx={{ ml: 5 }}>
                    10:44 AM
                  </Grid>
                  <Grid item xs={6} />
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default MessagingScreen;
