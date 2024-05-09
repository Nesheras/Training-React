import styleButton from "./Button.module.css";
export function Button({ text, handler }) {
    return (
        <button className={styleButton.button} onClick={handler}>
            {text}
        </button>
    );
}
