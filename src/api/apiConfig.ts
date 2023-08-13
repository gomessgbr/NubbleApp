import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://127.0.0.1:3333/',
  headers: {
    Authorization:
      'Bearer Mg.IrhzZsGvwOs_wN4Y0dES0NtyNL-FHHbS-P7-yggvu6PV17wba2-HNL1me969',
  },
});
