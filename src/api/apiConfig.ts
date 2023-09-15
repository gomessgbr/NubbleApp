import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.obPIRJlPw2wEsqbXbwaGby8O-fOZszQpAkSBbZCu7biqbwCkIaG4csdXISDk',
  },
});
