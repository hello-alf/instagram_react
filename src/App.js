import React from 'react';
import {ListOfCategories} from './components/ListOfCategories'
import {ListOfPhotoCards} from './components/ListOfPhotoCards'
import {GlobalStyles} from './GlobalStyles'

const App = () => {
  return (
    <>
      <GlobalStyles />
      <ListOfCategories />
      <ListOfPhotoCards />
    </>
  );
};

export default App;