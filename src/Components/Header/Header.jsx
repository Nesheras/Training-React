import { Button } from "../Button/Button";
import stylesHeader from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
export function Header({ searchValue, setSearchValue }) {
    return (
        <div className={stylesHeader.header}>
            <Logo />
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div style={{ display: "flex", gap: "20px" }}>
                <Link to="/signin">
                    <Button text={"Войти"} />
                </Link>
                <Link to="/signup">
                    <Button text={"Зарегистрироваться "} />
                </Link>
            </div>
        </div>
    );
}
