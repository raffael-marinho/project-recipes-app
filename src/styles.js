import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
`;

export const MainLogin = styled.div`
  height: 640px;
  padding: 110px 0;
  background-color: #f5deb3;
`;

export const Welcome = styled.p`
  background-color: #f4a460;
  width: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding-top: 40px;
  height: 100vh;
  background-color: #f5deb3;
`;

export const CodeAndCooking = styled.h1`
  font-family: 'Dancing Script'; 
  cursive;
  margin: 7px;
  margin-top: 0px;
  color: #e3883b;
  text-align: center;
  background-color: #f4a460;
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
  margin: 40% auto;
  max-width: 80%;
  height: 150px;
  max-width: 80%;
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
  background-color: #deb887;
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
  border-radius: 12px;
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
  border-radius: 12px;
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
  box-shadow: 0px 20px 50px #d9dbdf;
  img {
    width: 150px;
    margin: 5px 5px;
  }
  p {
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
  box-shadow: 0px 10px 20px #d9dbdf;
  border: 1px grey;
  border-radius: 12%;
`;
export const PageDetails = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DetailsImg = styled.img`
  height: 156px;
  width: 360px;
`;

export const DetailsBoxBtn = styled.div`
  display: flex;
  flex-direction: row;
`;

export const DetailsBtn = styled.div`
  display: flex;
  flex-direction: row-reverse;
  width: 200px;
`;

export const DetailsBtnIcon = styled.img`
  height: 26px;
  width: 26px;
`;

export const DetailsCategory = styled.h4`
  color: #f5deb3;
`;
export const DetailsIngredients = styled.div`
  background-color: #f5deb3;
`;
export const DetailsInstruçao = styled.div`
  align-items: center;
  background-color: #f5deb3;
  justify-content: center;
`;
export const DetailsBoxVideo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Recomendaçao = styled.div`
  display: flex;
  overflow: scroll;
`;
export const DetailsVideo = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const DetailsBoxBtnStart = styled.div`
  display: flex;
  justify-content: center;
`;
export const DetailsBtnStart = styled.button`
  background-color: #f4a460;
  position: fixed;
  bottom: 0px;
  height: 76px;
  width: 339px;
`;
