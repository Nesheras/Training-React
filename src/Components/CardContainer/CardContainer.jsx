import styleCardContainer from "./CardContainer.module.css";
import { useState, useEffect } from "react";
import { Card } from "../Card/Card";
import { Link } from "react-router-dom";

export function CardContainer() {
    const [film, setFilms] = useState([]);

    useEffect(() => {
        fetch("https://kinopoiskapiunofficial.tech/api/v2.2/films", {
            method: "GET",
            headers: {
                "X-API-KEY": "37a34732-1480-4ba0-a5d5-6a88059ba2ae",
                "Content-Type": "application/json",
            },
        })
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch data");
                }
                return res.json();
            })
            .then((json) => {
                setFilms(json.items);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    return (
        <div className={styleCardContainer.cardContainer}>
            {film.map((item) => {
                return (
                    <Link
                        to={`/info/${item.kinopoiskId}`}
                        key={item.kinopoiskId}
                    >
                        <Card src={item.posterUrl} />
                    </Link>
                );
            })}
        </div>
    );
}
