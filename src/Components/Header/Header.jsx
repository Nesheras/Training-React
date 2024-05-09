import { Button } from "../Button/Button";
import stylesHeader from "./Header.module.css";
import { Logo } from "./Logo/Logo";
import { Search } from "./Search/Search";
import { Link } from "react-router-dom";
import { useAuth } from "../../App/store/api/hooks/useAuth";
import { useDispatch } from "react-redux";
import { removeUser } from "../../App/store/api/Slices/userSlices";
import { auth } from "../../firebase";

export function Header({ searchValue, setSearchValue }) {
    const dispatch = useDispatch();
    const { isAuth, isLoading } = useAuth();
    function handlerLogOut() {
        auth.signOut();
        dispatch(removeUser());
    }

    return (
        <div className={stylesHeader.header}>
            <Logo />
            <Search searchValue={searchValue} setSearchValue={setSearchValue} />
            <div style={{ display: "flex", gap: "20px" }}>
                {isAuth ? (
                    <>
                        <Link to="/favorites">
                            <Button text={"Избранное"} />
                        </Link>
                        <Link to="/">
                            <Button text={"История"} />
                        </Link>
                        <Button text={"Выйти"} handler={handlerLogOut} />
                    </>
                ) : (
                    <>
                        <Link to="/signin">
                            <Button text={"Войти"} />
                        </Link>
                        <Link to="/signup">
                            <Button text={"Зарегистрироваться "} />
                        </Link>
                    </>
                )}
            </div>
        </div>
    );
}
