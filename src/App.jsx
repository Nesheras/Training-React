import { Outlet } from "react-router-dom";
import "./App.css";

import { Header } from "./Components/Header/Header";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function App() {
    // const newFilm = data.filter((item) =>
    //     item.nameRu.toLowerCase().includes(searchValue.toLowerCase())
    // );

    return (
        <>
            <ErrorBoundary
                fallback={
                    <h1 style={{ marginTop: "100px", fontSize: "50px" }}>
                        Что-то пошло не так...
                    </h1>
                }
            >
                <Header />

                <Outlet />
            </ErrorBoundary>
        </>
    );
}

export default App;
