import {useContext} from 'react';

// import {create} from 'zustand';
// import {persist} from 'zustand/middleware';

// import {storage} from '../storage';

import {AuthCredentialsService} from './authCredentialsTypes';
import {AuthCredentialsContext} from './Providers/AuthCredentialsProvider';

export function useAuthCredentials(): AuthCredentialsService {
  const context = useContext(AuthCredentialsContext);
  if (!context) {
    throw new Error(
      'useAuthCredentials must be used within a AuthCredentialsProvider',
    );
  }
  return context;
  // return useAuthCredentialsZustand();
}

// const useAuthCredentialsZustand = create<AuthCredentialsService>()(
//   persist(
//     set => ({
//       authCredentials: null,
//       isLoading: false,
//       saveCredentials: async ac => set({authCredentials: ac}),
//       removeCredentials: async () => set({authCredentials: null}),
//     }),
//     {
//       name: '@Auth',
//       storage: storage,
//     },
//   ),
// );
