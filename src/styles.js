import styled from 'styled-components';

export const MainLogin = styled.div`
  height: 640px;
  padding: 110px 0;
  background-color: #F5DEB3;
  `;

export const Welcome = styled.p`
  background-color: #F4A460;
  width: 200px;
  margin: 0px auto 0px auto;
  color: #000000;
  text-align: center;
  font-size: 30px;
  border-radius: 18px 18px 0 0;
`;

export const CodeAndCooking = styled.h1`
  margin: 7px;
  margin-top: 0px;
  color: #000000;
  text-align: center;
  background-color: #F4A460;
  border-radius: 18px;
  padding: 5px;
  padding-top: 0px;
`;

export const Form = styled.form`
  margin: 40% auto;
  max-Width: 80%;
  height: 150px;
  input {
    display: block;
    margin: 10px auto;
    max-width: 100%;
    height: 35px;
    border-radius: 8px;
    border: 1px solid #333;
  }
  button {
    display: block;
    margin: 1px auto;
    width: 74%;
    border-radius: 8px;
  }
`;

export const HeaderDiv = styled.div`
  padding: 11px;
  background-color: #F4A460;
  input.profile-btn-header {
    padding: 5px 2px 2px 5px;
    margin: 2px auto 2px 5px; 
    background-color: #F5DEB3;
    border-radius: 50%;
  }
  input.search-btn-header {
    padding: 5px 2px 2px 5px;
    margin: 2px 5px 2px auto; 
    background-color: #F5DEB3;
    border-radius: 50%;
  }
`;

export const HeaderTitle = styled.h1`
  display: inline-block;
  font-size: 20px;
  width: 50%;
  text-align: center;
  margin: 5px 40px;
`;

export const SRecipesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
    text-align: center;
  }
`;
