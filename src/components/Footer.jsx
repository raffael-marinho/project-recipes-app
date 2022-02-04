import React from 'react';
import { useHistory } from 'react-router-dom';
import '../css/footer.css';
import drinkIcon from '../images/drinkIcon.svg';
import exploreIcon from '../images/exploreIcon.svg';
import mealIcon from '../images/mealIcon.svg';
import { Sfooter } from '../styles';

function Footer() {
  const history = useHistory();
  return (
    <Sfooter data-testid="footer">
      <input
        type="image"
        data-testid="drinks-bottom-btn"
        onClick={ () => history.push('/drinks') }
        src={ drinkIcon }
        alt="Ícone de Bebidas"
      />
      <input
        type="image"
        data-testid="explore-bottom-btn"
        onClick={ () => history.push('/explore') }
        src={ exploreIcon }
        alt="Ícone de Explorar"
      />

      <input
        type="image"
        data-testid="food-bottom-btn"
        onClick={ () => history.push('/foods') }
        src={ mealIcon }
        alt="Ícone de Comidas"
      />
    </Sfooter>
  );
}

export default Footer;
