import stylesInput from "./Input.module.css";
export function Input({ placeholder, value, onChange }) {
    return (
        <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder={placeholder}
            className={stylesInput.inputSearch}
        ></input>
    );
}
