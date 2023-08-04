import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer MQ.OHFG02jGD6HI9vH-cvDPXzqyJP6uVmoiKAxd2Krwogg89wlMzuvOx2-awoWc',
  },
});
