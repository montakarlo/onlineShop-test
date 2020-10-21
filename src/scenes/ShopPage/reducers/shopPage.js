/* eslint-disable no-fallthrough */
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCEDED,
  ADD_TO_FAVOURITE,
  ADD_TO_FAVOURITE_SUCCEDED
} from '../actions/actionTypes';

const initialState = {
  items: [],
}

const shopPage = (state = initialState, { type, payload }) => {

  switch(type) {
    case FETCH_ITEMS: {
      return {
        items: payload
      }
    }
    case FETCH_ITEMS_SUCCEDED: {
      return {
        items: payload
      }
    }
    case ADD_TO_FAVOURITE: {
      return state;
    }
    case ADD_TO_FAVOURITE_SUCCEDED: {
      const items = [...state.items]
      items.forEach((item, index) => {
        if (item.id === payload.id) {
          items[index].inFav = payload.inFav;
        }
      })
      return {
        items: items
      }
    }
    default:
      return state;
  }
};

export default shopPage;