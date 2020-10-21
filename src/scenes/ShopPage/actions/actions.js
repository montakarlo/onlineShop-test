import { FETCH_ITEMS, ADD_TO_FAVOURITE } from './actionTypes';

export const fetchItems = () => (
  {
    type: FETCH_ITEMS,
  }
);

export const addToFavourite = (payload) => (
  {
    type: ADD_TO_FAVOURITE,
    payload: payload
  }
);
