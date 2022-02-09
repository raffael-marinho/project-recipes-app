import React, { useCallback, useEffect, useState } from 'react';
import DoneRecipeCard from '../../components/DoneRecipeCard';
import Header from '../../components/Header';
import { FilterBtn, SFiltersBtn, SRecipesList } from '../../styles';

function DoneRecipes() {
  const [doneRecipes, setDoneRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(doneRecipes);
  const [filter, setFilter] = useState('all');

  const filterRecipes = useCallback(() => {
    if (filter === 'foods') {
      setFilteredRecipes(doneRecipes.filter((recipe) => recipe.type === 'food'));
    } else if (filter === 'drinks') {
      setFilteredRecipes(doneRecipes.filter((recipe) => recipe.type === 'drink'));
    } else {
      setFilteredRecipes(doneRecipes);
    }
  }, [doneRecipes, filter]);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  useEffect(() => {
    if (localStorage.getItem('doneRecipes')) {
      setDoneRecipes(JSON.parse(localStorage.getItem('doneRecipes')));
    }
  }, []);

  return (
    <>
      <Header titleProps="Done Recipes" />
      <SFiltersBtn>
        <FilterBtn
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('all') }
        >
          All
        </FilterBtn>
        <FilterBtn
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('foods') }
        >
          Foods
        </FilterBtn>
        <FilterBtn
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drinks') }
        >
          Drinks
        </FilterBtn>
      </SFiltersBtn>
      <SRecipesList>
        {filteredRecipes
          .map((recipe, index) => (
            <DoneRecipeCard key={ index } recipe={ recipe } index={ index } />
          ))}
      </SRecipesList>
    </>
  );
}

export default DoneRecipes;
