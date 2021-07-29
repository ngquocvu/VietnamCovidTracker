import { combineReducers } from "redux";
import pageReducer from "./page";

export const rootReducer = combineReducers({
  page: pageReducer,
});
export type RootState = ReturnType<typeof rootReducer>;
