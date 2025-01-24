import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isLoading: false,
  isError: false,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    changeFilter: (state, action) => {
      state.name = action.payload;
    },
    // setLoading: (state, action) => {
    //   state.isLoading = action.payload;
    // },
    // setError: (state, action) => {
    //   state.isError = action.payload;
    // },
    // fetchDataSuccesses: (state, action) => {
    //   state.filters = action.payload;
    // },
  },
});

export const { changeFilter } = filtersSlice.actions;
export const selectNaneFilter = (state) => state.filters.name;
export default filtersSlice.reducer;
