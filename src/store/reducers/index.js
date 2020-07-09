import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import createReturn from "./createReturn"

import belReducer from './belReducer'
import returnStatus from "./returnStatus"

const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    createReturn,
    belReducer,
    returnStatus
});

export default createRootReducer