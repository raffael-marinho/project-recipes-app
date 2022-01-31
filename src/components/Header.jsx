import React, { useCallback, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { HeaderDiv, HeaderTitle } from '../styles';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';

function Header() {
  const [showSearch, setShowSearch] = useState(false);
  const [title, setTitle] = useState('Foods');

  const history = useHistory();
  const { pathname } = useLocation();

  const verifyLocation = useCallback(() => {
    if (pathname === '/foods'
    || pathname === '/drinks'
    || pathname === '/explore/foods/nationalities') {
      setShowSearch(true);
    }
    if (pathname === '/foods') {
      setTitle('Foods');
    } else if (pathname === '/drinks') {
      setTitle('Drinks');
    } else if (pathname === '/explore') {
      setTitle('Explore');
    } else if (pathname === '/explore/foods') {
      setTitle('Explore Foods');
    } else if (pathname === '/explore/drinks') {
      setTitle('Explore Drinks');
    } else if (pathname === '/explore/foods/ingredients'
    || pathname === '/explore/drinks/ingredients') {
      setTitle('Explore Ingredients');
    } else if (pathname === '/explore/foods/nationalities') {
      setTitle('Explore Nationalities');
    } else if (pathname === '/profile') {
      setTitle('Profile');
    } else if (pathname === '/done-recipes') {
      setTitle('Done Recipes');
    } else {
      setTitle('Favorite Recipes');
    }
  }, [pathname]);

  useEffect(() => {
    verifyLocation();
  }, [verifyLocation]);

  const ProfileClick = () => {
    history.push('/profile');
  };

  return (
    <HeaderDiv>
      <input
        className="profile-btn-header"
        type="image"
        data-testid="profile-top-btn"
        src={ profileIcon }
        alt="icone de perfil"
        onClick={ ProfileClick }
      />
      <HeaderTitle data-testid="page-title">{title}</HeaderTitle>
      {showSearch && (<input
        className="search-btn-header"
        type="image"
        data-testid="search-top-btn"
        src={ searchIcon }
        alt="icone de perfil"
      />)}
    </HeaderDiv>
  );
}

export default Header;
