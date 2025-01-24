import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contactsSlice";
import filtersReduser from "./filterSlice.js";

export const store = configureStore({
  reducer: {
    contacts: contactReduser,
    filters: filtersReduser,
  },
});
