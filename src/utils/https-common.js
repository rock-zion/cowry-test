import axios from 'axios';

export const HTTP = axios.create({
  baseURL: `${process.env.VUE_APP_BASE_URL}`,
  headers: {
    Authorization: `Client-ID ${process.env.VUE_APP_ACCESS_KEY}`,
  },
});
