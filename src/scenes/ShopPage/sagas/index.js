import { all, put, call, takeEvery } from 'redux-saga/effects';
import { fetchGoods, addToFavourite, fetchFiltered } from '../../../services/items';
import {
  FETCH_ITEMS,
  FETCH_ITEMS_SUCCEEDED,
  ADD_TO_FAVOURITE,
  ADD_TO_FAVOURITE_SUCCEEDED,
  FETCH_FILTERED,
  FETCH_FILTERED_SUCCEEDED,
  FETCH_ITEMS_FAILED,
  FETCH_FILTERED_FAILED,
} from '../actions/actionTypes';

function* getShopItems() {
  try {
    const response = yield call(fetchGoods);
    if (response.data.status === 'PRODUCTS_SUCCESS') {
      yield put({ type: FETCH_ITEMS_SUCCEEDED, payload: response.data.data.products });
    } else {
      yield put({ type: FETCH_ITEMS_FAILED });
      console.log(response.data.data.message);
    }
  } catch (error) {
    yield put({ type: FETCH_ITEMS_FAILED });
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
      yield put({ type: ADD_TO_FAVOURITE_SUCCEEDED, payload: { inFav: response.data.data.inFav, id: payload } });
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

function* filterItems({ payload }) {
  try {
    const response = yield call(fetchFiltered, payload);
    if (response.data.status === 'FILTER_SUCCESS') {
      yield put({ type: FETCH_FILTERED_SUCCEEDED, payload: response.data.data.products });
    } else {
      yield put({ type: FETCH_FILTERED_FAILED });
      console.log(response.data.data.message);
    }
  } catch (error) {
    yield put({ type: FETCH_FILTERED_FAILED });
    console.log(error);
  }
}

function* watchFilterItems() {
  yield takeEvery(FETCH_FILTERED, filterItems);
}

export default function* shopPageSaga() {
  yield all([watchGetShopItems(), watchMarkFavourite(), watchFilterItems()]);
}
