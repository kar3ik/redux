import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    numofIceCreams: 20,
  };
  
  const iceCreamSlice = createSlice({
    name: 'iceCream',
    initialState,
    reducers: {
      ordered: (state) => {
        state.numofIceCreams--;
      },
      restocked: (state, action) => {
        state.numofIceCreams += action.payload;
      },
    },
  });
  
export default iceCreamSlice.reducer;
export const {ordered, restocked }  = iceCreamSlice.actions