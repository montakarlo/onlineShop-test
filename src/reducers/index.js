import { combineReducers } from 'redux';
import shopPage from '../scenes/ShopPage/reducers/shopPage';

const rootReducer = () => combineReducers({
  shopPage,
});

export default rootReducer;
