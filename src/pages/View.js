import React, { Component } from "react";
import Amplify, { API } from "aws-amplify";
import aws_exports from '../aws-exports';

Amplify.configure(aws_exports);

let apiName = 'charactersApi';
let path = '/characters';

class View extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fullname: "",
      gender:"",
      height:"",
      weight:"",
      haircolor:"",
      eyecolor:"",
      bodytype:"",
      scars:false,
      notes:"",
      list:[],
      item:{},
      showDetails: false
    };
  }

  componentDidMount() {
    API.get(apiName, path).then(res => {
      this.setState({ characters: res.data });
      console.log(this.state.characters);
    }).catch(error => {
      if (error.response) {
        console.log(error.response.data)
      } else if (error.request) {
        console.log(error.request);
      } else {
        console.log('Error', error.message);
      }
      console.log(error.config);
    });
  }

  render() {
    return (
      <div className="container">
        
      </div>
    );
  }
}
export default View;