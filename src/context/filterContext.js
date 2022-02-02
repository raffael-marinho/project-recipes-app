import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryToFilter, setCategoryToFilter] = useState('All');
  console.log(categoryToFilter);

  const data = {
    categoryToFilter,
    setCategoryToFilter,
  };

  return (
    <FilterContext.Provider value={ data }>
      {children}
    </FilterContext.Provider>
  );
}

FilterProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node]).isRequired,
};
