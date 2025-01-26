import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  loading: false,
  error: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNaneFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
