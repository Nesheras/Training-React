import { useEffect, useState } from "react";
import { getDatabase, ref, set, remove, onValue } from "firebase/database";
import { useDispatch, useSelector } from "react-redux";
import { allHistory, selectHistory } from "../Slices/HistorySlice";
import { useAuth } from "./useAuth";

export const useHistory = () => {
    const [isLoading, setIsLoading] = useState(true);
    const dispatch = useDispatch();
    const history = useSelector(selectHistory);
    const [triggerPopulate, setTriggerPopulate] = useState(0);
    const db = getDatabase();
    const user = useAuth();

    const fetchHistory = () => {
        if (!user.isAuth) {
            return;
        }
        const historyRef = ref(db, "users/" + user.id + "/history");
        onValue(historyRef, (snapshot) => {
            const data = snapshot.val();
            if (data) {
                const list = Object.values(data);
                dispatch(allHistory(list));
                setIsLoading(false);
            } else {
                dispatch(allHistory([]));
                setIsLoading(false);
            }
        });
    };

    useEffect(() => {
        fetchHistory();
    }, [user.isAuth, triggerPopulate]);

    const addToHistory = async (historyEvent) => {
        if (!user.isAuth) {
            return;
        }
        const history = ref(
            db,
            "users/" + user.id + "/history/" + historyEvent.id
        );
        try {
            await set(history, historyEvent.id);
            setTriggerPopulate((prev) => prev + 1);
        } catch (e) {
            throw new Error(e);
        }
    };

    const removeHistory = async (historyEvent) => {
        const history = ref(
            db,
            "users/" + user.id + "/history/" + historyEvent.id
        );
        try {
            await remove(history);
            setTriggerPopulate((prev) => prev + 1);
        } catch (e) {
            throw new Error(e);
        }
    };

    return { addToHistory, removeHistory, fetchHistory, history, isLoading };
};
