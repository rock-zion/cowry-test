import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
  headers: {
    Authorization: `Bearer ${process.env.VUE_APP_ACCESS_KEY}`,
  },
});
