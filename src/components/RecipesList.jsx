import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { requestMeals } from '../Redux/actions';
import { RecipeCard, SRecipesList } from '../styles';

function RecipesList() {
  const dispatch = useDispatch();
  const { recipes } = useSelector((state) => state.recipesReducer);
  console.log(recipes);

  const amountRecipes = 12;

  useEffect(() => {
    dispatch(requestMeals());
  }, [dispatch]);

  return (
    <SRecipesList>
      {recipes
        .map((recipe, index) => (
          index < amountRecipes && (
            <RecipeCard key={ index }>
              <img
                src={ recipe.strMealThumb }
                alt={ `receita de ${recipe.strMeal}` }
              />
              <p>{recipe.strMeal}</p>
            </RecipeCard>)

        ))}
    </SRecipesList>
  );
}

export default RecipesList;
