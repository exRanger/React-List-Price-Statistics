import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: null,
  sort: {
    isSortClicked: false,
    chosenItem: false,
    sortItemName: null
  }
};

export const filterSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setCategoryId (state, {payload}) {
      state.categoryId = Number(payload);
    },
    setSort(state, {payload}) {
      state.sort = payload;
    }
  }
});

export const { setCategoryId, setSort, } = filterSlice.actions

export default filterSlice.reducer;
