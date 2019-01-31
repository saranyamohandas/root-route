import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Paths from "./pages/Paths";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/" component={Paths} />
          <Route exact path="/Paths" component={Paths} />
          <Route exact path="/Paths/:id" component={Detail} />
          <Route component={NoMatch} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
