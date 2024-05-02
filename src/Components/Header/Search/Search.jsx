import { Input } from "../../Input/Input";
import styles from "./Search.module.css";
export function Search({ searchValue, setSearchValue }) {
    const hendlerSearch = (e) => {
        setSearchValue(e.target.value);
        console.log(searchValue);
    };

    return (
        <label htmlFor="">
            <Input
                value={searchValue}
                onChange={hendlerSearch}
                placeholder={"Введите название"}
            />
        </label>
    );
}
