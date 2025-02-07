import {configureStore} from '@reduxjs/toolkit'

import storage  from 'redux-persist/lib/storage';
import {persistStore, persistReducer} from 'redux-persist';
import TodoSlice  from './todoSlice';

const persistConfig = {
  key: 'root',
  storage,
}

const persistedReducer = persistReducer(persistConfig, TodoSlice);

export const store = configureStore({
  reducer: {
    todo : persistedReducer
  }
});

export const persistor = persistStore(store);