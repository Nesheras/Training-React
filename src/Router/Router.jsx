import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Menu } from "../Pages/Menu";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/Menu",
                element: <Menu />,
            },
        ],
    },
]);
