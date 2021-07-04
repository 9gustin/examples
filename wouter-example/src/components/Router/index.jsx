import React from "react";
import { Route, Switch, Redirect } from "wouter";
import { MAIN_PUBLIC_PATH } from "./paths";

import { ROUTES } from "./routes";

const Router = () => {
  const isLogged = localStorage.getItem("session");

  return (
    <Switch>
      {ROUTES.map((route) => (
        <Route path={route.path}>
          {!isLogged && route.isPrivate ? (
            <Redirect to={MAIN_PUBLIC_PATH} />
          ) : (
            <route.component />
          )}
        </Route>
      ))}
    </Switch>
  );
};

export default Router;
