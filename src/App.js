import React from 'react';
import logo from './logo.svg';
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
    <div>
      <Router>
        <RouterView />
      </Router>
    </div>
  );
}

export default App;
