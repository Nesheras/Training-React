import styleCardContainer from "./CardContainer.module.css";
import { CardFavorites } from "../Card/CardFavorites";
import { Link } from "react-router-dom";
import { useFavorites } from "../../App/store/api/hooks/useFavorites";
import FavoriteButton from "../Button/favoriteButton";
import { useAuth } from "../../App/store/api/hooks/useAuth";

export function CardContainerFavorites({ films }) {
    const { isAuth } = useAuth();
    const { addFavorite, removeFavorite, favorites, isLoading } =
        useFavorites();

    if (isLoading) {
        return <p>Загрузка</p>;
    }
    return (
        <div className={styleCardContainer.cardContainer}>
            {films.map((item) => {
                return (
                    <div key={item.id}>
                        <Link to={`/info/${item.id}`}>
                            <CardFavorites src={item.posterUrlPreview} />
                        </Link>
                        {isAuth ? (
                            <FavoriteButton
                                addFavorite={addFavorite}
                                removeFavorite={removeFavorite}
                                favorites={favorites}
                                data={item}
                                id={item.id}
                            />
                        ) : null}
                    </div>
                );
            })}
        </div>
    );
}
