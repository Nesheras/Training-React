import { createContext, useState, useContext, useMemo } from "react";

const ThemeContext = createContext();

export const useThemeContext = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [headerColor, setHeaderColor] = useState("");

    const contextValue = useMemo(
        () => ({
            headerColor,
            changeHeaderColor: () => {
                headerColor === ""
                    ? setHeaderColor("white")
                    : setHeaderColor("");
            },
        }),
        [headerColor]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            {children}
        </ThemeContext.Provider>
    );
};
