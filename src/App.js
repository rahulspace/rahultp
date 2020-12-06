import React from "react";
import {
  Switch,
  Route,
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';

import Home from './views/home/Home'

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
