import { CardContainer } from "../../Components/CardContainer/CardContainer";
import { useGetTopFilmsQuery } from "../../App/store/api/kinopoiskApi";

export default function FilmPage() {
    const { data = [], isLoading } = useGetTopFilmsQuery();
    if (isLoading) {
        return <div>Loading.....</div>;
    }

    return <CardContainer films={data} />;
}
