import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './automatedReturns.css';
import store from './store'
import App from './App';
import '../node_modules/uikit/dist/css/uikit.css'
import * as serviceWorker from './serviceWorker';

const appDom = (
  <Provider store={store}>
    <App />
  </Provider>
)
const appRoot = document.getElementById('root')

ReactDOM.render(appDom, appRoot);

serviceWorker.unregister();


