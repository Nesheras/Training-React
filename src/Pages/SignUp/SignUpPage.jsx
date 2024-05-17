import { Navigate } from "react-router-dom";
import { useAuth } from "../../App/store/api/hooks/useAuth";
import { SignUp } from "../../Components/Registration/SignUp";
export default function SignUpPage() {
    const { isAuth } = useAuth();

    return isAuth ? (
        <Navigate to="/" />
    ) : (
        <div
            style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                marginTop: "150px",
                background: "#504c44",
                width: "400px",
                marginLeft: "33%",
                height: "300px",
                borderRadius: "30px",
            }}
        >
            <h2 style={{ fontSize: "30px", marginTop: "20px" }}>Регистрация</h2>
            <SignUp />
        </div>
    );
}
