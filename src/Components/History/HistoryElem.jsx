import { Link } from "react-router-dom";

export const HistoryElem = ({ search, handleRemoveHistory, index }) => {
    return (
        <div style={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Link to={`/search/${search}`}>
                <p style={{ display: "inline", fontSize: "20px" }}>
                    {index + 1 + "."}
                </p>
                <p style={{ display: "inline", fontSize: "20px" }}>{search}</p>
            </Link>

            <button
                style={{
                    height: "maxContent",
                    width: "30px",
                    background: "chocolate",
                    borderRadius: "10px",
                }}
                onClick={(e) => {
                    e.stopPropagation();
                    handleRemoveHistory();
                }}
            >
                X
            </button>
        </div>
    );
};
