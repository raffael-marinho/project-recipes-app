import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import { RecipeCard } from '../styles';

function FavRecipeCard({ recipe, index }) {
  const history = useHistory();

  return recipe.type === 'food' ? (
    <RecipeCard key={ index }>
      <img
        src={ recipe.image }
        alt="foto da receita"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => history.push(`/foods/${recipe.id}`) }
        aria-hidden="true"
      />
      <p
        data-testid={ `${index}-horizontal-name` }
        onClick={ () => history.push(`/foods/${recipe.id}`) }
        aria-hidden="true"
      >
        {recipe.name}
      </p>
      <p data-testid={ `${index}-horizontal-top-text` }>
        {`${recipe.nationality} - ${recipe.category}`}
      </p>
      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="botão de compartilhar"
      />
      <input
        type="image"
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        alt="botão de favoritar"
      />
    </RecipeCard>
  ) : (
    <RecipeCard key={ index }>
      <img
        src={ recipe.image }
        alt="foto da receita"
        data-testid={ `${index}-horizontal-image` }
        onClick={ () => history.push(`/drinks/${recipe.id}`) }
        aria-hidden="true"
      />
      <p
        data-testid={ `${index}-horizontal-name` }
        onClick={ () => history.push(`/drinks/${recipe.id}`) }
        aria-hidden="true"
      >
        {recipe.name}
      </p>
      <p data-testid={ `${index}-horizontal-top-text` }>{recipe.alcoholicOrNot}</p>
      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="botão de compartilhar"
      />
      <input
        type="image"
        data-testid={ `${index}-horizontal-favorite-btn` }
        src={ blackHeartIcon }
        alt="botão de favoritar"
      />
    </RecipeCard>
  );
}

FavRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    nationality: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default FavRecipeCard;
