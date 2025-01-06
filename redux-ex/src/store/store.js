// 저장소 만들기
// 1. import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 로컬 스토리지에 저장하는 방식
// redux-persist를 설치해서 사용
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';


// 로컬 스토리지 셋팅
const persistConfig = {
    key : 'root',
    storage,
}

// 만든 슬라이스 리듀서를 로컬 스토리지에 저장
const persistedReducer = persistReducer(persistConfig, counterReducer);

// 2. 빈 저장소 만들기
export const store = configureStore({
    reducer: {
        // counterSlice 등록 하기
        counter : persistedReducer
    }
});

export const persistor = persistStore(store);
