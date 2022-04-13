// import React from "react";
// import { BrowserRouter as Route } from "react-router-dom";
// import { Switch } from "react-router-dom";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      {/* <h1>parshuram blogs</h1> */}
      <div className="nav">
        <Link to="/" class="active-item">
          Home
        </Link>
        <Link to="/create" class="active-item">
          Add blogs
        </Link>
      </div>
    </>
  );
}

export default Navbar;
