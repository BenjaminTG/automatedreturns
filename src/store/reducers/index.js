import { combineReducers } from "redux";
import { connectRouter } from 'connected-react-router'
import createReturn from "./createReturn"

const createRootReducer = (history) => combineReducers({
    router:connectRouter(history),
    createReturn 
    
});

export default createRootReducer