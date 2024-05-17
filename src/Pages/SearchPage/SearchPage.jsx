import { useParams } from "react-router-dom";
import { useGetSearchByKeywordQuery } from "../../App/store/api/kinopoiskApi";
import { CardContainerFavorites } from "../../Components/CardContainer/CardContainerFavorites";

export default function SearchPage() {
    const { search } = useParams();
    const { data } = useGetSearchByKeywordQuery({ query: search, page: "1" });

    if (!data) {
        return <h1>Загрузка</h1>;
    } else {
        const { films } = data;

        return films[0] ? (
            <>
                <CardContainerFavorites films={films} />
            </>
        ) : (
            <h1>Результаты по поиску отсутствуют</h1>
        );
    }
}
