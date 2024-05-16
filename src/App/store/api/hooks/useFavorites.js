import { useEffect, useState } from "react";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { allFavorites, selectFavorites } from "../Slices/FavoritesSlice";
import { useAuth } from "./useAuth";

export const useFavorites = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const favorites = useSelector(selectFavorites);
    const [triggerPopulate, setTriggerPopulate] = useState(0);
    const db = getDatabase();
    const user = useAuth();

    useEffect(() => {
        const fetchFavorites = () => {
            if (!user.isAuth) {
                setIsLoading(false);
                return;
            }
            const favoritesRef = ref(db, "users/" + user.id + "/favorites");
            onValue(favoritesRef, (snapshot) => {
                const data = snapshot.val();

                if (data) {
                    const list = Object.values(data);
                    dispatch(allFavorites(list));
                    setIsLoading(false);
                } else {
                    dispatch(allFavorites([]));
                }
                setIsLoading(false);
            });
        };
        fetchFavorites();
    }, [user.isAuth, triggerPopulate]);

    const addFavorite = async (movie) => {
        const favorites = ref(
            db,
            "users/" + user.id + "/favorites/" + movie.id
        );
        try {
            await set(favorites, movie);
            setTriggerPopulate((prev) => prev + 1);
        } catch (e) {
            throw new Error(e);
        }
        setTriggerPopulate((prev) => prev + 1);
    };

    const removeFavorite = async (id) => {
        const favorites = ref(db, "users/" + user.id + "/favorites/" + id);
        try {
            await remove(favorites);
            setTriggerPopulate((prev) => prev + 1);
        } catch (e) {
            throw new Error(e);
        }
    };

    return { addFavorite, removeFavorite, favorites, isLoading };
};
