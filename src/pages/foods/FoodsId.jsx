import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
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
} from '../../styles';
import { carregaComidas } from '../../services/api';

function FoodsId() {
  const [guardaApi, setGuardaApi] = useState({});

  const { id } = useParams();

  async function carregaEffect() {
    const loading = await carregaComidas(id);
    setGuardaApi(loading);
  }

  useEffect(() => {
    carregaEffect();
  }, []);

  return (
    <pageDetails>
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
            src="/share-icon.svg"
            alt=""
            data-testid="share-btn"
          />

          <DetailsBtnIcon
            src="/fav-icon.svg"
            alt=""
            data-testid="favorite-btn"
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
                  meal[1]
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
        <div>
          <card data-testid="${index}-recomendation-card" />
          <card data-testid="${index}-recomendation-card" />
        </div>
      </div>
      <DetailsBoxBtnStart>
        <DetailsBtnStart
          type="button"
          data-testid="start-recipe-btn"
        >
          start recipe

        </DetailsBtnStart>
      </DetailsBoxBtnStart>
    </pageDetails>
  );
}

export default FoodsId;
