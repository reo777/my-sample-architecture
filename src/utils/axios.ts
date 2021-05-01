import axios, { AxiosInstance } from 'axios';

export const axiosInstance = (): AxiosInstance => {
  const request = axios.create({
    baseURL: process.env.APP_API_HOST || '',
  });
  return request;
};
