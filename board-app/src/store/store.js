import storage from 'redux-persist/lib/storage';
import MemberSlice from './MemberSlice';
import { persistReducer, persistStore } from 'redux-persist';
import { configureStore } from '@reduxjs/toolkit';


const persistConfig = {
  key : 'spring-board',
  storage,
}

const persistedReducer = persistReducer(persistConfig, MemberSlice);

export const store = configureStore({
  reducer : {
    member : persistedReducer,
  }
});

export const persistor = persistStore(store);