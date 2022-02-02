import React, { useContext, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { FilterContext } from '../context/filterContext';
import { requestCategories } from '../Redux/actions';
import { FilterBtn, SFiltersBtn } from '../styles';

function FiltersBtns() {
  const { pathname } = useLocation();
  const { setCategoryToFilter } = useContext(FilterContext);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categoriesReducer);

  const amountCategories = 5;

  useEffect(() => {
    dispatch(requestCategories(pathname));
  }, [dispatch, pathname]);

  return (
    <SFiltersBtn>
      <FilterBtn
        type="button"
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
              onClick={ () => setCategoryToFilter(category.strCategory) }
            >
              {category.strCategory}

            </FilterBtn>
          )
        ))}
    </SFiltersBtn>
  );
}

export default FiltersBtns;
