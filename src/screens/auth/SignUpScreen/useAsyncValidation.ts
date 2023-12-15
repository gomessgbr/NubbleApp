import {useAuthIsUsernameAvailable} from '@domain';
import {UseFormGetFieldState, UseFormWatch} from 'react-hook-form';

import {SignUpSchema} from './signUpSchema';

interface Props {
  watch: UseFormWatch<SignUpSchema>;
  getFieldState: UseFormGetFieldState<SignUpSchema>;
}
export function useAsyncValidation({watch, getFieldState}: Props) {
  const username = watch('username');
  const usernameState = getFieldState('username');
  const usernameIsValid = !usernameState.invalid && usernameState.isDirty;
  const usernameQuery = useAuthIsUsernameAvailable({
    username,
    enabled: usernameIsValid,
  });

  return {
    errorMessage: usernameQuery.isUnavailable
      ? 'username indisponível '
      : undefined,
    notReady: usernameQuery.isFetching || usernameQuery.isUnavailable,
    isFetching: usernameQuery.isFetching,
  };
}
