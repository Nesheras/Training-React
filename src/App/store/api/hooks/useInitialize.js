import { useEffect } from "react";

import { auth } from "../../../../firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { removeUser, setUser } from "../Slices/userSlices";
import { isAuthSlice } from "../Slices/is-auth-slice";
import { selectInitializeSuccess } from "../Selectors/selectIsAuth";

export const useInitialize = () => {
    const dispatch = useDispatch();
    const { initialize, toggleAuth } = isAuthSlice.actions;

    const initializeSuccess = useSelector(selectInitializeSuccess);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                dispatch(
                    setUser({
                        email: user.email,
                        token: user.accessToken,
                        id: user.uid,
                    })
                );
            } else {
                dispatch(removeUser());
            }
            dispatch(initialize(true));
        });
        return () => unsubscribe();
    }, [dispatch, initialize, toggleAuth]);
    return initializeSuccess;
};
