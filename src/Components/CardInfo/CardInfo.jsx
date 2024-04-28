import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import style from "./CardInfo.module.css";
export function CardInfo() {
    const { id } = useParams();
    return (
        <div className={style.container}>
            <Card />
            <div className="style.containerInfo">
                <h1>Заголовок{id}</h1>
                <p>Текст</p>
            </div>
        </div>
    );
}
