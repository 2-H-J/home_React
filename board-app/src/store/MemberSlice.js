import { createSlice } from '@reduxjs/toolkit';
export const MemberSlice = createSlice({
  name : 'member',
  initialState : {
    value : {}
  },
  reducers : {
    saveInfo : (state, action) => {
      state.value = {...action.payload};
      console.log("saveInfo :", state.value);
    },
    clearInfo : (state) => {
      state.value = {};
      console.log("clearInfo :", state.value);
    }
  }

});

export const {saveInfo, clearInfo } = MemberSlice.actions;
export default MemberSlice.reducer;