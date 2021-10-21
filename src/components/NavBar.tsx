import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

const NavBar = () => {
  return (
    <div>
      <h1>React Birding App</h1>
      <ul>
        <li>
          <h2>
          <Link to="/Home">Home</Link>
          </h2>
        </li>
        <li>
         <h2>
          <Link to="/BirdList">Bird List</Link>
          </h2>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default NavBar;
