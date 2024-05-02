import { configureStore } from "@reduxjs/toolkit";
import { FilmsApi } from "./store/api/kinopoiskApi";
export const store = configureStore({
    reducer: {
        [FilmsApi.reducerPath]: FilmsApi.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(FilmsApi.middleware),
});
