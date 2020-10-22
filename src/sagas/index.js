import { all } from 'redux-saga/effects';
import shopPageSaga from '../scenes/ShopPage/sagas';

export default function* rootSaga() {
  yield all([shopPageSaga()]);
}
