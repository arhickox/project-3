import React, { Component } from "react";
import SpeciesInfo from "../SpeciesInfo";
import PersonalInfo from "../PersonalInfo";
import "./style.css";

class SpeciesOverall extends Component {
    render() {
        return (
            <div id="creation_container">
                <PersonalInfo />
                <SpeciesInfo />
            </div>
        )
    }
};
export default SpeciesOverall;