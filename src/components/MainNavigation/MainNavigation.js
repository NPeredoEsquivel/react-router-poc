import React from "react";
import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

export default function MainNavigation() {
  return (
    <header className={classes["header"]}>
      <nav>
        <ul className={classes["list"]}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/products">Product list</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
