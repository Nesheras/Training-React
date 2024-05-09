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
            <Link to="/">
                <svg
                    className={style.exit}
                    fill="#000000"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="800px"
                    height="800px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <polygon
                        points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 
	256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 "
                    />
                    <path
                        d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                    />
                </svg>
            </Link>
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
