import React from "react";
import MainNavigation from "../../components/MainNavigation/MainNavigation";

export default function ErrorPage() {
  return (
    <>
      <MainNavigation />
      <main>
        <h1>An error occured</h1>
        <p> Could not found this page!</p>
      </main>
    </>
  );
}
