import { combineReducers } from "redux";
import { homeBuildReducer } from "./reducers/homeBuildReducer";
import { BannerinfoReducer } from "./reducers/bannerReducer";
import { homeAboutReducer } from "./reducers/homeAboutReducer";
import { partnersReducer } from "./reducers/partnerReducer";
export const rootReducer = combineReducers({
  homeBuildReducer,
  BannerinfoReducer,
  homeAboutReducer,
  partnersReducer,
});
