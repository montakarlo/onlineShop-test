import React from 'react';
import { Provider } from 'react-redux';
import { store } from '../../store';
import ShopPage from '../../scenes/ShopPage';

const App = () => (
  <Provider store={store}>
    <ShopPage />
  </Provider>
);

export default App;
