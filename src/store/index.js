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

let store = createStore(
    createRootReducer(history),
    composeWithDevTools(applyMiddleware(...middleware))
);

// if(module.hot) {
//     // Enable Webpack hot module replacement for reducers
//     module.hot.accept('./reducers', () => {
//       const nextReducer = require('./reducers/index').default;
//       store.replaceReducer(nextReducer);
//     });
//   }

  export default store
