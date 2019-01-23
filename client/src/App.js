import React, { Component } from 'react';
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
import './App.css';
import {withAuthenticator} from 'aws-amplify-react';
import { Navigator, Main } from './components';

Amplify.configure(aws_exports);
class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigator />
        <Main />
      </React.Fragment>
    );
  }
}

export default withAuthenticator (App);