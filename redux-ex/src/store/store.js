// 저장소 만들기
// 1. import { configureStore } from "@reduxjs/toolkit";
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";

// 2. 빈 저장소 만들기
export default configureStore({
    reducer: {
        // counterSlice 등록 하기
        counter : counterReducer
    }
})
