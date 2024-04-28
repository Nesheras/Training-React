import stylesHeader from "./Header.module.css";
export function Header({ children }) {
    return <header className={stylesHeader.header}>{children}</header>;
}
