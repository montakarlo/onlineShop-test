import { FETCH_ITEMS, ADD_TO_FAVOURITE, FETCH_FILTERED } from './actionTypes';

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

export const fetchFiltered = (payload) => (
  {
    type: FETCH_FILTERED,
    payload: payload
  }
);
