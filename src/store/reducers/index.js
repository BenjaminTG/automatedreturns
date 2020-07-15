import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import createReturn from "./createReturn"
import updateReturnExchange from './updateReturnExchange'
import returnStatus from "./returnStatus"

const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    createReturn,
    updateReturnExchange,
    returnStatus
});

export default createRootReducer