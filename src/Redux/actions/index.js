import fetchMealsAPI from '../../services/fetchMealsAPI';

export const GET_RECIPES = 'GET_RECIPES';

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

export function requestMeals() {
  return (dispatch) => fetchMealsAPI().then((data) => dispatch(getRecipes(data)));
}
