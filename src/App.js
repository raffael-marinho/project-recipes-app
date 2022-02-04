import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/user/Login';
import Foods from './pages/foods/Foods';
import FoodsId from './pages/foods/FoodsId';
import FoodsIdInProgress from './pages/foods/FoodsIdInProgress';
import Drinks from './pages/drinks/Drinks';
import DrinksId from './pages/drinks/DrinksId';
import DrinksIdInProgress from './pages/drinks/DrinksIdInProgress';
import Explore from './pages/explore/Explore';
import ExploreFoods from './pages/explore/ExploreFoods';
import ExploreFoodsIngredients from './pages/explore/ExploreFoodsIngredients';
import ExploreFoodsNacionalities from './pages/explore/ExploreFoodsNacionalities';
import ExploreDrinks from './pages/explore/ExploreDrinks';
import ExploreDrinksIngredients from './pages/explore/ExploreDrinksIngredients';
import Profile from './pages/user/Profile';
import DoneRecipes from './pages/user/DoneRecipes';
import FavoriteRecipes from './pages/user/FavoriteRecipes';
import 'bootstrap/dist/css/bootstrap.min.css';
import { GlobalStyle } from './styles';
import HeaderContext from './context/headerProvider';

function App() {
  return (
    <BrowserRouter>
      <HeaderContext>
        <GlobalStyle />
        <Switch>
          <Route
            exact
            path="/"
            component={ Login }
          />
          <Route
            exact
            path="/foods"
            component={ Foods }
          />
          <Route
            exact
            path="/drinks"
            component={ Drinks }
          />
          <Route
            exact
            path="/foods/{id}"
            component={ FoodsId }
          />
          <Route
            exact
            path="/drinks/{id}"
            component={ DrinksId }
          />
          <Route
            exact
            path="/foods/{id}/in-progress"
            component={ FoodsIdInProgress }
          />
          <Route
            exact
            path="/drinks/{id}/in-progress"
            component={ DrinksIdInProgress }
          />
          <Route
            exact
            path="/explore"
            component={ Explore }
          />
          <Route
            exact
            path="/explore/foods"
            component={ ExploreFoods }
          />
          <Route
            exact
            path="/explore/drinks"
            component={ ExploreDrinks }
          />
          <Route
            exact
            path="/explore/foods/ingredients"
            component={ ExploreFoodsIngredients }
          />
          <Route
            exact
            path="/explore/drinks/ingredients"
            component={ ExploreDrinksIngredients }
          />
          <Route
            exact
            path="/explore/foods/nationalities"
            component={ ExploreFoodsNacionalities }
          />
          <Route
            exact
            path="/profile"
            component={ Profile }
          />
          <Route
            exact
            path="/done-recipes"
            component={ DoneRecipes }
          />
          <Route
            exact
            path="/favorite-recipes"
            component={ FavoriteRecipes }
          />
        </Switch>
      </HeaderContext>
    </BrowserRouter>
  );
}

export default App;
