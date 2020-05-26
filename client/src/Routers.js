import React from "react";
import Search from "./components/Search.js";
import Profile from "./components/Profile.js";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

function Routers() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/profile/:region/:name" component={Profile}/>
          <Route path="/" component={Search}>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default Routers;
