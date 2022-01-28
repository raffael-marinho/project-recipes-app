import React from 'react';
import { useHistory } from 'react-router-dom';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';

function Footer() {
  const history = useHistory();
  console.log(history);
  return (
    <footer data-testid="footer">
      <input
        type="image"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/bebidas') }
        src={ drinkIcon }
        alt="Ícone de Bebidas"
      />
      <input
        type="image"
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explorar') }
        src={ exploreIcon }
        alt="Ícone de Explorar"
      />

      <input
        type="image"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/comidas') }
        src={ mealIcon }
        alt="Ícone de Comidas"
      />
    </footer>
  );
}

export default Footer;
