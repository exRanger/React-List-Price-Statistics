import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categoryId: null,
  sort: {
    isSortClicked: false,
    chosenItem: false,
    sortItemName: null
  },
  page: null
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
    },
    setPage(state, {payload}) {
      state.page = payload;
    }
  }
});

export const { setCategoryId, setSort, setPage } = filterSlice.actions

export default filterSlice.reducer;
