import React, { Component } from "react";
import SpeciesOverall from "../components/SpeciesOverall";

class Create extends Component {
    state = {
        brawn: "-",
        agility: "-",
        intelligence: "-",
        cunning: "-",
        willpower: "-",
        presence: "-",
        wound: "-",
        strain: "-",
        experience: "-",
        ability: "-"
    }

    handleSpeciesBtnClick = event => {

        const btnSpeciesType = event.target.attributes.getNamedItem("data-value").value;

        if (btnSpeciesType === "human") {
            this.setState({ brawn: 2 });
        }
    };

render() {
    return (

        <div>
            <div className="card">
            <div className="card-header">
                Species Selection
        </div>
            <div className="card-body">
                <div className={["row"]}>
                    <div className={["col-sm-6", "species_stats"]}>
                        <b>Brawn:</b> {this.state.brawn} <br />
                        <b>Agility:</b> {this.state.agility} <br />
                        <b>Intelligence:</b> {this.state.intelligence} <br />
                        <b>Cunning:</b> {this.state.cunning} <br />
                        <b>Willpower:</b> {this.state.willpower} <br />
                        <b>Presence:</b> {this.state.presence} <br />
                        <b>Wound Threshold:</b> {this.state.wound} + Brawn <br />
                        <b>Strain Threshold:</b> {this.state.strain} + Willpower <br />
                        <b>Starting Experience:</b> {this.state.experience} <br />
                        <b>Special Ability:</b> {this.state.ability} <br />
                    </div>
                    <div className={["col-sm-6", "species_image"]}>
                        words
                </div>
                </div>
                <div className={["buttonDiv"]}>
                    <input
                        type="button"
                        value="Human"
                        data-value="human"
                        className="btn btn-outline-primary species-button"
                        onClick={this.handleSpeciesBtnClick}
                    />
                    <input
                        type="button"
                        value="Twi'lek"
                        data-value="twilek"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Wookiee"
                        data-value="wookiee"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Rodian"
                        data-value="rodian"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Zabrak"
                        data-value="zabrak"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Ithorian"
                        data-value="ithorian"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Duros"
                        data-value="duros"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Gand"
                        data-value="gand"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Mon Calamari"
                        data-value="moncalamari"
                        className="btn btn-outline-primary species-button"
                    />
                    <input
                        type="button"
                        value="Droid"
                        data-value="droid"
                        className="btn btn-outline-primary species-button"
                    />
                </div>
            </div>
        </div>

        </div>

    );
};
}
export default Create;
