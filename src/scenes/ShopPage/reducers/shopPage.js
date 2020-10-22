/* eslint-disable no-fallthrough */
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCEEDED,
  ADD_TO_FAVOURITE_SUCCEEDED,
  FETCH_FILTERED,
  FETCH_FILTERED_SUCCEEDED,
  FETCH_ITEMS_FAILED,
  FETCH_FILTERED_FAILED,
} from '../actions/actionTypes';

const initialState = {
  items: [],
  loading: false,
};

const shopPage = (state = initialState, { type, payload }) => {
  switch (type) {
    case FETCH_ITEMS: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_ITEMS_SUCCEEDED: {
      return {
        ...state,
        items: payload,
        loading: false,
      };
    }
    case FETCH_ITEMS_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    case ADD_TO_FAVOURITE_SUCCEEDED: {
      const items = [...state.items];
      items.forEach((item, index) => {
        if (item.id === payload.id) {
          items[index].inFav = payload.inFav;
        }
      });
      return {
        ...state,
        items,
      };
    }
    case FETCH_FILTERED: {
      return {
        ...state,
        loading: true,
      };
    }
    case FETCH_FILTERED_SUCCEEDED: {
      return {
        ...state,
        items: payload,
        loading: false,
      };
    }
    case FETCH_FILTERED_FAILED: {
      return {
        ...state,
        loading: false,
      };
    }
    default:
      return state;
  }
};

export default shopPage;
