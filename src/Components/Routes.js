import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import Admin from "./Admin";
import Home from "./Home";

const basePath = "/shuffle-spotify";

function Routes(props) {
  return (
    <Switch>
      <Route exact path={`${basePath}/admin`} component={Admin} />

      <Route exact path={`${basePath}`} render={() => <Home />} />
      <Redirect to={`${basePath}`} />
    </Switch>
  );
}

export default Routes;
