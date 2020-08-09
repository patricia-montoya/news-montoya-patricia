import axios from 'axios';
const BASE_URL = 'https://api.canillitapp.com';

export const getLatestNews = (date) => {
  console.log(date);
  return axios.get(`${BASE_URL}/latest/${date}`);
};

export const getNewsByCategory = (categoryNumber) => {
  return axios.get(`${BASE_URL}/news/category/${categoryNumber}`);
};

export const getNewsByKeyword = (keyword) => {
  return axios.get(`${BASE_URL}/search/${keyword}`);
};
