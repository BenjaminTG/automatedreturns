import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import createReturn from "./createReturn"
import returnStatus from "./returnStatus"

const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    createReturn,
    returnStatus,
});

export default createRootReducer