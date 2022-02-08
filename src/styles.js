import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const MainLogin = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
  height: 100vh;
  background-color: #F5DEB3;
  `;

export const Welcome = styled.p`
  font-family: 'Merriweather'; 
  serif;
  text-transform: uppercase
  width: 10vw;
  margin: 0px auto 0px auto;
  color: #000000;
  text-align: center;
  font-size: 25px;
  border-radius: 18px 18px 0 0;
`;

export const CodeAndCooking = styled.h1`
  font-family: 'Dancing Script'; 
  cursive;
  margin: 7px;
  margin-top: 0px;
  color: #e3883b;
  text-align: center;
  border-radius: 18px;
  padding: 5px;
  padding-top: 0px;
`;

export const Ursinho = styled.img`
  width: 32vh;
  border-radius: 50%;
  margin: 15px;
`;

export const Form = styled.form`
  max-Width: 80%;
  input {
    display: block;
    margin: 10px auto;
    max-width: 100%;
    width: 60vw;
    height: 10vw;
    max-height: 35px;
    border-radius: 8px;
    border: 1px solid #333;
    padding: 5px;
  }
  button {
    display: block;
    margin: 1px auto;
    width: 70%;
    border-radius: 8px;
  }
`;

export const HeaderDiv = styled.header`
  font-family: 'Merriweather'; 
  serif;
  background-color: #DEB887;
  top: 0px;
  display: flex;
  justify-content: space-around;
  padding: 1.5vh;
  position: fixed;
  height: 8.5vh;
  width: 100%;
  text-align: center;
  h1 {
    height: 5vh;
    font-size: 5vh;
  }
  input {
    height: 6vh;
    width: 6vh;
    padding: 5px 5px 5px 8px;
    background-color: #F0F8FF;
    border-radius: 50%;
  }
  input.profile-btn-header{
    padding: 5px;
  }
`;

export const Sfooter = styled.footer`
background-color: #DEB887;
bottom: 0;
display: flex;
justify-content: space-around;
padding: 1.5vh;
position: fixed;
width: 100%;
input {
  height: 6vh;
  width: 7vh;
}
`;

export const SearchBarDiv = styled.div`
font-family: 'Merriweather'; 
serif;
display: flex;
flex-direction: column;
padding-top: 10vh;
font-size: 2.5vh;
text-align: center;
align-items: center;
`;

export const SearchBarText = styled.input`
border-radius:12px;
background-color: aliceblue;
padding: 1vh;
height: 5vh;
width: 70vw;
`;

export const SearchBarLabel = styled.div`
margin: 1vh;
display: inline-block;
width: 100vw;
label {
  vertical-align: middle;
}
label input {
  margin: 1vh;
  height: 3vh;
  width: 3vw;
`;

export const SearchButton = styled.button`
background-color: #d9edf1;
color: black;
border-radius:12px;
height: 4vh;
width: 50vw;
`;

export const SRecipesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  padding-bottom: 10vh;
`;

export const RecipeCard = styled.div`
  margin: 10px;
  border-radius: 5%;
  box-shadow: 0px 20px 50px #D9DBDF;
  img{
    width: 150px;
    margin: 5px 5px;
  }
  p{
    margin: 8px auto;
    max-width: 160px;
    text-align: center;
  }
`;

export const SFiltersBtn = styled.div`
  padding-top: 10vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

export const FilterBtn = styled.button`
  margin: 1vw;
  padding: 5px;
  width: 30vw;
  box-shadow: 0px 10px 20px #D9DBDF;
  border: 1px grey;
  border-radius: 12%;
`;

export const SMain = styled.main`
  display: flex;
  flex-direction: column;
  padding-top: 10vh;
  align-items: center;
  button{
    margin: 1vw;
    padding: 5px;
    width: 30vw;
    border: 1px solid grey;
    box-shadow: 0px 10px 20px #D9DBDF;
    border-radius: 10%;
  }
`;
