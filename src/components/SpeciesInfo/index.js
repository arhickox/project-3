import React from "react";
import "./style.css";

function SpeciesInfo(props) {
    return (
        <div className="card">
            <div className="card-header">
                Species Selection
        </div>
            <div className="card-body">
                <div className={["row"]}>
                    <div className={["col-sm-6", "species_stats"]}>
                        <b>Brawn:</b> {props.brawn} <br />
                        <b>Agility:</b> {props.agility} <br />
                        <b>Intelligence:</b> {props.intelligence} <br />
                        <b>Cunning:</b> {props.cunning} <br />
                        <b>Willpower:</b> {props.willpower} <br />
                        <b>Presence:</b> {props.presence} <br />
                        <b>Wound Threshold:</b> {props.wound} + Brawn <br />
                        <b>Strain Threshold:</b> {props.strain} + Willpower <br />
                        <b>Starting Experience:</b> {props.experience} <br />
                        <b>Special Ability:</b> {props.ability} <br />
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
                        onClick={props.handleSpeciesBtnClick}
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
    )
}

export default SpeciesInfo;