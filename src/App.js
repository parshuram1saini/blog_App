import React from "react";
import "./style.css";
import Navbar from "./Navbar";
// import Addblog from "./Addblog";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Create from "./create";
import Blogdetails from "./blogdetails";
import Notefound from "./Notefound";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <h1>blog App using React js</h1>
        {/* <Addblog /> */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/* </Switch> */}
          {/* <Switch> */}
          <Route exact path="/create">
            <Create />
          </Route>
          {/* </Switch> */}
          {/* <Switch> */}
          <Route exact path="/blog/:id">
            <Blogdetails />
          </Route>
          <Route path="/*">
            <Notefound />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
