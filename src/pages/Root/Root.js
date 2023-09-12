import React from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../../components/MainNavigation/MainNavigation";
import classes from "./Root.module.scss";

export default function RootLayout() {
  return (
    <>
      <MainNavigation />
      <main className={classes["content"]}>
        <Outlet />
      </main>
    </>
  );
}
