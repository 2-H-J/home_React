// 저장소 만들기
// - 사용자 정보 저장소에 member라고 저장
// - reducers : saveToken, clearToken
// 1. import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";

// 로컬 스토리지에 저장하는 방식
// redux-persist를 설치해서 사용
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import MemberSlice from "./MemberSlice";


// 로컬 스토리지 셋팅
const persistConfig = {
    key : 'spring-board',
    storage,
}

// 만든 슬라이스 리듀서를 로컬 스토리지에 저장
const persistedReducer = persistReducer(persistConfig, MemberSlice);

// 2. 빈 저장소 만들기
export const store = configureStore({
    reducer: {
        // member이름으로 counterSlice 등록 하기
        member : persistedReducer
    }
});

export const persistor = persistStore(store);
