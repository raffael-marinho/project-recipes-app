import {
  fetchCategoriesDrinks,
  fetchCategoriesMeals,
  fetchCocktailAPI,
  fetchMealsAPI,
} from '../../services/fetchMealsAPI';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_CATEGORIES = 'GET_CATEGORIES';

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories,
});

export function requestRecipes(pathname) {
  if (pathname === '/foods') {
    return (dispatch) => fetchMealsAPI().then((data) => dispatch(getRecipes(data)));
  }
  if (pathname === '/drinks') {
    return (dispatch) => fetchCocktailAPI().then((data) => dispatch(getRecipes(data)));
  }
}

export function requestCategories(pathname) {
  if (pathname === '/foods') {
    return (dispatch) => (
      fetchCategoriesMeals().then((data) => dispatch(getCategories(data)))
    );
  }
  if (pathname === '/drinks') {
    return (dispatch) => (
      fetchCategoriesDrinks().then((data) => dispatch(getCategories(data)))
    );
  }
}
