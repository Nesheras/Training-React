import { useSelector } from "react-redux";
export function useAuth() {
    const { email, id, isLoading } = useSelector((state) => state.user);

    return {
        isAuth: !!email,
        email,
        id,
        isLoading,
    };
}
