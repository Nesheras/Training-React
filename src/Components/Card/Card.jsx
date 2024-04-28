import styleCard from "./Card.module.css";
export function Card({ src }) {
    return <img src={src} alt="" className={styleCard.card} />;
}
