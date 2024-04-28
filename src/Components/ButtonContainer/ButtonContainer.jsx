import style from "./ButtonContainer.module.css";
export function ButtonContainer({ children }) {
    return <div className={style.container}>{children}</div>;
}
