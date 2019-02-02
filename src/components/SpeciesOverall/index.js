import React from "react";
import "./style.css";

function SpeciesInfo(props) {
    return (
        <div className="card">
            <div className="card-header">
                Species Selection
        </div>
            <div className="card-body">
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
            </div>
        </div>
    )
}

export default SpeciesInfo;