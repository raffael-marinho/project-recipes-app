import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { requestRecipes } from '../Redux/actions';
import { RecipeCard, SRecipesList } from '../styles';

function RecipesList() {
  const { pathname } = useLocation();
  const history = useHistory();
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipesReducer);

  const amountRecipes = 12;

  useEffect(() => {
    dispatch(requestRecipes(pathname));
  }, [dispatch, pathname]);

  return (
    <SRecipesList>
      {pathname === '/foods' ? (
        recipes
          .map((recipe, index) => (
            index < amountRecipes && (
              <RecipeCard
                key={ index }
                data-testid={ `${index}-recipe-card` }
                onClick={ () => history.push(`/foods/${recipe.idMeal}`) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strMealThumb }
                  alt={ `receita de ${recipe.strMeal}` }
                />
                <p data-testid={ `${index}-card-name` }>{recipe.strMeal}</p>
              </RecipeCard>)

          ))) : (
        recipes
          .map((recipe, index) => (
            index < amountRecipes && (
              <RecipeCard
                key={ index }
                data-testid={ `${index}-recipe-card` }
                onClick={ () => history.push(`/drinks/${recipe.idDrink}`) }
              >
                <img
                  data-testid={ `${index}-card-img` }
                  src={ recipe.strDrinkThumb }
                  alt={ `receita de ${recipe.strDrink}` }
                />
                <p data-testid={ `${index}-card-name` }>{recipe.strDrink}</p>
              </RecipeCard>)

          ))
      )}
    </SRecipesList>
  );
}

export default RecipesList;
