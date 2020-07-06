import { createStore, applyMiddleware } from "redux";
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'
import { routerMiddleware } from 'connected-react-router'
import history from "./history"
import createRootReducer from './reducers'

console.log(history)

const middleware = [
    routerMiddleware(history),   
    ReduxThunk

]


export default createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
);
