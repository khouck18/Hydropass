import React, { useState, useEffect } from "react";
import { useAuth, hasAuthParams } from "react-oidc-context";
import AuthContext from "./Contexts/AuthContext";
import Layout from "./Screens/Layout";
import { LocalizationProvider } from "@mui/x-date-pickers-pro";
import { AdapterDayjs } from "@mui/x-date-pickers-pro/AdapterDayjs";
import { LicenseInfo } from "@mui/x-license-pro";

const App = () => {
  LicenseInfo.setLicenseKey(
    "ea979dc68f4531ef274ddfff8cbff499Tz02NDE0NyxFPTE3MTI5MDc3MTkxNzIsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI="
  );
  const auth = useAuth();
  const [, setBlocking] = useState(false);

  useEffect(() => {
    auth.isLoading ? setBlocking(true) : setBlocking(false);

    if (
      !hasAuthParams() &&
      !auth.isAuthenticated &&
      !auth.activeNavigator &&
      !auth.isLoading
    ) {
      auth.signinRedirect({ state: { location: window.location.toString() } });
    }
  }, [
    auth,
    auth.isAuthenticated,
    auth.activeNavigator,
    auth.isLoading,
    auth.signinRedirect
  ]);

  return (
    !(auth.isLoading || auth.activeNavigator) &&
    auth.isAuthenticated && (
      <div>
        <AuthContext.Provider value={auth}>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Layout />
          </LocalizationProvider>
        </AuthContext.Provider>
      </div>
    )
  );
};

export default App;
