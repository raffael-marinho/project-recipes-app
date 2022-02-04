export async function carregabebidas(id) {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`;
  const resposta = await fetch(url);
  const json = await resposta.json();
  console.log(json);
  return json;
}

export async function carregaComidas(id) {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
  const resposta = await fetch(url);
  const json = await resposta.json();
  console.log(json);
  return json;
}
