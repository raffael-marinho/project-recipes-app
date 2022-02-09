import {
  GET_BY_FILTER,
  GET_CATEGORY,
  GET_RECIPES,
  START_FOOD,
  START_DRINK,
  FAVORITE_DRINK,
  FAVORITE_FOOD,
  NEW_RECIPE,
} from '../actions';

function chamarFavFOOD(state, action) {
  return {
    ...state,
    recipes: state.recipes.map((recipe) => {
      if (recipe.idMeal === action.id) {
        return recipe?.favorited
          ? { ...recipe, favorited: false }
          : { ...recipe, favorited: true };
      }
      return recipe;
    }),
  };
}

function chamarFavDRINK(state, action) {
  console.log(state.recipes);
  return {
    ...state,
    recipes: state.recipes.map((recipe) => {
      if (recipe.idDrink === action.id) {
        return recipe?.favorited
          ? { ...recipe, favorited: false }
          : { ...recipe, favorited: true };
      }
      return recipe;
    }),
  };
}

const INITIAL_STATE = {
  recipes: [],
};

function recipesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_RECIPES:
    return {
      ...state,
      recipes: action.recipes,
    };
  case GET_CATEGORY:
    return {
      ...state,
      recipes: action.category,
    };
  case GET_BY_FILTER:
    return {
      ...state,
      recipes: action.filtered,
    };
  case START_FOOD:
    return {
      ...state,
      recipes: state.recipes.map((recipe) => {
        if (recipe.idMeal === action.id) {
          return { ...recipe, started: true };
        }
        return recipe;
      }),
    };
  case FAVORITE_FOOD:
    return chamarFavFOOD(state, action);

  case START_DRINK:
    return {
      ...state,
      recipes: state.recipes.map((recipe) => {
        if (recipe.idDrink === action.id) {
          return { ...recipe, started: true };
        }
        return recipe;
      }),
    };
  case FAVORITE_DRINK:
    return chamarFavDRINK(state, action);
  case NEW_RECIPE:
    return {
      ...state,
      recipes: [...state.recipes, action.recipe],
    };

  default:
    return state;
  }
}

export default recipesReducer;
