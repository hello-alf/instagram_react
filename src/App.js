import React from "react";
import { ListOfCategories } from "./components/ListOfCategories";
import { ListOfPhotoCards } from "./components/ListOfPhotoCards";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Logo } from "./components/Logo";

const App = () => {
  return (
    <>
      <Logo />
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
};

export default App;
