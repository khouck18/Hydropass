import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { AuthProvider } from "react-oidc-context";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { reduxStore } from "./Store/ReduxStore";
import Screen1 from "./Screens/Screen1";
import Screen2 from "./Screens/Screen2";

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
            <Route path="" element={<Navigate to="/screen1" />} />
            <Route path="/" element={<App />}>
              <Route path="oauth-callback" element={<App />} />
              <Route path="screen1" element={<Screen1 />} />
              <Route path="screen2" element={<Screen2 />} />
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
