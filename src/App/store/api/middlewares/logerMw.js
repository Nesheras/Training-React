import { createListenerMiddleware } from "@reduxjs/toolkit";
import HistorySlice from "../Slices/HistorySlice";

export const loggerMiddleware = createListenerMiddleware();
loggerMiddleware.startListening({
    actionCreator: HistorySlice.actions.removeHistory,
    effect: () => console.log("removed from history"),
});
