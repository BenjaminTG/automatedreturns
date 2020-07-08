import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import createReturn from "./createReturn"
import belReducer from './belReducer'

const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    createReturn,
    belReducer
});

export default createRootReducer