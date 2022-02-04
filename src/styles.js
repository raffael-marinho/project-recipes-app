import styled from 'styled-components';

export const MainLogin = styled.div`
  height: 640px;
  padding: 110px 0;
  background-color: #f5deb3;
`;

export const Welcome = styled.p`
  background-color: #f4a460;
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
  background-color: #f4a460;
  border-radius: 18px;
  padding: 5px;
  padding-top: 0px;
`;

export const Form = styled.form`
  margin: 40% auto;
  max-width: 80%;
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
  background-color: #f4a460;
  input.profile-btn-header {
    padding: 5px 2px 2px 5px;
    margin: 2px auto 2px 5px;
    background-color: #f5deb3;
    border-radius: 50%;
  }
  input.search-btn-header {
    padding: 5px 2px 2px 5px;
    margin: 2px 5px 2px auto;
    background-color: #f5deb3;
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

export const pageDetails = styled.div`
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
  height: 76px;
  width: 339px;
`;
