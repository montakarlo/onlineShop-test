import { all, put, call, takeEvery } from 'redux-saga/effects';
import { fetchGoods, addToFavourite } from '../../../services/items';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCEDED,
  ADD_TO_FAVOURITE,
  ADD_TO_FAVOURITE_SUCCEDED
} from '../actions/actionTypes'

function* getShopItems() {
  try {
    const response = yield call(fetchGoods);
    if (response.data.status === 'PRODUCTS_SUCCESS') {
      yield put({type: FETCH_ITEMS_SUCCEDED, payload: response.data.data.products})
    } else {
      console.log(response.data.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchGetShopItems() {
  yield takeEvery(FETCH_ITEMS, getShopItems);
}

function* markFavourite({ payload }) {
  try {
    const response = yield call(addToFavourite, payload);
    if (response.data.status === 'FAVORITE_SUCCESS') {
      yield put({type: ADD_TO_FAVOURITE_SUCCEDED, payload: { inFav: response.data.data.inFav, id: payload }})
    } else {
      console.log(response.data.data.message);
    }
  } catch (error) {
    console.log(error);
  }
}

function* watchMarkFavourite() {
  yield takeEvery(ADD_TO_FAVOURITE, markFavourite);
}

export default function* shopPageSaga() {
  yield all([
    watchGetShopItems(),
    watchMarkFavourite(),
  ]);
}
