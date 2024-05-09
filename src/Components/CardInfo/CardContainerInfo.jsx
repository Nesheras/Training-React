import { useParams } from "react-router-dom";
import { useGetFilmsByIdQuery } from "../../App/store/api/kinopoiskApi";
import { CardInfo } from "./CardInfo";

export function CardContainerInfo() {
    const { id } = useParams();
    const { data, isLoading } = useGetFilmsByIdQuery(id);
    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <CardInfo data={data} id={id} />
        </div>
    );
}
