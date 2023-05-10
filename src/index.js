import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { reduxStore } from "./Store/ReduxStore";
import HomePage from "./Screens/Home/HomePage";
import Host from "./Screens/Host/Host";
import CreateListing from "./Screens/Host/CreateListing";
import Explore from "./Screens/Explore/ExplorePage";
import IndividualListing from "./Screens/IndividualListing/IndividualListing";

const onSigninCallback = (user) => {
  const previousLocation = user.state?.location || "/";
  window.location.replace(previousLocation);
};

const oidcConfig = {
  authority: `${process.env.REACT_APP_COGNITO_URL}/oauth2_authorize`,
  metadataUrl: `${process.env.REACT_APP_COGNITO_URL}/.well-known/openid-configuration`,
  client_id: process.env.REACT_APP_COGNITO_CLIENT_ID,
  redirect_uri: `${process.env.REACT_APP_BASE_URL}/oauth-callback`,
  scope: process.env.REACT_APP_SCOPES,
  responseType: "code",
  revokeTokenTypes: ["refresh_token"],
  automaticSilentRenew: false,
  metadataSeed: {
    end_session_endpoint: `${process.env.REACT_APP_COGNITO_UI}/logout?client_id=${process.env.REACT_APP_COGNITO_CLIENT_ID}&logout_uri=${process.env.REACT_APP_BASE_URL}`
  },
  onSigninCallback
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={reduxStore}>
      <AuthProvider {...oidcConfig}>
        <BrowserRouter>
          <Routes>
            <Route path="" element={<Navigate to="/home" />} />
            <Route path="/" element={<App />}>
              <Route path="oauth-callback" element={<App />} />
              <Route path="home" element={<HomePage />} />
              <Route path="explore" element = {<Explore />} />
              <Route path="listing/:listingID" element={<IndividualListing />} />
              <Route path="host" element={<Host />} />
              <Route path="createListing" element={<CreateListing />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AuthProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
