import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import shareIcon from '../images/shareIcon.svg';
import { RecipeCard } from '../styles';

function DoneRecipeCard({ recipe, index }) {
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
      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
      {recipe.tags
        .map((tag, i) => (
          <p key={ i } data-testid={ `${index}-${tag}-horizontal-tag` }>{tag}</p>
        ))}
      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="botão de compartilhar"
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
      <p>{recipe.nationality}</p>
      <p data-testid={ `${index}-horizontal-done-date` }>{recipe.doneDate}</p>
      <input
        type="image"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareIcon }
        alt="botão de compartilhar"
      />
    </RecipeCard>
  );
}

DoneRecipeCard.propTypes = {
  recipe: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    type: PropTypes.string,
    image: PropTypes.string,
    category: PropTypes.string,
    nationality: PropTypes.string,
    alcoholicOrNot: PropTypes.string,
    doneDate: PropTypes.string,
    tags: PropTypes.arrayOf(PropTypes.string),
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default DoneRecipeCard;
