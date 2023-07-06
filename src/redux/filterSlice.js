const { createSlice } = require('@reduxjs/toolkit');

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
    value: '',
  },
  reducers: {
    addFilter(state, { payload }) {
      state.value = payload;
    },
  },
});

export const { addFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
