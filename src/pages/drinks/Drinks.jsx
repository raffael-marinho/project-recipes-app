import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesList from '../../components/RecipesList';
import FiltersBtns from '../../components/FiltersBtns';
import { FilterProvider } from '../../context/filterContext';

function Drinks() {
  return (
    <>
      <Header titleProps="Drinks" />
      <FilterProvider>
        <FiltersBtns />
        <RecipesList />
      </FilterProvider>
      <Footer />
    </>
  );
}

export default Drinks;
