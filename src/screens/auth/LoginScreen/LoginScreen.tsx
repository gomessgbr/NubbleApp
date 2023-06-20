import React from 'react';
import {SafeAreaView, View} from 'react-native';
import {Box} from '../../../components/Box/Box';
import {Button} from '../../../components/Button/Button';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';

export function LoginScreen() {
  return (
    <SafeAreaView>
      <View style={{paddingHorizontal: 24}}>
        <Text marginBottom="s8" preset="headingLarge">
          Olá
        </Text>
        <Text preset="paragraphLarge" mb="s40">
          Digite seu e-mail e senha para entrar
        </Text>

        <Box mb="s20">
          <TextInput
            errorMessage="mensagem de error"
            label="E-mail"
            placeholder="Digite seu e-mail"
          />
        </Box>
        <Box>
          <TextInput label="Senha" placeholder="Digite sua senha" />
        </Box>

        <Text color="primary" preset="paragraphSmall" bold mt="s10">
          Esqueci minha senha
        </Text>

        <Button marginTop="s48" title="Entrar" />
        <Button preset="outline" marginTop="s12" title="Criar uma conta" />
      </View>
    </SafeAreaView>
  );
}
