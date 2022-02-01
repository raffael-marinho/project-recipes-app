import { GET_RECIPES } from '../actions';

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
  default:
    return state;
  }
}

export default recipesReducer;
