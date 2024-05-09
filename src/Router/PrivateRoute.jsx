import { useAuth } from "../App/store/api/hooks/useAuth";
import { Outlet, Navigate } from "react-router-dom";

export function PrivateRoute() {
    const { isAuth } = useAuth();
    return isAuth ? <Outlet /> : <Navigate to="/signin" />;
}
