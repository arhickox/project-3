import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main';
import Create from './pages/Create';
import View from './pages/View';
import Begin from './pages/Begin';
import Navbar from "./components/Navbar/index";
import './App.css';
import { withAuthenticator } from 'aws-amplify-react'

function App() {
  return (
    <Router>
      <div>
      <Navbar />
          <Route exact path="/" component={Main} />
          <Route exact path="/main" component={Main} />
          <Route exact path="/create" component={Create} />
          <Route exact path="/view" component={View} />
          <Route exact path="/begin" component={Begin} />
      </div>
    </Router>
  );
}

export default withAuthenticator(App);
