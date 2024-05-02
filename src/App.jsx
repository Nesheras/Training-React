import { Outlet } from "react-router-dom";
import "./App.css";
import { CardContainer } from "./Components/CardContainer/CardContainer";
import { Header } from "./Components/Header/Header";
import { useState } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { useGetTopFilmsQuery } from "./App/store/api/kinopoiskApi";

function App() {
    const [searchValue, setSearchValue] = useState("");
    const { data = [], isLoading } = useGetTopFilmsQuery();
    if (isLoading) return <div>Loading.....</div>;

    const newFilm = data.filter((item) =>
        item.nameRu.toLowerCase().includes(searchValue.toLowerCase())
    );

    console.log(data);
    return (
        <>
            <Header searchValue={searchValue} setSearchValue={setSearchValue} />
            <Outlet />
            <ErrorBoundary fallback={<div>Что-то пошло не так...</div>}>
                <CardContainer films={newFilm} />
            </ErrorBoundary>
        </>
    );
}

export default App;
