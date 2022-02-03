import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FilterContext } from '../context/filterContext';
import { requestCategories } from '../Redux/actions';
import { FilterBtn, SFiltersBtn } from '../styles';

function FiltersBtns() {
  const { pathname } = useLocation();
  const { categoryToFilter, setCategoryToFilter } = useContext(FilterContext);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesReducer);

  const amountCategories = 5;

  useEffect(() => {
    dispatch(requestCategories(pathname));
  }, [dispatch, pathname]);

  const handleClick = (category) => {
    if (category === categoryToFilter) {
      setCategoryToFilter('All');
    } else {
      setCategoryToFilter(category);
    }
  };

  return (
    <SFiltersBtn>
      <FilterBtn
        type="button"
        data-testid="All-category-filter"
        onClick={ () => setCategoryToFilter('All') }
      >
        All

      </FilterBtn>
      {categories
        .map((category, index) => (
          index < amountCategories && (
            <FilterBtn
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
              onClick={ () => handleClick(category.strCategory) }
            >
              {category.strCategory}

            </FilterBtn>
          )
        ))}
    </SFiltersBtn>
  );
}

export default FiltersBtns;
