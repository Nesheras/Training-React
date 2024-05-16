import { CardContainer } from "../../Components/CardContainer/CardContainer";
import { useFavorites } from "../../App/store/api/hooks/useFavorites";
export function FavoritesPage() {
    const { favorites, isLoading } = useFavorites();
    if (isLoading) {
        return <h1>Загрузка....</h1>;
    }
    if (favorites.length === 0) {
        return <h2 style={{ fontSize: "40px" }}>Добавьте что-нибудь....</h2>;
    }

    return <CardContainer films={favorites} />;
}
