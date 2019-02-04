import React, { Component } from "react";
import "./style.css";

class PersonalInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname: "",
            gender: "",
            height: "",
            weight: "",
            haircolor: "",
            eyecolor: "",
            bodytype: "",
            scars: true,
            notes: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log('A Character was created: ' + this.state);
        event.preventDefault();
    }
    render() {
        return (
            <div className="container col-8">
                <h1>Personal Information</h1><br />
                <form onSubmit={this.handleSubmit}>
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="newCharacterName">Character Name</label>
                            <input type="text" className="form-control" id="newCharacterName" name="fullname" aria-describedby="nameCharacter" placeholder="Name of your character" value={this.state.fullname} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label className="newCharacterGender">Gender</label>
                            <input type="text" className="form-control" id="newCharacterGender" name="gender" aria-describedby="genderCharater" placeholder="Gender of your character" value={this.state.gender} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="newCharacterHeight">Height</label>
                            <input type="text" className="form-control" id="newCharacterHeight" name="height" aria-describedby="heightCharacter" placeholder="Height of your character" value={this.state.height} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label className="newCharacterWeight">Weight <i className="fas fa-weight    "></i></label>
                            <input type="text" className="form-control" id="newCharacterWeight" name="weight" aria-describedby="weightCharacter" placeholder="Weight of your character" value={this.state.weight} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="newCharacterHair">Hair Color</label>
                            <input type="text" className="form-control" id="newCharacterHair" name="haircolor" aria-describedby="hairCharacter" placeholder="Hair color of your character" value={this.state.haircolor} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label className="newCharacterEyes">Eyes Color</label>
                            <input type="text" className="form-control" id="newCharacterEyes" name="eyecolor" aria-describedby="eyeCharacter" placeholder="Eye color of your character" value={this.state.eyecolor} onChange={this.handleChange} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-6">
                            <label className="newCharacterBodyType">Body Type</label>
                            <input type="text" className="form-control" id="newCharacterBodyType" name="bodytype" aria-describedby="bodyTypeCharacter" placeholder="Body type of your character" value={this.state.bodytype} onChange={this.handleChange} />
                        </div>
                        <div className="form-group col-6">
                            <label className="newCharacterScarSelect">Scars</label>
                            <select className="form-control" name="scars" value={this.state.scars} onChange={this.handleChange} id="newCharacterScarSelect" aria-describedby="scarSelectCharacter" >
                                <option defaultValue="No">No</option>
                                <option value="Yes">Yes</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label className="newCharacterFeatures">Notable Features</label>
                        <textarea className="form-control" name="notes" value={this.state.notes} onChange={this.handleChange} id="newCharacterFeatures" rows="3"></textarea>
                    </div>
                    <input type="submit" value="Submit" className="btn btn-info" />
                </form>
                <div className="col-6">
                    <pre>
                        <code>
                            <p>Character Name: {this.state.fullname}</p>
                            <p>Gender: {this.state.gender}</p>
                            <p>Height: {this.state.height}</p>
                            <p>Weight: {this.state.weight}</p>
                            <p>Hair Color: {this.state.haircolor}</p>
                            <p>Eye Color: {this.state.eyecolor}</p>
                            <p>Body Type: {this.state.bodytype}</p>
                            <p>Scars: {this.state.scars}</p>
                            <p>Notes: {this.state.notes}</p>
                        </code>
                    </pre>
                </div>
            </div>

        );
    }
}

export default PersonalInfo;