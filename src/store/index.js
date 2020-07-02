import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import ReduxThunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension'

const middleware = [
    ReduxThunk,
]

export default createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
);
