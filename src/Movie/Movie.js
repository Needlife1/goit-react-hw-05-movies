import { api } from 'Api/Api';

const KEY = 'api_key=8debd3241aced94fddceeaeecb834be8';

const getMovie = async arg => {
  const data = api.get(`${arg}&${KEY}`);
  return data;
};

export { getMovie };
