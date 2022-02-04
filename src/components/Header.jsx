import React, { useCallback, useEffect, useState, useContext } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import { propTypes } from 'react-bootstrap/esm/Image';
import { HeaderDiv } from '../styles';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import SearchBar from './Searchbar';
import Context from '../context/Context';

function Header({ titleProps }) {
  const [showSearch, setShowSearch] = useState(false);

  const {
    showSearchBar,
    handleSearchButton,
  } = useContext(Context);

  const history = useHistory();
  const { pathname } = useLocation();

  const verifyLocation = useCallback(() => {
    if (pathname === '/foods'
    || pathname === '/drinks'
    || pathname === '/explore/foods/nationalities') {
      setShowSearch(true);
    }
  }, [pathname]);

  useEffect(() => {
    verifyLocation();
  }, [verifyLocation]);

  const ProfileClick = () => {
    history.push('/profile');
  };

  return (
    <div>
      <HeaderDiv>
        <input
          className="profile-btn-header"
          type="image"
          data-testid="profile-top-btn"
          src={ profileIcon }
          alt="icone de perfil"
          onClick={ ProfileClick }
        />
        <h1 data-testid="page-title">{titleProps}</h1>
        {showSearch && (
          <input
            className="search-btn-header"
            type="image"
            data-testid="search-top-btn"
            src={ searchIcon }
            alt="icone de perfil"
            onClick={ handleSearchButton }
          />)}
      </HeaderDiv>
      {showSearchBar ? <SearchBar /> : null}
    </div>
  );
}

Header.defaultProps = {
  titleProps: 'Foods',
};

Header.propTypes = {
  titleProps: propTypes.string,
};

export default Header;
