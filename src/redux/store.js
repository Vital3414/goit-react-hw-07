import { configureStore } from "@reduxjs/toolkit";
import contactReduser from "./contactsSlice";
import filtersReduser from "./filterSlice.js";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "contacts",
  storage,
  whitelist: ["items"],
};
const persistedContactsReducer = persistReducer(persistConfig, contactReduser);

export const store = configureStore({
  reducer: {
    contacts: persistedContactsReducer,
    filters: filtersReduser,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
