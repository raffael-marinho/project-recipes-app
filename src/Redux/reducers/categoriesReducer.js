import { GET_CATEGORIES } from '../actions';

const INITIAL_STATE = {
  categories: [],
};

function categoriesReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
  case GET_CATEGORIES:
    return {
      ...state,
      categories: action.categories,
    };
  default:
    return state;
  }
}

export default categoriesReducer;
