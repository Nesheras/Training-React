import React from "react";
import { useHistory } from "../../App/store/api/hooks/useHistory";
import { HistoryElem } from "../../Components/History/HistoryElem";

function HistoryPage() {
    const { history, removeHistory, isLoading } = useHistory();

    if (isLoading) {
        return <h1>Загрузка</h1>;
    }

    function handleRemoveHistory(search) {
        removeHistory({
            id: search,
        });
    }

    if (history?.length === 0) {
        return <h2>У вас пока нет истории</h2>;
    }
    return (
        <div>
            <h1 style={{ fontSize: "40px" }}>История Поиска:</h1>
            <div>
                {history?.map((search, index) => (
                    <HistoryElem
                        index={index}
                        key={search}
                        search={search}
                        handleRemoveHistory={() => handleRemoveHistory(search)}
                    />
                ))}
            </div>
        </div>
    );
}

export default HistoryPage;
