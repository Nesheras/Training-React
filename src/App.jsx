import {  Outlet } from "react-router-dom";
import "./App.css";

import { CardContainer } from "./Components/CardContainer/CardContainer";
import { Header } from "./Components/Header/Header";
import { Button } from "./Components/Button/Button";
import { ButtonContainer } from "./Components/ButtonContainer/ButtonContainer";
import { Logo } from "./Components/Header/Logo/Logo";
import { Search } from "./Components/Header/Search/Search";

function App() {
    return (
        <>
            <Header>
                <Logo />
                <div>
                    <Search />
                    <Button text={"Войти"} />
                </div>
            </Header>
            <Outlet/>
            <CardContainer />
            <ButtonContainer></ButtonContainer>
        </>
    );
}

export default App;
