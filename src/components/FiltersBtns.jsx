import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { requestCategories } from '../Redux/actions';
import { SFiltersBtn } from '../styles';

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
    </SFiltersBtn>
  );
}

export default FiltersBtns;
