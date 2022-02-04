import { combineReducers } from 'redux';
import recipesReducer from './recipesReducer';
import categoriesReducer from './categoriesReducer';

const rootReducer = combineReducers({ recipesReducer, categoriesReducer });

export default rootReducer;
