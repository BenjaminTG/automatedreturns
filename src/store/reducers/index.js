import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import createReturn from "./createReturn"
import returnStatus from "./returnStatus"
import updateReturnExchange from './updateReturnExchange'

const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    createReturn,
    updateReturnExchange,
    returnStatus,
});

export default createRootReducer