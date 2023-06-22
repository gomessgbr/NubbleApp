import {NativeStackScreenProps} from '@react-navigation/native-stack';
import React from 'react';
import {Button} from '../../../components/Button/Button';

import {Controller, useForm} from 'react-hook-form';
import {PasswordInput} from '../../../components/PasswordInput/PasswordInput';
import {Screen} from '../../../components/Screen/Screen';
import {Text} from '../../../components/Text/Text';
import {TextInput} from '../../../components/TextInput/TextInput';
import {useResetNavigationSuccess} from '../../../hooks/useResetNavigationSuccess';
import {RootStackParamList} from '../../../routes/Routes';

type SignUpFormType = {
  username: string;
  fullname: string;
  email: string;
  password: string;
};

type ScreenProps = NativeStackScreenProps<RootStackParamList, 'SignUpScreen'>;

export function SignUpScreen({navigation}: ScreenProps) {
  const {reset} = useResetNavigationSuccess();
  const {handleSubmit, control, formState} = useForm<SignUpFormType>({
    defaultValues: {
      username: '',
      fullname: '',
      email: '',
      password: '',
    },
    mode: 'onChange',
  });
  function submitForm(formValue: SignUpFormType) {
    console.log(formValue);
    // reset({
    //   title: 'Sua Conta foi Criada com Sucesso',
    //   description: 'Agora é só fazer login na nossa plataforma',
    //   icon: {
    //     name: 'checkRound',
    //     color: 'success',
    //   },
    // });
  }
  return (
    <Screen canGoBack scrollable>
      <Text preset="headingLarge" mb="s32">
        Criar uma conta
      </Text>
      <Controller
        control={control}
        name="username"
        rules={{required: 'Usuário é obrigatório'}}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Seu username"
            placeholder="@"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="fullname"
        rules={{required: 'Nome obrigatório'}}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Nome Completo"
            placeholder="Digite seu nome completo"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="email"
        rules={{required: 'Email obrigatório'}}
        render={({field, fieldState}) => (
          <TextInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="E-mail"
            placeholder="Digite seu e-mail"
            boxProps={{mb: 's20'}}
          />
        )}
      />

      <Controller
        control={control}
        name="password"
        rules={{required: 'Senha obrigatório'}}
        render={({field, fieldState}) => (
          <PasswordInput
            value={field.value}
            onChangeText={field.onChange}
            errorMessage={fieldState.error?.message}
            label="Senha"
            secureTextEntry
            placeholder="Digite sua senha"
            boxProps={{mb: 's48'}}
          />
        )}
      />

      <Button
        disabled={!formState.isValid}
        onPress={handleSubmit(submitForm)}
        title="Criar uma conta"
      />
    </Screen>
  );
}
