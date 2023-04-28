import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './crypto/cryptoSlice';
import detailReducer from './detail/detailSlice';

const store = configureStore({
  reducer: {
    crypto: cryptoReducer,
    detail: detailReducer,
  },
});

export default store;
