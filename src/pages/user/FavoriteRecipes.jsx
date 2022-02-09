import React, { useCallback, useEffect, useState } from 'react';
import FavRecipeCard from '../../components/FavRecipeCard';
import Header from '../../components/Header';
import { FilterBtn, SFiltersBtn, SRecipesList } from '../../styles';

function FavoriteRecipes() {
  const [favoriteRecipes, setFavoriteRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState(favoriteRecipes);
  const [filter, setFilter] = useState('all');

  const filterRecipes = useCallback(() => {
    if (filter === 'foods') {
      setFilteredRecipes(favoriteRecipes.filter((recipe) => recipe.type === 'food'));
    } else if (filter === 'drinks') {
      setFilteredRecipes(favoriteRecipes.filter((recipe) => recipe.type === 'drink'));
    } else {
      setFilteredRecipes(favoriteRecipes);
    }
  }, [favoriteRecipes, filter]);

  useEffect(() => {
    filterRecipes();
  }, [filterRecipes]);

  useEffect(() => {
    if (localStorage.getItem('favoriteRecipes')) {
      setFavoriteRecipes(JSON.parse(localStorage.getItem('favoriteRecipes')));
    }
  }, []);

  return (
    <>
      <Header titleProps="Favorite Recipes" />
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
            <FavRecipeCard key={ index } recipe={ recipe } index={ index } />
          ))}
      </SRecipesList>
    </>
  );
}

export default FavoriteRecipes;
