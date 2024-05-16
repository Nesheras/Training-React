import { Card } from "../Card/Card";
import style from "./CardInfo.module.css";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import { useFavorites } from "../../App/store/api/hooks/useFavorites";
import { useState } from "react";
import { useAuth } from "../../App/store/api/hooks/useAuth";

export function CardInfo({ data, id }) {
    const { isAuth } = useAuth();
    const { addFavorite, favorites, removeFavorite } = useFavorites();

    const [isFavorite, setIsFavorite] = useState(
        favorites?.some((item) => item.id === data.id)
    );

    const handlerFavorite = async () => {
        if (isFavorite) {
            setIsFavorite(false);
            try {
                await removeFavorite(id);
            } catch {
                setIsFavorite(true);
            }
        } else {
            setIsFavorite(true);
            try {
                await addFavorite(data);
            } catch {
                setIsFavorite(false);
            }
        }
    };

    return (
        <div className={style.container}>
            <Card src={data.posterUrlPreview} />
            <div className="style.containerInfo">
                <h2>{data.nameRu}</h2>
                <p>{data.description}</p>
                {isAuth ? (
                    <Button
                        text={!isFavorite ? "Добавить в избранное" : "Удалить"}
                        handler={handlerFavorite}
                    ></Button>
                ) : null}
            </div>
        </div>
    );
}
