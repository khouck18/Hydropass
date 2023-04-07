import React, { useState, useEffect } from "react";
import { useAuth, hasAuthParams } from "react-oidc-context";
import AuthContext from "./Contexts/AuthContext";
import Layout from "./Screens/Layout";

const App = () => {
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
  }, [auth, auth.isAuthenticated, auth.activeNavigator, auth.isLoading, auth.signinRedirect]);

  return (
    !(auth.isLoading || auth.activeNavigator) && auth.isAuthenticated && (
      <div>
        <AuthContext.Provider value={auth}>
          <Layout />
        </AuthContext.Provider>
      </div>
    )
    );
};

export default App;
