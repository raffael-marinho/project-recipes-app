import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  DetailsBoxBtn,
  DetailsBoxBtnStart,
  DetailsBoxVideo,
  DetailsBtn,
  DetailsBtnIcon,
  DetailsBtnStart,
  DetailsCategory,
  DetailsImg,
  DetailsIngredients,
  DetailsInstruçao,
  DetailsVideo,
  PageDetails,
  RecipeCard,
  Recomendaçao,
} from '../../styles';
import { carregaComidas, recomendacoesBebidas } from '../../services/apiDetails';
import { favoriteFood, startFood } from '../../Redux/actions';
import shareIcon from '../../images/shareIcon.svg';
import favoriteWhiteIcon from '../../images/whiteHeartIcon.svg';
import favoriteBlackIcon from '../../images/blackHeartIcon.svg';

function FoodsId() {
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
    (recipe) => recipe.idMeal === id,
  ));

  const started = () => {
    Dispatch(startFood(id));
    history.push(`/foods/${id}/in-progress`);
  };

  useEffect(() => {
    async function carSugestao() {
      const espera = await recomendacoesBebidas(id);
      setSugestão(espera);
    }
    carSugestao();
  }, [id]);

  useEffect(() => {
    async function carregaEffect() {
      const loading = await carregaComidas(id);
      setGuardaApi(loading);
    }
    carregaEffect();
  }, [id]);

  return (
    <PageDetails>
      <div>
        <DetailsImg
          src={ guardaApi.meals && guardaApi.meals[0].strMealThumb }
          alt=""
          data-testid="recipe-photo"
        />
      </div>
      <DetailsBoxBtn>
        <div>
          <h2 data-testid="recipe-title">
            {guardaApi.meals
              && guardaApi.meals[0].strMeal}

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
            onClick={ () => Dispatch(favoriteFood(id)) }
          />
        </DetailsBtn>
      </DetailsBoxBtn>
      <div>
        <DetailsCategory
          data-testid="recipe-category"
        >
          {guardaApi.meals
            && guardaApi.meals[0].strCategory}
        </DetailsCategory>
      </div>
      <div>
        <h3>ingredientes</h3>
        <DetailsIngredients>
          {guardaApi.meals && Object.entries(guardaApi.meals[0])
            .filter((meal) => meal[0]
              .includes('strIngredient') && meal[1] !== null)
            .map((meal, index) => (
              <h4
                data-testid={ `${index}-ingredient-name-and-measure` }
                key={ index }
              >
                {
                  `${meal[1]} ${guardaApi.meals[0][`strMeasure${index + 1}`]}`
                }
              </h4>))}
        </DetailsIngredients>
      </div>
      <div>
        <h3>instruçoes</h3>
        <DetailsInstruçao>
          <h4 data-testid="instructions">
            {guardaApi.meals
              && guardaApi.meals[0].strInstructions}
          </h4>
        </DetailsInstruçao>
        <DetailsBoxVideo>
          <DetailsVideo
            title="video"
            data-testid="video"
            src={ guardaApi.meals && guardaApi.meals[0].strYoutube }
            allowFullScreen
          />
        </DetailsBoxVideo>
      </div>
      <div>
        <h3>recomendados</h3>
        <Recomendaçao>
          {sugestão.drinks && sugestão.drinks.map((drink, index) => (
            <RecipeCard
              key={ index }
              data-testid={ `${index}-recomendation-card` }
              onClick={ () => history.push(`/drinks/${drink.idDrink}`) }
            >
              <img
                data-testid={ `${index}-card-img` }
                src={ drink.strDrinkThumb }
                alt={ `receita de ${drink.strDrink}` }
              />
              <p data-testid={ `${index}-recomendation-title` }>{drink.strDrink}</p>
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

export default FoodsId;
