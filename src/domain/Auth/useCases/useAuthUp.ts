import {MutationOptions} from '@infra';
import {useMutation} from '@tanstack/react-query';

import {authService} from '../authService';
import {SignUpData} from '../authTypes';

export function useAuthSignUp(options?: MutationOptions<void>) {
  const mutation = useMutation<void, Error, SignUpData>({
    mutationFn: data => authService.signUp(data),
    retry: false,
    onSuccess: () => {
      if (options?.onSuccess) {
        options.onSuccess();
      }
    },
    onError: error => {
      if (options?.onError) {
        options.onError(error.message);
      }
    },
  });

  function signUp(signUpData: SignUpData) {
    mutation.mutate(signUpData);
  }

  return {
    isLoading: mutation.isLoading,
    signUp,
  };
}
