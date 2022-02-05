import { GET_BY_FILTER, GET_CATEGORY, GET_RECIPES } from '../actions';

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
  default:
    return state;
  }
}

export default recipesReducer;
