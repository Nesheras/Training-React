import styleButton from "./Button.module.css";
export function Button({ text }) {
    return <button className={styleButton.button}>{text}</button>;
}
