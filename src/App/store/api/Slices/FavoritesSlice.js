import { createSlice } from "@reduxjs/toolkit";

const FavoritesSlice = createSlice({
    name: "favorites",
    initialState: {
        favorites: [],
    },
    reducers: {
        allFavorites: (state, action) => {
            state.favorites = action.payload;
        },
        removeFavorite: (state, action) => {
            state.favorites = state.favorites.filter(
                (movie) => movie.id !== action.payload
            );
        },
        addToFavorites: (state, action) => {
            state.favorites.push(action.payload);
        },
    },
});

export const selectFavorites = (state) => state.favorites?.favorites;

export const { allFavorites, removeFavorite, addToFavorites } =
    FavoritesSlice.actions;
export default FavoritesSlice;
