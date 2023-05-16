import { styled } from 'nativewind';
import React, { useContext } from 'react';
import { View, Image } from 'react-native';

import Button from '../components/Button';
import AuthForm from '../components/AuthForm';
import { Context as AuthContext } from '../context/AuthContext';

const StyledButton = styled(Button);
const StyledView = styled(View);
const StyledAuthForm = styled(AuthForm);
const StyledImage = styled(Image);

const casaLogo = require('../assets/casaLogo.png');
const rfgLogo = require('../assets/rfgLogo.png');

const LoginScreen = ({ navigation }) => {
  const { signin } = useContext(AuthContext);
  //const email = 'volunteer1@example.com';
  //const password = '12345678';
  return (
    <StyledView className="justify-between items-center gap-3 flex-1 bg-[#345073]">
      <StyledView className="flex h-1/3 w-screen items-center">
        <StyledImage className="w-20 h-20 mt-40" source={casaLogo} />
      </StyledView>
      <StyledView className="justify-start items-center gap-4 flex h-1/3 w-screen bg-[#345073] pb-20">
        <StyledAuthForm
          className="flex text-white border-white border border-2 border-rounded rounded-3xl w-[300] h-10"
          submitButtonText="Log in"
          onSubmit={signin}
        />
      </StyledView>
      <StyledView className="flex h-1/3 w-screen items-center">
        <StyledImage className="w-65 h-auto pb-20 z-1" source={rfgLogo} />
      </StyledView>
    </StyledView>
  );
};

export default LoginScreen;
