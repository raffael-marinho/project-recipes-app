import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  DetailsBoxBtn,
  DetailsBoxBtnStart,
  DetailsBtn,
  DetailsBtnIcon,
  DetailsBtnStart,
  DetailsCategory,
  DetailsImg,
  DetailsIngredients,
  DetailsInstruçao,
  PageDetails,
  RecipeCard,
  Recomendaçao,
} from '../../styles';
import { carregabebidas, recomendacoesComidas } from '../../services/apiDetails';
import { favoriteDrink, startDrink } from '../../Redux/actions';
import shareIcon from '../../images/shareIcon.svg';
import favoriteWhiteIcon from '../../images/whiteHeartIcon.svg';
import favoriteBlackIcon from '../../images/blackHeartIcon.svg';

function DrinksId() {
  const [guardaApi, setGuardaApi] = useState({});
  const [sugestão, setSugestão] = useState({});
  const [linkCopied, setLinkCopied] = useState(false);
  const n6 = 6;
  const { id } = useParams();
  const history = useHistory();
  const s2 = 2000;

  const copied = async () => {
    await navigator.clipboard.writeText(window.location.href);
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), s2);
  };

  const Dispatch = useDispatch();

  const valueBtn = useSelector((state) => state.recipesReducer.recipes.find(
    (recipe) => recipe.idDrink === id,
  ));

  const started = () => {
    Dispatch(startDrink(id));
    history.push(`/drinks/${id}/in-progress`);
  };

  useEffect(() => {
    async function carSugestao() {
      const espera = await recomendacoesComidas(id);
      setSugestão(espera);
    }
    carSugestao();
  }, [id]);

  useEffect(() => {
    async function carregaEffect() {
      const loading = await carregabebidas(id);
      setGuardaApi(loading);
    }
    carregaEffect();
  }, [id]);

  return (
    <PageDetails>
      <div>
        <DetailsImg
          className="img"
          src={ guardaApi.drinks && guardaApi.drinks[0].strDrinkThumb }
          alt=""
          data-testid="recipe-photo"
        />
      </div>
      <DetailsBoxBtn>
        <div>
          <h2 data-testid="recipe-title">
            {guardaApi.drinks
              && guardaApi.drinks[0]
                .strDrink}

          </h2>
        </div>
        <DetailsBtn>
          <DetailsBtnIcon
            src={ shareIcon }
            alt=""
            data-testid="share-btn"
            onClick={ copied }
          />
          <div value={ linkCopied }>
            {linkCopied === true ? 'Link copied!' : ''}
          </div>
          <DetailsBtnIcon
            src={ valueBtn?.favorited === true
              ? favoriteWhiteIcon
              : favoriteBlackIcon }
            alt=""
            data-testid="favorite-btn"
            onClick={ () => Dispatch(favoriteDrink(id)) }
          />
        </DetailsBtn>
      </DetailsBoxBtn>
      <div>
        <DetailsCategory
          data-testid="recipe-category"
        >
          {guardaApi.drinks && guardaApi.drinks[0].strAlcoholic}
        </DetailsCategory>
      </div>
      <div>
        <h3>ingredientes</h3>
        <DetailsIngredients>
          {guardaApi.drinks && Object.entries(guardaApi.drinks[0])
            .filter((drink) => drink[0]
              .includes('strIngredient') && drink[1] !== null)
            .map((drink, index) => (
              <h4
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {
                  `${drink[1]} ${guardaApi.drinks[0][`strMeasure${index + 1}`]}`
                }
              </h4>))}
        </DetailsIngredients>
      </div>
      <div>
        <h3>instruçoes</h3>
        <DetailsInstruçao>
          <h4 data-testid="instructions">
            {guardaApi.drinks
              && guardaApi.drinks[0].strInstructions}

          </h4>
        </DetailsInstruçao>
      </div>
      <div>
        <h3>recomendados</h3>
        <Recomendaçao>
          {sugestão.meals && sugestão.meals.map((meal, index) => (
            <RecipeCard
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              onClick={ () => history.push(`/foods/${meal.idMeal}`) }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ meal.strMealThumb }
                alt={ `receita de ${meal.strMeal}` }
              />
              <p data-testid={ `${index}-recomendation-title` }>{meal.strMeal}</p>
            </RecipeCard>)).slice(0, n6)}
        </Recomendaçao>
      </div>
      <DetailsBoxBtnStart>
        <DetailsBtnStart
          type="button"
          data-testid="start-recipe-btn"
          onClick={ started }
        >
          {valueBtn?.started === true ? 'Continue Recipe' : 'start recipe'}

        </DetailsBtnStart>
      </DetailsBoxBtnStart>
    </PageDetails>
  );
}

export default DrinksId;
