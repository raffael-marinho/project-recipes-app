import { fetchCocktailAPI, fetchMealsAPI } from '../../services/fetchMealsAPI';

export const GET_RECIPES = 'GET_RECIPES';

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

export function requestRecipes(pathname) {
  if (pathname === '/foods') {
    return (dispatch) => fetchMealsAPI().then((data) => dispatch(getRecipes(data)));
  }
  if (pathname === '/drinks') {
    return (dispatch) => fetchCocktailAPI().then((data) => dispatch(getRecipes(data)));
  }
}
