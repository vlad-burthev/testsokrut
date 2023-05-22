import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

import "./App.css";
import Card from "./components/Card/Card";

import bg from "./assets/bg.png";
import countryFlag from "./assets/flag-irland.svg";

function App() {
  const drinks = {
    drinkImg: [{ photo: bg }, { photo: bg }, { photo: bg }],

    name: "Writers’ Tears",
    title: "Whiskey Writers' Tears Red Head, Writers’ Tears",
    description: "Speyside Single Malt Scotch Whisky Distillery Bottling",

    amount: "500ml",
    countryName: "Irland",
    countryFlag: countryFlag,
  };

  return (
    <>
      <Card drink={drinks} theme="dark" />
      <Card drink={drinks} theme="light" />
    </>
  );
}

export default App;
