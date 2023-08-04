import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer NQ.albHXJrxEPW85uKevW5S1qWNvA-CV53nr7-mBjRMt96dsDkSPo2_7pIOj0bf',
  },
});
