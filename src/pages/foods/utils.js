export default function saveLocalStor(recipe) {
  const save = localStorage.getItem('favoriteRecipes') || '[]';
  const array = JSON.parse(save);
  array.push(recipe);
  localStorage.setItem('favoriteRecipes', JSON.stringify(array));
}
export function removeLocalStor(id) {
  const remove = localStorage.getItem('favoriteRecipes');
  if (remove) {
    let array = JSON.parse(remove);
    array = array.filter((arr) => arr.id !== id);
    localStorage.setItem('favoriteRecipes', JSON.stringify(array));
  }
}
// [{ id, type, nationality, category, alcoholicOrNot, name, image }]
export function salvaInProgress(id, type) {
  let array = localStorage.getItem('inProgressRecipes') || '{}';
  array = JSON.parse(array);
  if (type === 'food') {
    array.meals = { ...(array?.meals || {}) };
    array.meals[id] = [];
  } else {
    array.cocktails = { ...(array?.cocktails || {}) };
    array.cocktails[id] = [];
  }
  localStorage.setItem('inProgressRecipes', JSON.stringify(array));
}
