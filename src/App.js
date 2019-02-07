import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Main from './pages/Main';
import Create from './pages/Create';
import View from './pages/View';
import Begin from './pages/Begin';
import Navbar from "./components/Navbar/index";
import './App.css';
import { withAuthenticator } from 'aws-amplify-react';
import Amplify, { API } from "aws-amplify";
import aws_exports from './aws-exports';

Amplify.configure(aws_exports);


let apiName = 'charactersApi';
let path = '/view';


class App extends Component {
  componentDidMount(){
    API.get(apiName, path).then(response => {
      console.log(response)
    });
  }
  render() {
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
}

export default withAuthenticator(App, true);