import { combineReducers } from "redux";
import dialogReducer from "./dialog";
import pageReducer from "./page";

export const rootReducer = combineReducers({
  dialog: dialogReducer,
  page: pageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
