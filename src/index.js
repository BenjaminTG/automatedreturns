import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import './automatedReturns.css';
import store from './store'
import App from './App';
import '../node_modules/uikit/dist/css/uikit.css'
import * as serviceWorker from './serviceWorker';
import i18n from './i18n.js'
import { I18nextProvider } from 'react-i18next';

const appDom = (
  <Provider store={store}>
    <I18nextProvider i18n={i18n}>
      <App />
    </I18nextProvider>
  </Provider>
)
const appRoot = document.getElementById('root')

ReactDOM.render(appDom, appRoot);

serviceWorker.unregister();


