import React from 'react';
import LoginForm from '../../components/LoginForm';
import { Welcome, CodeAndCooking, MainLogin, Ursinho } from '../../styles';

function Login() {
  return (
    <MainLogin>
      <div>
        <Welcome>
          <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&display=swap" rel="stylesheet" />
          WELCOME TO
        </Welcome>
        <CodeAndCooking>
          <link href="https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&display=swap" rel="stylesheet" />
          Code and Cooking
        </CodeAndCooking>
      </div>
      <Ursinho
        src="giphy.gif"
        alt="Ursinho cozinhando"
      />
      <LoginForm />
    </MainLogin>
  );
}

export default Login;
