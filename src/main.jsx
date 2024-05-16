import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./App/store.js";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router/Router.jsx";
import "./firebase.js";
const container = document.getElementById("root");
if (container) {
    ReactDOM.createRoot(container).render(
        <React.StrictMode>
            <Provider store={store}>
                <Suspense fallback={<h1>Загрузка страницы</h1>}>
                    <RouterProvider router={router} />
                </Suspense>
            </Provider>
        </React.StrictMode>
    );
} else {
    throw new Error(
        "Root element with ID 'root' was not found in the document. Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
    );
}
