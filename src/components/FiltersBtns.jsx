import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { requestCategories } from '../Redux/actions';
import { FilterBtn, SFiltersBtn } from '../styles';

function FiltersBtns() {
  const { pathname } = useLocation();
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesReducer);

  const amountCategories = 5;

  useEffect(() => {
    dispatch(requestCategories(pathname));
  }, [dispatch, pathname]);

  return (
    <SFiltersBtn>
      <button type="button">All</button>
      {categories
        .map((category, index) => (
          index < amountCategories && (
            <FilterBtn
              key={ index }
              data-testid={ `${category.strCategory}-category-filter` }
            >
              {category.strCategory}

            </FilterBtn>
          )
        ))}
    </SFiltersBtn>
  );
}

export default FiltersBtns;
