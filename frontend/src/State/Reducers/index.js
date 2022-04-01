import { combineReducers } from "redux";
import absencesReducer  from "./absence";

const rootReducer = combineReducers({
    absences:absencesReducer
});

export default rootReducer;