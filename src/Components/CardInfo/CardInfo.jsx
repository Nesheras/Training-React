import { Card } from "../Card/Card";
import style from "./CardInfo.module.css";
import PropTypes from "prop-types";
import { useAuth } from "../../App/store/api/hooks/useAuth";
import FavoriteButton from "../Button/favoriteButton";
import { useFavorites } from "../../App/store/api/hooks/useFavorites";

export function CardInfo({ data, nameRu, description, posterUrlPreview, id }) {
    const { addFavorite, removeFavorite, favorites, isLoading } =
        useFavorites();
    const { isAuth } = useAuth();
    if (isLoading) {
        return <p>Загрузка</p>;
    }
    return (
        <div className={style.container}>
            <Card src={posterUrlPreview} />
            <div className="style.containerInfo">
                <h2>{nameRu}</h2>
                <p>{description}</p>
                {isAuth ? (
                    <FavoriteButton
                        addFavorite={addFavorite}
                        removeFavorite={removeFavorite}
                        favorites={favorites}
                        data={data}
                        id={id}
                    ></FavoriteButton>
                ) : null}
            </div>
        </div>
    );
}
CardInfo.propTypes = {
    id: PropTypes.string,
    nameRu: PropTypes.string,
    posterUrlPreview: PropTypes.string,
    description: PropTypes.string,
};
