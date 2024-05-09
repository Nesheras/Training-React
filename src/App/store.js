import { configureStore } from "@reduxjs/toolkit";
import { FilmsApi } from "./store/api/kinopoiskApi";
import userReducer from "./store/api/Slices/userSlices";
import FavoritesSlice from "./store/api/Slices/FavoritesSlice";
import { isAuthSlice } from "./store/api/Slices/is-auth-slice";

export const store = configureStore({
    reducer: {
        auth: isAuthSlice.reducer,
        user: userReducer,
        [FilmsApi.reducerPath]: FilmsApi.reducer,
        [FavoritesSlice.name]: FavoritesSlice.reducer,
    },
    middleware: (getDefaultMiddlware) =>
        getDefaultMiddlware().concat(FilmsApi.middleware),
});
