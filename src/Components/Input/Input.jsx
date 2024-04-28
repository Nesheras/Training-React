import stylesInput from "./Input.module.css";
export function Input({ placeholder }) {
    return (
        <input
            type="text"
            placeholder={placeholder}
            className={stylesInput.inputSearch}
        ></input>
    );
}
