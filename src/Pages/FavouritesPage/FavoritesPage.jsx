import { CardContainer } from "../../Components/CardContainer/CardContainer";
import { useFavorites } from "../../App/store/api/hooks/useFavorites";
export function FavoritesPage() {
    const { favorites, isLoading } = useFavorites();
    if (isLoading) {
        return <h1>Загрузка....</h1>;
    }
    if (favorites.length === 0) {
        return <div>Добавьте что-нибудь....</div>;
    }

    return <CardContainer films={favorites} />;
}
