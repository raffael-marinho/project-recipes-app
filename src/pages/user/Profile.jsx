import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { SMain } from '../../styles';

function Profile() {
  const history = useHistory();
  const { email } = JSON.parse(localStorage.getItem('user'));

  const logoutClick = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('mealsToken');
    localStorage.removeItem('cocktailsToken');
    localStorage.removeItem('doneRecipes');
    localStorage.removeItem('favoriteRecipes');
    localStorage.removeItem('inProgressRecipes');
    history.push('/');
  };

  return (
    <>
      <Header titleProps="Profile" />
      <SMain>
        <span data-testid="profile-email">{email}</span>

        <button
          type="button"
          data-testid="profile-done-btn"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>

        <button
          data-testid="profile-favorite-btn"
          type="button"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>

        <button
          data-testid="profile-logout-btn"
          type="button"
          onClick={ logoutClick }
        >
          Logout
        </button>
      </SMain>
      <Footer />
    </>
  );
}

export default Profile;
