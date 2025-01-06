import { createSlice } from '@reduxjs/toolkit';

/*
  컴포넌트에 관련된 상태 값을 업데이트하는 리듀서 들을 묶어 주는 유틸리티 함수
  개별적인 리듀서를 정의하고 사용하는 패턴을 단순화하는 방법으로 설계되었음.

  name : 슬라이스 이름을 지정하여 액션 타입을 만듬
  initialState : 초기 상태 값 설정
  reducers : 리듀서 함수들 작성, 함수 이름은 액션 타입으로 자동으로 매핑됨
  
*/
export const counterSlice = createSlice({
  // name : slice의 이름
  name : 'counter',
    
    // initialState : slice의 상태
    initialState: {
      value : 0
    },

    // reducers : 상태를 변경(관리)하는 함수
    reducers : { 
      
      increment : (state) => { 
            state.value += 1;
      },
      decrement : (state) => {
        state.value -= 1;
      },
      incrementByAmount : (state, action) => {
        state.value += action.payload;
      }
  }
});
//각 케이스에 대한 리듀서 함수들을 생성
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;