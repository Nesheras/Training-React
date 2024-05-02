import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { transformAllMovies } from "./transformRespons/transformAllFilms";
import { transformFilmById } from "./transformRespons/transformResponseByID";

const API_URL = "https://kinopoiskapiunofficial.tech/api";
export const FilmsApi = createApi({
    reducerPath: "FilmsApi",

    baseQuery: fetchBaseQuery({
        baseUrl: API_URL,
        headers: { "X-API-KEY": "37a34732-1480-4ba0-a5d5-6a88059ba2ae" },
    }),
    endpoints: (builder) => ({
        getTopFilms: builder.query({
            query: () => ({
                url: "/v2.2/films/collections?type=TOP_POPULAR_ALL",
                params: {
                    page: 1,
                },
            }),
            transformResponse: (response) => transformAllMovies(response),
        }),
        getFilmsById: builder.query({
            query: (id) => ({
                url: `/v2.2/films/${id}`,
            }),
            transformResponse: transformFilmById,
        }),
        getSearchByKeyword: builder.query({
            query: ({ query, page }) => ({
                url: `/v2.1/films/search-by-keyword?keyword=${query}`,
                params: {
                    page,
                },
            }),
        }),
    }),
});

export const { useGetTopFilmsQuery, useGetFilmsByIdQuery } = FilmsApi;
