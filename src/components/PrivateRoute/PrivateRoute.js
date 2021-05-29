import React, { useContext } from "react";
import { Redirect, Route } from "react-router";
import { loginContext } from "../../App";

const PrivateRoute = ({ children, ...rest }) => {
  const [loggedInUser] = useContext(loginContext);
  return (
    <Route
      {...rest}
      render={({ location }) =>
        loggedInUser?.email || loggedInUser?.name ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
