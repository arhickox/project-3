import React from "react";
import "./style.css";

function SpeciesInfo(props) {
    return (
        <div className="card">
            <div className="card-header">
                Featured
  </div>
            <div className="card-body">
                <h5 className="card-title">Species Selection</h5>
                <div className={["col-sm-6", "species_stats"]}>
                    <div className="card">
                        <div className="card-body">
                            Brawn: {props.brawn}
                            Agility: {props.agility}
                            Intelligence: {props.intelligence}
                            Cunning: {props.cunning}
                            Willpower: {props.willpower}
                            Presence: {props.presence}
                            Wound Threshold: {props.wound} + Brawn
                    Strain Threshold: {props.strain} + Willpower
                    Starting Experience: {props.experience}
                            Special Ability: {props.ability}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpeciesInfo;