import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Menu } from "../Pages/Menu";
import { CardInfo } from "../Components/CardInfo/CardInfo";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Menu",
                element: <Menu />,
            },
            {
                path: "/info/:id",
                element: <CardInfo />,
            },
        ],
    },
]);
