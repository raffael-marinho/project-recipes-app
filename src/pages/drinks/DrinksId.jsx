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
  pageDetails,
} from '../../styles';
import { carregabebidas } from '../../services/api';

function DrinksId() {
  const [guardaApi, setGuardaApi] = useState({});

  const { id } = useParams();

  async function carregaEffect() {
    const loading = await carregabebidas(id);
    setGuardaApi(loading);
  }

  useEffect(() => {
    carregaEffect();
  }, []);

  return (
    <pageDetails>
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
                  drink[1]
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

export default DrinksId;

// import React from 'react';

// function DrinksId() {
//   return (
//     <>
//     </>
//   );
// }

// export default DrinksId;
