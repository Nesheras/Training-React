import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CardInfo } from "../Components/CardInfo/CardInfo";

import FilmPage from "../Pages/FilmPage/FilmPage";
import SearchPage from "../Pages/SearchPage/SearchPage";
import { SignInPage } from "../Pages/SignIn/SignInPage";
import { SignUpPage } from "../Pages/SignUp/SignUpPage";

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
                element: <CardInfo />,
            },
            {
                path: `/search`,
                element: <SearchPage />,
            },
            {
                path: `/search/:search`,
                element: <SearchPage />,
            },
            //         {
            //             path: "/film",
            //             element:  <FilmPage />,
            //         },
            //         {
            //             path: "",
            //             element: '<PrivateRoute />',
            //             children: [
            //                 { path: "favorites", element: <FavoritesPage /> },
            //                 { path: "history", element: <HistoryPage /> },
            //             ],
            //         },
            { path: "/signup", element: <SignUpPage /> },
            { path: "/signin", element: <SignInPage /> },
            //     ],
            // },
        ],
    },
]);
