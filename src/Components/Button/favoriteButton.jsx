import { useState } from "react";

import styleButton from "./Button.module.css";
import { useDispatch } from "react-redux";
function FavoriteButton({ id, data, favorites, addFavorite, removeFavorite }) {
    const dispatch = useDispatch();
    const [isFavorite, setIsFavorite] = useState(
        favorites?.some((item) => item.id === data.id)
    );

    const handleFavorite = async () => {
        if (isFavorite) {
            setIsFavorite(false);
            try {
                await removeFavorite(id);
            } catch (e) {
                setIsFavorite(true);
            }
        } else {
            setIsFavorite(true);
            try {
                await addFavorite(data);
            } catch (e) {
                setIsFavorite(false);
            }
        }
    };

    return (
        <button className={styleButton.button} onClick={handleFavorite}>
            {!isFavorite ? "Добавить" : "Удалить"}
        </button>
    );
}

export default FavoriteButton;
