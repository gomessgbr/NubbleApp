import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Nw.p02BLcMHmwZRoL2R4BEOj4dYjatEU_wAMYwSWkf30dPd0aMAzVtZlB-DefWH',
  },
});
