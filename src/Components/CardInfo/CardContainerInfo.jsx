import { useParams } from "react-router-dom";
import { useGetFilmsByIdQuery } from "../../App/store/api/kinopoiskApi";
import { CardInfo } from "./CardInfo";

export default function CardContainerInfo() {
    const { id } = useParams();
    const { data, isLoading } = useGetFilmsByIdQuery(id);
    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div>
            <CardInfo
                data={data}
                nameRu={data.nameRu}
                description={data.description}
                posterUrlPreview={data.posterUrlPreview}
                id={id}
            />
        </div>
    );
}
