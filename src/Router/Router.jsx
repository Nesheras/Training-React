import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CardInfo } from "../Components/CardInfo/CardInfo";
import { FavoritesPage } from "../Pages/FavouritesPage/FavoritesPage";
import { PrivateRoute } from "./PrivateRoute";
import HistoryPage from "../Pages/HistoryPage/HistoryPage";
import { lazy } from "react";

const FilmPage = lazy(() => import("../Pages/FilmPage/FilmPage"));
const SearchPage = lazy(() => import("../Pages/SearchPage/SearchPage"));
const SignInPage = lazy(() => import("../Pages/SignIn/SignInPage"));
const SignUpPage = lazy(() => import("../Pages/SignUp/SignUpPage"));
const CardContainerInfo = lazy(
    () => import("../Components/CardInfo/CardContainerInfo")
);

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <FilmPage />,
            },
            {
                path: `/info/:id`,
                element: <CardContainerInfo />,
            },
            {
                path: `/search`,
                element: <SearchPage />,
            },
            {
                path: `/search/:search`,
                element: <SearchPage />,
            },

            {
                path: "",
                element: <PrivateRoute />,

                children: [
                    { path: "favorites", element: <FavoritesPage /> },
                    { path: "history", element: <HistoryPage /> },
                ],
            },
            { path: "/signup", element: <SignUpPage /> },
            { path: "/signin", element: <SignInPage /> },
            //     ],
            // },
        ],
    },
]);
