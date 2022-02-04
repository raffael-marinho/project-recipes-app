import React, { useContext } from 'react';
import { SearchBarDiv, SearchBarText, SearchBarLabel, SearchButton } from '../styles';
import Context from '../context/Context';

function SearchBar() {
  const {
    searchByText,
    setSearchByText,
    handleFilterSearch,
    setRadioButton,
  } = useContext(Context);

  return (
    <SearchBarDiv>
      <SearchBarText
        data-testid="search-input"
        placeholder="Search Recipe"
        type="text"
        testid="search-input"
        value={ searchByText }
        onChange={ ({ target: { value } }) => setSearchByText(value) }
      />
      <SearchBarLabel>
        <label htmlFor="ingredients">
          <input
            id="ingredients"
            data-testid="ingredient-search-radio"
            type="radio"
            value="ingredients"
            name="radio"
            onChange={ ({ target: { value } }) => setRadioButton(value) }
          />
          Ingredient
        </label>
        <label htmlFor="name">
          <input
            id="name"
            data-testid="name-search-radio"
            type="radio"
            value="name"
            name="radio"
            onChange={ ({ target: { value } }) => setRadioButton(value) }
          />
          Name
        </label>
        <label htmlFor="firstLetter">
          <input
            id="firstLetter"
            data-testid="first-letter-search-radio"
            type="radio"
            value="firstLetter"
            name="radio"
            onChange={ ({ target: { value } }) => setRadioButton(value) }
          />
          First Letter
        </label>
      </SearchBarLabel>
      <SearchButton
        type="submit"
        data-testid="exec-search-btn"
        onClick={ handleFilterSearch }
      >
        Search
      </SearchButton>
    </SearchBarDiv>
  );
}

export default SearchBar;
