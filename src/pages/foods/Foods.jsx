import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import RecipesList from '../../components/RecipesList';
import FiltersBtns from '../../components/FiltersBtns';

function Foods() {
  return (
    <>
      <Header />
      <FiltersBtns />
      <RecipesList />
      <Footer />
    </>
  );
}

export default Foods;
