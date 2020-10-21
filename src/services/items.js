import axios from 'axios';

const api = axios.create({
  baseURL: 'https://my-json-server.typicode.com/aero-frontend/test-task/',
});

export const fetchGoods = async () => {
  const response = await api
    .get('PRODUCTS_SUCCESS')
    .then(async (res) => ({
      error: false,
      data: res.data,
    }))
    .catch(() => ({
      error: true,
      data: null,
    }));
  return response;
};

export const addToFavourite = async (id) => {
  const response = await api
    .get('FAVORITE_SUCCESS')
    .then(async (res) => ({
      error: false,
      data: res.data,
    }))
    .catch(() => ({
      error: true,
      data: null,
    }));
  return response;
};
