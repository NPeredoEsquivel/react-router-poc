import React from "react";
import { NavLink } from "react-router-dom";
import classes from "./MainNavigation.module.scss";

export default function MainNavigation() {
  return (
    <header className={classes["header"]}>
      <nav>
        <ul className={classes["list"]}>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes["active"] : undefined
              }
              to="/"
              end
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) =>
                isActive ? classes["active"] : undefined
              }
              to="/products"
              end
            >
              Product list
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
