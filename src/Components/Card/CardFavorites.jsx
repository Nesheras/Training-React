import styleCard from "./Card.module.css";
export function CardFavorites({ src }) {
    return (
        <div style={{ display: "flex", flexDirection: "column" }}>
            <img src={src} alt="" className={styleCard.card} />
        </div>
    );
}
