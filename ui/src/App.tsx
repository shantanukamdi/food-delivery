import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./contants";

import "./App.css";
import { Landing } from "./pages/landing/landing";
import { Register } from "./pages/register/register";

function App() {
  return (
    <Router>
      <Switch>
        <Route path={routes.register}>
          <Register />
        </Route>
        <Route path={routes.login}>Login</Route>

        <Route path={routes.landing} exact>
          <Landing />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
