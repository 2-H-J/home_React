// 저장소 만들기
// 1. import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// 로컬 스토리지에 저장하는 방식
// redux-persist를 설치해서 사용
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


// 로컬 스토리지 셋팅
const persistConfig = {
    key : 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig);

// 2. 빈 저장소 만들기
export const store = configureStore({
    reducer: {
        // counterSlice 등록 하기
        todo : persistedReducer
    }
});

export const persistor = persistStore(store);
