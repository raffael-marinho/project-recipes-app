import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const FilterContext = createContext();

export function FilterProvider({ children }) {
  const [categoryToFilter, setCategoryToFilter] = useState('All');

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
