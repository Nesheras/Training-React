import { useParams } from "react-router-dom";
import { Card } from "../Card/Card";
import style from "./CardInfo.module.css";
import { Link } from "react-router-dom";
import { useGetFilmsByIdQuery } from "../../App/store/api/kinopoiskApi";
import { Button } from "../Button/Button";

export function CardInfo() {
    const { id } = useParams();
    const { data, isLoading } = useGetFilmsByIdQuery(id);
    if (isLoading) return <h1>Loading...</h1>;

    return (
        <div className={style.container}>
            <Link to="/">
                <svg
                    className={style.exit}
                    fill="#000000"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="800px"
                    height="800px"
                    viewBox="0 0 512 512"
                    xmlSpace="preserve"
                >
                    <polygon
                        points="335.188,154.188 256,233.375 176.812,154.188 154.188,176.812 233.375,256 154.188,335.188 176.812,357.812 
	256,278.625 335.188,357.812 357.812,335.188 278.625,256 357.812,176.812 "
                    />
                    <path
                        d="M256,0C114.609,0,0,114.609,0,256s114.609,256,256,256s256-114.609,256-256S397.391,0,256,0z M256,472
	c-119.297,0-216-96.703-216-216S136.703,40,256,40s216,96.703,216,216S375.297,472,256,472z"
                    />
                </svg>
            </Link>
            <Card src={data.posterUrlPreview} />
            <div className="style.containerInfo">
                <h2>{data.nameRu}</h2>
                <p>{data.description}</p>
                <Button text={"Добавить в избранное"}> </Button>
            </div>
        </div>
    );
}
