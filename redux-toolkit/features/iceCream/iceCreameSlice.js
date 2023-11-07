const createSlice = require('@reduxjs/toolkit').createSlice



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
  
  module.exports = iceCreamSlice.reducer;
  module.exports.iceCreamActions = iceCreamSlice.actions