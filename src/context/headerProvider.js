import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useLocation, useHistory } from 'react-router-dom';
import Context from './Context';
import { fetchIngredientDrink, fetchNameDrink, fetchFirstLetterDrink,
  fetchFirstLetterMeal, fetchNameMeal,
  fetchIngredientMeal } from '../services/fetchMealsAPI';

export default function HeaderContext({ children }) {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchByText, setSearchByText] = useState('');
  const [filter, setFilter] = useState('');
  const [radioButton, setRadioButton] = useState('');

  const location = useLocation();
  const history = useHistory();

  const handleSearchButton = () => {
    setShowSearchBar(!showSearchBar);
  };

  const handleFilterSearch = (data) => {
    const alert = 'Sorry, we haven\'t found any recipes for these filters.';
    if (!data) {
      global.alert(alert);
    } else {
      setFilter(data);
      if (location.pathname.includes('foods') && data.length === 1) {
        history.push(`/foods/${data[0].idMeal}`);
      } else if (location.pathname.includes('drinks') && data.length === 1) {
        history.push(`/drinks/${data[0].idDrink}`);
      }
    }
  };

  const handleSearchClick = () => {
    if (location.pathname === '/foods') {
      if (radioButton === 'ingredients') {
        fetchIngredientMeal(searchByText)
          .then((data) => handleFilterSearch(data));
      }
      if (radioButton === 'name') {
        fetchNameMeal(searchByText)
          .then((data) => handleFilterSearch(data));
      }
      if (radioButton === 'firstLetter') {
        fetchFirstLetterMeal(searchByText)
          .then((data) => handleFilterSearch(data));
      }
    }
    if (location.pathname === '/drinks') {
      if (radioButton === 'ingredients') {
        fetchIngredientDrink(searchByText)
          .then((data) => handleFilterSearch(data));
      }
      if (radioButton === 'name') {
        fetchNameDrink(searchByText)
          .then((data) => handleFilterSearch(data));
      }
      if (radioButton === 'firstLetter') {
        fetchFirstLetterDrink(searchByText)
          .then((data) => handleFilterSearch(data));
      }
    }
  };

  const Value = {
    searchByText,
    showSearchBar,
    filter,
    handleSearchButton,
    setShowSearchBar,
    setSearchByText,
    handleSearchClick,
    setRadioButton,
  };
  return (
    <Context.Provider value={ Value }>
      { children }
    </Context.Provider>
  );
}
HeaderContext.propTypes = {
  children: PropTypes.node.isRequired,
};
