import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { CardInfo } from "../Components/CardInfo/CardInfo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: `/info/:id`,
                element: <CardInfo />,
            },
            //         {
            //             path: "/search",
            //             element:  <SearchPage />,
            //         },
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
            //         { path: "/signup",
            //           element: <SignUpPage /> },
            //         { path: "/signin",
            //             element: <SignInPage /> },
            //     ],
            // },
        ],
    },
]);
