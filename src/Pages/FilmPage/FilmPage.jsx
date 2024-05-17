import { useGetTopFilmsQuery } from "../../App/store/api/kinopoiskApi";
import { CardContainerFavorites } from "../../Components/CardContainer/CardContainerFavorites";

export default function FilmPage() {
    const { data = [], isLoading } = useGetTopFilmsQuery();
    if (isLoading) {
        return <div>Loading.....</div>;
    }

    return <CardContainerFavorites films={data} />;
}
