import React, { Component } from "react";

class Create extends Component {

    render () {
    return (

    <div id="creation_container">

<div class="container col-8">
    <h1 style={{textAlign: 'center'}}>Personal Information</h1><br />
    <form>
        <div class="form-group">
            <label for="newCharacterName">Character Name</label>
            <input type="text" class="form-control" id="newCharacterName" />
        </div>
        <div class="form-group">
            <label for="newCharacterGender">Gender</label>
            <input type="text" class="form-control" id="newCharacterGender" />
        </div>
        <div class="form-group">
            <label for="newCharacterHeight">Height</label>
            <input type="text" class="form-control" id="newCharacterHeight" />
        </div>
        <div class="form-group">
            <label for="newCharacterHair">Hair</label>
            <input type="text" class="form-control" id="newCharacterHair" />
        </div>
        <div class="form-group">
            <label for="newCharacterEyes">Eyes</label>
            <input type="text" class="form-control" id="newCharacterEyes" />
        </div>
        <div class="form-group">
            <label for="newCharacterFeatures">Notable Features</label>
            <textarea class="form-control" id="newCharacterFeatures" rows="3"></textarea>
        </div>
    </form>
</div>
<br />
<hr style={{border: '1px solid black'}} />
<h1 style={{textAlign: 'center'}}>Species Selection</h1><br />
<div class="row">
    <div class="col-sm-6" id="species_stats">
        <div class="card">
            <div class="card-body">
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2 align" align="center">
                        <strong>Bra</strong>
                    </div>
                    <div class="col col-lg-2" align="center">
                        <strong>Agi</strong>
                    </div>
                    <div class="col col-lg-2" align="center">
                        <strong>Int</strong>
                    </div>
                    <div class="col col-lg-2" align="center">
                        <strong>Cun</strong>
                    </div>
                    <div class="col col-lg-2" align="center">
                        <strong>Will</strong>
                    </div>
                    <div class="col col-lg-2" align="center">
                        <strong>Pre</strong>
                    </div>
                </div>
                <div class="row justify-content-md-center">
                    <div class="col col-lg-2" id="statBrawn" align="center">
                    </div>
                    <div class="col col-lg-2" id="statAgility" align="center">
                    </div>
                    <div class="col col-lg-2" id="statIntelligence" align="center">
                    </div>
                    <div class="col col-lg-2" id="statCunning" align="center">
                    </div>
                    <div class="col col-lg-2" id="statWillpower" align="center">
                    </div>
                    <div class="col col-lg-2" id="statPresence" align="center">
                    </div>
                </div>
            </div>
            <br />
            <div class="row justify-content-center">
                <div class="col col-lg-9">
                    <b>Wound Threshold: </b><div id="woundThreshold" style={{display: 'inline'}}></div> + Brawn
                </div><br />
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-lg-9">
                    <b>Strain Threshold: </b><div id="strainThreshold" style={{display: 'inline'}}></div> + Willpower
                </div><br />
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-lg-9">
                    <b>Starting Experience: </b><div id="speciesStartingXP" style={{display: 'inline'}}></div> XP
                </div>
            </div>
            <div class="row justify-content-md-center">
                <div class="col col-lg-9">
                    <p><b>Special Ability: </b><div id="speciesAbilityDescription" style={{display: 'inline'}}></div>
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-sm-6" id="species_image">
        <div class="card">
            <div class="card-body">
                <div id="speciesImageInsert"></div>
            </div>
        </div>
    </div>
</div>
<br />
<div class="row" id="species_button_row">
    <button type="button" class="btn btn-outline-primary species-button" id="human_button" onClick={this.chooseHuamn}>Human</button>
    <button type="button" class="btn btn-outline-primary species-button" id="twilek_button">Twi'lek</button>
    <button type="button" class="btn btn-outline-primary species-button" id="wookiee_button">Wookiee</button>
    <button type="button" class="btn btn-outline-primary species-button" id="rodian_button">Rodian</button>
    <button type="button" class="btn btn-outline-primary species-button" id="zabrak_button">Zabrak</button>
    <button type="button" class="btn btn-outline-primary species-button" id="ithorian_button">Ithorian</button>
    <button type="button" class="btn btn-outline-primary species-button" id="duros_button">Duros</button>
    <button type="button" class="btn btn-outline-primary species-button" id="gand_button">Gand</button>
    <button type="button" class="btn btn-outline-primary species-button" id="mon_calamari_button">Mon Calamari</button>
    <button type="button" class="btn btn-outline-primary species-button" id="droid_button">Droid</button>
</div>
<hr style={{border: '1px solid black'}} />
<div class="container" id="careerMainContainer">
    <h1 style={{textAlign: 'center'}}>Career Selection</h1><br />
    <div class="container">
        <div class="row">
            <div class="col-4">
                <div class="row">
                    <div class="career_block">
                        Smuggler
                    </div>
                    <div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="gunslinger_button">Gunslinger</button>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="pilot_button">Pilot</button>
                        </div>
                    </div>
                </div> <br />
                <div class="row">
                    <div class="career_block">
                        Bounty Hunter
                    </div>
                    <div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="assassin_button">Assassin</button>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="gadgeteer_button">Gadgeteer</button>
                        </div>
                    </div>
                </div><br />
                <div class="row">
                    <div class="career_block">
                        Soldier
                    </div>
                    <div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="commando_button">Commando</button>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="medic_button">Medic</button>
                        </div>
                    </div>
                </div><br />
                <div class="row">
                    <div class="career_block">
                        Jedi
                    </div>
                    <div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="protector_button">Protector</button>
                        </div>
                        <div class="row">
                            <button type="button" class="btn btn-outline-primary" id="sage_button">Sage</button>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="col-sm-8">
                    <div class="card" style={{width: '600px'}}>
                        <div class="card-body">
                            <h3 style={{textAlign: 'center'}}>
                                <div id="careerTitle" style={{display: 'inline'}}></div> :
                                <div id="specializationTitle" style={{display: 'inline'}}></div>
                            </h3>
                            <h5 style={{textAlign: 'center'}}>
                                <div id="careerTagline"></div>
                            </h5>
                            <p>
                                <div id="careerDescription"></div>
                            </p>
                            <b>Specialization Skills: </b><div id="careerSkills"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

</div>

    );
    };
}

export default Create;
