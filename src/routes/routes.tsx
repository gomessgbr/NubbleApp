import React from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {IconProp} from '@components';

import {AppStack} from './AppStack';
import {AuthStack} from './AuthStack';

export type RootStackParamList = {
  LoginScreen: undefined;
  SignUpScreen: undefined;
  SuccessScreen: {
    title: string;
    description: string;
    icon: Pick<IconProp, 'name' | 'color'>;
  };
  ForgotPasswordScreen: undefined;
};

export function Router() {
  const authenticated = false;
  return (
    <NavigationContainer>
      {authenticated ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
