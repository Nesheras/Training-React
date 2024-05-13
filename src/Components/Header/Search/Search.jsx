import { useState } from "react";
import { Input } from "../../Input/Input";
import s from "./Search.module.css";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { useGetSearchByKeywordQuery } from "../../../App/store/api/kinopoiskApi";
import { useDebounce } from "../../../App/store/api/hooks/useDebouns";
import { useHistory } from "../../../App/store/api/hooks/useHistory";

export function Search() {
    const nav = useNavigate();
    const { search } = useParams();
    const [searchValue, setSearchValue] = useState(search);
    const debounse = useDebounce(searchValue, 500);
    const { addToHistory } = useHistory();

    const { data, isLoading } = useGetSearchByKeywordQuery({
        query: debounse,
        page: "1",
    });

    const [showSuggestions, setShowSuggestions] = useState(false);

    if (isLoading) {
        return <h1>Загрузка</h1>;
    }

    let items = data?.films.slice(0, 5);
    const hendlerSearch = (e) => {
        setSearchValue(e.target.value);
    };

    const handleGoToPageSearch = (e) => {
        e.preventDefault();
        addToHistory({ id: searchValue });
        setShowSuggestions(false);
        nav(`/search/${searchValue}`);
    };
    const handleFocus = () => setShowSuggestions(true);
    function handleBlur() {
        setTimeout(() => {
            setShowSuggestions(false);
        }, 200);
    }
    function handleKeyDown(event) {
        if (event.key === "Escape") {
            setShowSuggestions(false);
            event.target.blur();
        }
    }
    return (
        <form
            className={s.s}
            onSubmit={handleGoToPageSearch}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
        >
            <Input
                value={searchValue}
                onChange={hendlerSearch}
                placeholder={"Введите название"}
            />
            <button></button>
            {showSuggestions && searchValue && (
                <ul className={s.suggest}>
                    {items?.map((item) => {
                        return (
                            <Link
                                key={item.id}
                                style={{
                                    textDecoration: "none",

                                    color: "white",
                                }}
                                to={`/info/${item.id}`}
                            >
                                <li>{item.nameRu}</li>
                            </Link>
                        );
                    })}
                    {searchValue?.length >= 2 && items?.length === 0 && (
                        <li>По вашему запросу ничего не найдено</li>
                    )}
                </ul>
            )}
        </form>
    );
}
