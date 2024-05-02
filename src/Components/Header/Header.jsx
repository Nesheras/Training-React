import { Button } from "../Button/Button";
import stylesHeader from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";
export function Header({ searchValue, setSearchValue }) {
    return (
        <div className={stylesHeader.header}>
            <Logo />
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <Button text={"Войти"} />
            <Button text={"Зарегистрироваться"} />
        </div>
    );
}
