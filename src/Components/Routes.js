import React from "react";
import { Route, Redirect, Switch } from "react-router-dom";

import RealApp from "./RealApp";

const basePath = "/shuffle-spotify";

function Routes(props) {
  return (
    <Switch>
      <Route exact path={`${basePath}`} render={() => <RealApp />} />
      <Redirect to={`${basePath}`} />
    </Switch>
  );
}

export default Routes;
