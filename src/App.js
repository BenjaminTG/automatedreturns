import React from 'react';
import logo from './logo.svg';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import history from './store/history'
import store from './store'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

import RouterView from './router'

function App() {
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <RouterView />
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
