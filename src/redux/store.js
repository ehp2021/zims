import { configureStore } from '@reduxjs/toolkit';
import buttonReducer from './buttons/buttons';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, buttonReducer);

export const store = configureStore({
  reducer: {
    button: persistedReducer,
  },
});
