import { Outlet } from "react-router-dom";
import "./App.css";
import { Header } from "./Components/Header/Header";
import { ErrorBoundary } from "react-error-boundary";

import { useInitialize } from "./App/store/api/hooks/useInitialize";
import { ThemeProvider } from "./App/store/api/Context";

function App() {
    const initializeSuccess = useInitialize();

    if (!initializeSuccess) {
        return <h1>Загрузка....</h1>;
    }

    return (
        <>
            <ThemeProvider>
                <ErrorBoundary
                    fallback={
                        <h1 style={{ marginTop: "100px", fontSize: "50px" }}>
                            Что-то пошло не так...
                        </h1>
                    }
                >
                    <Header />

                    <Outlet />
                </ErrorBoundary>
            </ThemeProvider>
        </>
    );
}

export default App;
