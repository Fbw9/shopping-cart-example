import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Start from "./pages/Start";
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/signup" component={Signup} />
      <Route exact path="/" component={Start} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
