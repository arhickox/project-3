import React, { Component } from "react";
import List from "../List";
import Details from "../Details";

import Amplify, { API } from "aws-amplify";
import aws_exports from "../aws-exports";
Amplify.configure(aws_exports);

class View extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name:"",
            content: "",
            title: "",
            list: [],
            item: {},
            showDetails: false
        };
    }


    delete = async id => {
        //TODO: Implement functionality
    };

    render() {
        return (
            <div className="container">
                {this.state.showDetails ? (
                    <Details
                        item={this.state.item}
                        loadListPage={this.loadListPage}
                        delete={this.delete}
                    />
                ) : (
                        <List list={this.state.list} loadDetailsPage={this.loadDetailsPage} />
                    )}
            </div>
        );
    }
}

export default View;
