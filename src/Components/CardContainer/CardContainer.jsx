import styleCardContainer from "./CardContainer.module.css";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";

export function CardContainer({ films }) {
    return (
        <div className={styleCardContainer.cardContainer}>
            {films.map((item) => {
                return (
                    <Link to={`/info/${item.id}`} key={item.id}>
                        <Card src={item.posterUrlPreview} />
                    </Link>
                );
            })}
        </div>
    );
}
