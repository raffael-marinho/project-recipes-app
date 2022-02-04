export async function fetchMealsAPI() {
  const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
  const res = await fetch(url);
  const data = await res.json();
  return data.meals;
}

export async function fetchCocktailAPI() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';
  const res = await fetch(url);
  const data = await res.json();
  return data.drinks;
}

export async function fetchCategoriesMeals() {
  const url = 'https://www.themealdb.com/api/json/v1/1/list.php?c=list';
  const res = await fetch(url);
  const data = await res.json();
  return data.meals;
}

export async function fetchCategoriesDrinks() {
  const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
  const res = await fetch(url);
  const data = await res.json();
  return data.drinks;
}

export async function fetchCategoryMeal(category) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals;
}

export async function fetchCategoryDrink(category) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.drinks;
}

export async function fetchIngredientMeal(ingredient) {
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals;
}

export async function fetchNameMeal(name) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals;
}

export async function fetchFirstLetterMeal(letter) {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${letter}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.meals;
}

export async function fetchIngredientDrink(ingrediente) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingrediente}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.drinks;
}

export async function fetchNameDrink(nome) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${nome}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.drinks;
}

export async function fetchFirstLetterDrink(letter) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${letter}`;
  const res = await fetch(url);
  const data = await res.json();
  return data.drinks;
}
