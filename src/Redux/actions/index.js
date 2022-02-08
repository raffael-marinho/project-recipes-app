import {
  fetchCategoriesDrinks,
  fetchCategoriesMeals,
  fetchCocktailAPI,
  fetchMealsAPI,
  fetchCategoryMeal,
  fetchCategoryDrink,
} from '../../services/fetchMealsAPI';

export const GET_RECIPES = 'GET_RECIPES';
export const GET_CATEGORIES = 'GET_CATEGORIES';
export const GET_CATEGORY = 'GET_CATEGORY';
export const GET_BY_FILTER = 'GET_BY_FILTER';
export const START_FOOD = 'START_FOOD';
export const START_DRINK = 'START_DRINK';
export const FAVORITE_FOOD = 'FAVORITE_FOOD';
export const FAVORITE_DRINK = 'FAVORITE_DRINK';

export const getRecipes = (recipes) => ({
  type: GET_RECIPES,
  recipes,
});

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  categories,
});

export const getCategory = (category) => ({
  type: GET_CATEGORY,
  category,
});

export const getByFilter = (filtered) => ({
  type: GET_BY_FILTER,
  filtered,
});

export const startFood = (id) => ({
  type: START_FOOD,
  id,
});
export const favoriteFood = (id) => ({
  type: FAVORITE_FOOD,
  id,
});

export const startDrink = (id) => ({
  type: START_DRINK,
  id,
});
export const favoriteDrink = (id) => ({
  type: FAVORITE_DRINK,
  id,
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

export function requestCategory(pathname, category) {
  if (pathname === '/foods') {
    return (dispatch) => (
      fetchCategoryMeal(category).then((data) => dispatch(getCategory(data)))
    );
  }
  if (pathname === '/drinks') {
    return (dispatch) => (
      fetchCategoryDrink(category).then((data) => dispatch(getCategory(data)))
    );
  }
}
