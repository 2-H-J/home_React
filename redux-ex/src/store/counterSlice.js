import {createSlice} from '@reduxjs/toolkit'

export const counterSlice = createSlice({
    name: 'counter', // name : slice의 이름

    initialState: { // initialState : slice의 상태
        value: 0
    },

    reducers: { // reducers : 상태를 변경(관리)하는 함수
        increment: (state) => { // increment : 함수의 이름
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },

        incrementByAmount: (state, action) => {
            state.value += action.payload;
        }
    }
});

// 각 케이스에 대한 리듀서 함수들을 생성
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;