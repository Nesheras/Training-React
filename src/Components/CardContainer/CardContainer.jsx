import styleCardContainer from "./CardContainer.module.css";

import { Card } from "../Card/Card";

export function CardContainer() {
    return (
        <div className={styleCardContainer.cardContainer}>
            <Card />
        </div>
    );
}
