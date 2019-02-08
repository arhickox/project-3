import API from "../utils/API";
import React, { Component } from "react";
import SpeciesOverall from "../components/SpeciesOverall";

class Create extends Component {
    state = {
        //Species Selection
        species: "",
        speciesBrawn: "",
        speciesAgility: "",
        speciesIntelligence: "",
        speciesCunning: "",
        speciesWillpower: "",
        speciesPresence: "",
        speciesWound: "",
        speciesStrain: "",
        experience: "",
        ability: "",
        //Career Selection
        career: "",
        specialization: "",
        tagline: "",
        career_description: "",
        career_skills: "",
        //Personal Info
        fullname: "",
        gender: "",
        height: "",
        weight: "",
        haircolor: "",
        eyecolor: "",
        bodytype: "",
        scars: false,
        notes: "",
        //Skills Selection
        brawn: 0,
        agility: 0,
        intelliegnce: 0,
        cunning: 0,
        willpower: 0,
        presence: 0,
        astrogation: 0,
        athletics: 0,
        charm: 0,
        coercion: 0,
        computers: 0,
        cool: 0,
        coordination: 0,
        deception: 0,
        discipline: 0,
        leadership: 0,
        mechanics: 0,
        medicine: 0,
        negotiation: 0,
        perception: 0,
        planetary: 0,
        space: 0,
        resilience: 0,
        skulduggery: 0,
        stealth: 0,
        streetwise: 0,
        survival: 0,
        vigilance: 0,
        brawl: 0,
        Gunnery: 0,
        melee: 0,
        rangedLight: 0,
        rangedHeavy: 0,
        coreWorlds: 0,
        education: 0,
        lore: 0,
        outerRim: 0,
        underworld: 0,
        warfare: 0,
        xenology: 0
    }

    handleSpeciesBtnClick = event => {

        const btnSpeciesType = event.target.attributes.getNamedItem("data-value").value;

        if (btnSpeciesType === "human") {
          this.setState({
            species: "Human",
            image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/human.jpg' className='species_img' height='450' width='290' />,
            speciesBrawn: 2,
            speciesAgility: 2,
            speciesIntelligence: 2,
            speciesCunning: 2,
            speciesWillpower: 2,
            speciesPresence: 2,
            speciesWound: 10,
            speciesStrain: 10,
            experience: 110,
            ability: <text>"Humans start the game with <u>one rank in two different non-career skills of their choice</u>. They still may not train these skills above rank 2 at character creation."</text>
          });
        } else if (btnSpeciesType === "twilek") {
          this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/twilek.png' className='species_img' height='450' width='290' />,
            species: "Twi'lek",
            speciesBrawn: 1,
            speciesAgility: 2,
            speciesIntelligence: 2,
            speciesCunning: 2,
            speciesWillpower: 2,
            speciesPresence: 3,
            speciesWound: 10,
            speciesStrain: 11,
            experience: 100,
            ability: <text>Twi'leks begin the game with one rank in either <u>Charm</u> or <u>Deception</u>. They still may not train Charm or Deception above rank 2 during character creation. When making skill checks, Twi'leks may remove [1 Setback Die] imposed due to arid or hot environmental conditions.</text>
          });
        } else if (btnSpeciesType === "wookiee") {
            this.setState({ species: "Wookiee" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/wookiee.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 3 });
            this.setState({ speciesAgility: 2 });
            this.setState({ speciesIntelligence: 2 });
            this.setState({ speciesCunning: 2 });
            this.setState({ speciesWillpower: 1 });
            this.setState({ speciesPresence: 2 });
            this.setState({ speciesWound: 14 });
            this.setState({ speciesStrain: 8 });
            this.setState({ experience: 90 });
            this.setState({ ability: <text>"Wookiees begin the game with one rank in <u>Brawl</u>. They still may not train Brawl above rank 2 during character creation. <br /> <b>Wookiee Rage: </b> When a Wookiee has suffered any wounds, he deals + 1 damage to Brawl and Melee attacks. When a Wookiee is Critically Injured, he instead deals + 2 damage to Brawl and Melee attacks."</text> });
        } else if (btnSpeciesType === "rodian") {
            this.setState({ species: "Rodian" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/rodian.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 2 });
            this.setState({ speciesAgility: 3 });
            this.setState({ speciesIntelligence: 2 });
            this.setState({ speciesCunning: 2 });
            this.setState({ speciesWillpower: 1 });
            this.setState({ speciesPresence: 2 });
            this.setState({ speciesWound: 10 });
            this.setState({ speciesStrain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Rodians begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. Rodians start with one rank in the <u>Expert Tracker talent</u>."</text> });
        } else if (btnSpeciesType === "zabrak") {
            this.setState({ species: "Zabrak" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/zabrak.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 2 });
            this.setState({ speciesAgility: 2 });
            this.setState({ speciesIntelligence: 2 });
            this.setState({ speciesCunning: 2 });
            this.setState({ speciesWillpower: 3 });
            this.setState({ speciesPresence: 1 });
            this.setState({ speciesWound: 10 });
            this.setState({ speciesStrain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Zabrak begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. <br /><b>Fearsome Counterance: </b> Zabrak add automatic [1 Advantage] to all Coercion checks they make."</text> });
        } else if (btnSpeciesType === "ithorian") {
            this.setState({ species: "Ithorian" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/ithorian.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 2 });
            this.setState({ speciesAgility: 1 });
            this.setState({ speciesIntelligence: 2 });
            this.setState({ speciesCunning: 2 });
            this.setState({ speciesWillpower: 3 });
            this.setState({ speciesPresence: 2 });
            this.setState({ speciesWound: 9 });
            this.setState({ speciesStrain: 12 });
            this.setState({ experience: 90 });
            this.setState({ ability: <text>"Ithorians begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. <br /> <b>Ithorian Bellow: </b> With two mouths and four throats, Ithorians have a unique natural weapon they can call upon when threatened (Resilience; Damage 6; Critical 4; Range [Short]; Blast 3, Concussive 1, Slow-Firing 2, Stun Damage). Each time they use this ability, they suffer 3 strain."</text> });
        } else if (btnSpeciesType === "duros") {
            this.setState({ species: "Duros" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/duros.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 1 });
            this.setState({ speciesAgility: 2 });
            this.setState({ speciesIntelligence: 3 });
            this.setState({ speciesCunning: 2 });
            this.setState({ speciesWillpower: 2 });
            this.setState({ speciesPresence: 2 });
            this.setState({ speciesWound: 11 });
            this.setState({ speciesStrain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Duros begin the game with one rank in <u>Piloting (Space)</u>. They still may not train Piloting (Space) above rank 2 during character creation. <br /><b>Intuitive Navigation: </b> Duros may add [1 Advantage] to all Astrogation checks they make."</text> });
        } else if (btnSpeciesType === "gand") {
            this.setState({ species: "Gand" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/gand.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 2 });
            this.setState({ speciesAgility: 2 });
            this.setState({ speciesIntelligence: 2 });
            this.setState({ speciesCunning: 2 });
            this.setState({ speciesWillpower: 3 });
            this.setState({ speciesPresence: 1 });
            this.setState({ speciesWound: 10 });
            this.setState({ speciesStrain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Gands begin the game with one rank in <u>Discipline</u>. They still may not train Discipline above rank 2 during character creation. <br /><b>Ammonia Breathers: </b> One notable difference between the two main sub-species of Gand is that one has lungs and one does not. Those that have lungs breathe an ammonia gas mixture. Those without lungs do not respire and gain all necessary metabolic substances through food. When playing a Gand, each player chooses whether he wishes his character to have lungs or not. If he selects to be playing a lungless Gand, his character is immune to suffocation (but not the wounds suffered from being exposed to vacuum). If he chooses to play a Gand with lungs, he starts the game with an ammonia respirator, and treats oxygen as a dangerous atmosphere with Rating 8. However, he gains + 10 starting XP."</text> });
        } else if (btnSpeciesType === "moncalamari") {
            this.setState({ species: "Mon Calamari" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/monCalamari.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 2 });
            this.setState({ speciesAgility: 2 });
            this.setState({ speciesIntelligence: 3 });
            this.setState({ speciesCunning: 1 });
            this.setState({ speciesWillpower: 2 });
            this.setState({ speciesPresence: 2 });
            this.setState({ speciesWound: 10 });
            this.setState({ speciesStrain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Mon Calamari begin the game with one rank in <u>Knowledge (Education)</u>. They still may not train Knowledge (Education) above rank 2 during character creation. <br /><b>Amphibious: </b> Mon Calamari can breathe underwater without penalty and never suffer movement penalties for traveling through water."</text> });
        } else if (btnSpeciesType === "droid") {
            this.setState({ species: "Droid" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/droid.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ speciesBrawn: 1 });
            this.setState({ speciesAgility: 1 });
            this.setState({ speciesIntelligence: 1 });
            this.setState({ speciesCunning: 1 });
            this.setState({ speciesWillpower: 1 });
            this.setState({ speciesPresence: 1 });
            this.setState({ speciesWound: 10 });
            this.setState({ speciesStrain: 10 });
            this.setState({ experience: 175 });
            this.setState({ ability: <text>"Droids do not need to eat, sleep, or breathe, and are unaffected by toxins or poisons. Droids have a cybernetic implant cap of 6 instead of their Brawn rating. In addition, after selecting their career, a Droid Player Character may train one rank in six of the eight career skills (instead of the usual four). After selecting their first specialization, a Droid Player Character may train one rank in three of the four specialization skills (instead of the usual two). <br /><b>Inorganic: </b> Since droids are inorganic, they do not gain the benefits of recovering with a bacta tank, stimpack, or Medicine skill checks. Droids do recover naturally by resting, as their systems attempt self-repairs. Otherwise, droids need to be tended to with a Mechanics check, using the same difficulties and results of Medicine checks for organic beings. Emergency repair patches can be used to repair damage just like stimpacks are used on organic beings. Due to their resilient metallic construction, droids start the game with one rank in the Enduring talent. <br /><b>Mechanical Being: </b> Droids cannot become Force sensitive, nor acquire a Force Rating by any means. Droids cannot use Force powers, and also cannot be affected by mind-altering Force powers."</text> });
        }
    };

    handleCareerBtnClick = event => {

        const btnCareerType = event.target.attributes.getNamedItem("data-value").value;

        if (btnCareerType === "gunslinger") {
            this.setState({ career: "Smuggler" });
            this.setState({ specialization: "Gunslinger" });
            this.setState({ tagline: "The Quick Draw" });
            this.setState({ career_description: "The Gunslinger knows better than most that making a living in the Outer Rim Territories is a constant struggle. He needs to be fast on the draw to stay alive. The Gunslinger and his beloved sidearm are inseparable, but he often carries a holdout weapon when stuck in a hostile, target-rich environment. To face off with a Gun­slinger is a dangerous and foolish proposition." });
            this.setState({ career_skills: "Coordination, Deception, Knowledge (Underworld), Perception, Piloting (Space), Skulduggery, Streetwise, Vigilance, Coercion, Cool, Knowl­edge (Outer Rim) and Ranged (Light)" });
        } else if (btnCareerType === "pilot") {
            this.setState({ career: "Smuggler" });
            this.setState({ specialization: "Pilot" });
            this.setState({ tagline: "A Galaxy of Destinations" });
            this.setState({ career_description: "Plenty of folks know how to fly a starship, but a Smuggler who specializes as a Pilot develops a relationship with his ship, and it becomes an extension of his wit and his will. He can make a plodding old transport run far above its performance ratings, and given time and some modifications, he can turn it into one of the fleetest and most maneuverable craft ever to take to the stars." });
            this.setState({ career_skills: "Coordination, Deception, Knowledge (Underworld), Perception, Piloting (Space), Skulduggery, Streetwise, Vigilance, Astrogation, Gunnery, Piloting (Planetary), and Piloting (Space)" });
        } else if (btnCareerType === "assassin") {
            this.setState({ career: "Bounty Hunter" });
            this.setState({ specialization: "Assassin" });
            this.setState({ tagline: "Instrument of Policy" });
            this.setState({ career_description: "Whereas most Bounty Hunters focus primarily on the capture of quarry, those who specialize as Assassins are generally tasked with the straightforward proposition of terminating their targets. Assassins tend to prefer getting in quietly, taking out targets (either up close or sniping from afar), and leaving just as silently as they entered. Their talents are very appropriate for this kind of work." });
            this.setState({ career_skills: "Athletics, Brawl, Perception, Piloting (Planetary), Piloting (Space), Ranged (Heavy), Streetwise, Vigilance, Melee, Ranged (Heavy), Skulduggery, and Stealth." });
        } else if (btnCareerType === "gadgeteer") {
            this.setState({ career: "Bounty Hunter" });
            this.setState({ specialization: "Gadgeteer" });
            this.setState({ tagline: "Connoisseur of Tech" });
            this.setState({ career_description: "Considering how often a single Bounty Hunter finds himself faced with terrible odds (more often than not, an acquisition has friends or employees who work hard to protect him), it's not surprising how many specialize in high-tech gear and weapons. The Gadgeteer excels at presenting himself as a one-person battle force, at least for a short time. Using both the latest tech and his own personally-modified gear, a Bounty Hunter with this specialization can be hard to stop." });
            this.setState({ career_skills: "Athletics, Brawl, Perception, Piloting (Planetary), Piloting (Space), Ranged (Heavy), Streetwise, Vigilance, Brawl, Coercion, Mechanics, and Ranged (Light)" });
        } else if (btnCareerType === "commando") {
            this.setState({ career: "Soldier" });
            this.setState({ specialization: "Commando" });
            this.setState({ tagline: "Strike the Target" });
            this.setState({ career_description: "Commandos are specialists trained to strike the enemy from unexpected directions to do the most damage in the most vulnerable locations. Commando teams are often used like surgical instruments by the commanders who have access to them. A Commando knows how to find a target, attack it, disable it, survive the aftermath, and find his way home." });
            this.setState({ career_skills: "Athletics, Brawl, Knowledge (Warfare), Medicine, Melee, Ranged (Light), Ranged (Heavy), Survival, Brawl, Melee, Resilience, and Survival" });
        } else if (btnCareerType === "medic") {
            this.setState({ career: "Soldier" });
            this.setState({ specialization: "Medic" });
            this.setState({ tagline: "Save the Team" });
            this.setState({ career_description: "The Alliance cannot afford to fight a war of attrition the way the Empire can. The enemy can pour thousands of stormtroopers and other forces into a meat-grinder of a battle, taking horrific casualties, without blinking an eye over its losses. Every soldier of the Rebellion is, on the other hand, a valuable asset whose loss Alliance High Command feels keenly. The Medic serves to prevent as many of those losses as possible." });
            this.setState({ career_skills: "Athletics, Brawl, Knowledge (Warfare), Medicine, Melee, Ranged (Light), Ranged (Heavy), Survival, Knowledge (Xenology), Medicine. Resilience, and Vigilance" });
        } else if (btnCareerType === "sage") {
            this.setState({ career: "Jedi" });
            this.setState({ specialization: "Sage" });
            this.setState({ tagline: "Disciple of Harmony" });
            this.setState({ career_description: "Many Jedi know the universal truth: knowledge is power, and understanding a situation can give one a decisive advantage. This holds just as true when resolving disputes or negotiations as it does on the battlefield. A Sage focuses on studying the world around him, recognizing that information offers tre­mendous advantages to himself and his allies. He then uses that power to help change the hearts and minds of others to achieve his goals." });
            this.setState({ career_skills: "Cool, Discipline, Knowledge (Education), Knowledge (Lore), Leadership, Negotiation, Discipline, Knowledge (Education), Knowledge (Xenology), and Medicine" });
        } else if (btnCareerType === "protector") {
            this.setState({ career: "Jedi" });
            this.setState({ specialization: "Protector" });
            this.setState({ tagline: "Keeping the Peace" });
            this.setState({ career_description: "Jedi are often driven by their compassion for the plights of those who cannot protect themselves. Pro­tectors ensure these innocents never come to harm. Few are tougher than a Protector, and even fewer can get through his guard to attack those he defends. Even if his charges do suffer harm, the Protector possesses basic medical knowledge to heal their wounds." });
            this.setState({ career_skills: "Brawl, Cool, Discipline, Melee, Resilience, Vigilance, Ath­letics, Medicine, Ranged (Light), and Resilience" });
        }
    };

    handleChange = event => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = event => {
        console.log(this.state);
        event.preventDefault();
        API.postCharacter(this.state).then(res => {
          console.log(res);
          alert("Character Submited! Head to View Characters to check it out.")
        });
    }

    render() {
        return (

            <div>
                <div className="card personal-card">
                    <div className="card-header">
                    <i className="far fa-pencil-alt"></i> Personal Information <i className="far fa-pencil-alt"></i>
    </div>
                    <div className="card-body background">
                        <div className="container col">
                            <form noValidate onSubmit={this.handleSubmit}>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label className="newCharacterName">Character Name <i className="far fa-signature"></i></label>
                                        <input type="text" className="form-control" id="newCharacterName" name="fullname" aria-describedby="nameCharacter" placeholder="Name of your character" value={this.state.fullname} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="newCharacterGender">Gender <i className="far fa-venus-mars"></i></label>
                                        <input type="text" className="form-control" id="newCharacterGender" name="gender" aria-describedby="genderCharater" placeholder="Gender of your character" value={this.state.gender} onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label className="newCharacterHeight">Height <i className="far fa-ruler"></i></label>
                                        <input type="text" className="form-control" id="newCharacterHeight" name="height" aria-describedby="heightCharacter" placeholder="Height of your character" value={this.state.height} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="newCharacterWeight">Weight <i className="far fa-weight"></i></label>
                                        <input type="text" className="form-control" id="newCharacterWeight" name="weight" aria-describedby="weightCharacter" placeholder="Weight of your character" value={this.state.weight} onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label className="newCharacterHair">Hair Color <i className="far fa-head-side"></i></label>
                                        <input type="text" className="form-control" id="newCharacterHair" name="haircolor" aria-describedby="hairCharacter" placeholder="Hair color of your character" value={this.state.haircolor} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="newCharacterEyes">Eye Color <i className="far fa-eye"></i></label>
                                        <input type="text" className="form-control" id="newCharacterEyes" name="eyecolor" aria-describedby="eyeCharacter" placeholder="Eye color of your character" value={this.state.eyecolor} onChange={this.handleChange} required/>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="form-group col-6">
                                        <label className="newCharacterBodyType">Body Type <i className="far fa-walking"></i></label>
                                        <input type="text" className="form-control" id="newCharacterBodyType" name="bodytype" aria-describedby="bodyTypeCharacter" placeholder="Body type of your character" value={this.state.bodytype} onChange={this.handleChange} required/>
                                    </div>
                                    <div className="form-group col-6">
                                        <label className="newCharacterScarSelect">Scars <i className="far fa-knife-kitchen"></i></label>
                                        <select className="form-control" name="scars" value={this.state.scars} onChange={this.handleChange} id="newCharacterScarSelect" aria-describedby="scarSelectCharacter" required>
                                            <option defaultValue="No">No</option>
                                            <option value="Yes">Yes</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <label className="newCharacterFeatures">Notable Features <i className="far fa-list-ul"></i></label>
                                    <textarea className="form-control" name="notes" value={this.state.notes} onChange={this.handleChange} id="newCharacterFeatures" rows="3"></textarea>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className={["row"]}>

                    <div className="card species-info">
                        <div className="card-header">
                        <i className="far fa-user"></i> Species Selection <i className="far fa-user"></i>
        </div>
                        <div className="card-body background">
                            <div className={["species_stats"]}>
                                <b>Brawn:</b> {this.state.speciesBrawn} <br />
                                <b>Agility:</b> {this.state.speciesAgility} <br />
                                <b>Intelligence:</b> {this.state.speciesIntelligence} <br />
                                <b>Cunning:</b> {this.state.speciesCunning} <br />
                                <b>Willpower:</b> {this.state.speciesWillpower} <br />
                                <b>Presence:</b> {this.state.speciesPresence} <br />
                                <b>Wound Threshold:</b> {this.state.speciesWound} + Brawn <br />
                                <b>Strain Threshold:</b> {this.state.speciesStrain} + Willpower <br />
                                <b>Starting Experience:</b> {this.state.experience} XP <br />
                                <b>Special Ability:</b> {this.state.ability} <br />
                            </div>
                            <div className={["buttonDiv"]}>
                                <input
                                    type="button"
                                    value="Human"
                                    data-value="human"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Twi'lek"
                                    data-value="twilek"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Wookiee"
                                    data-value="wookiee"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Rodian"
                                    data-value="rodian"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Zabrak"
                                    data-value="zabrak"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Ithorian"
                                    data-value="ithorian"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Duros"
                                    data-value="duros"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Gand"
                                    data-value="gand"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Mon Calamari"
                                    data-value="moncalamari"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                                <input
                                    type="button"
                                    value="Droid"
                                    data-value="droid"
                                    className="btn btn-outline-info species-button"
                                    onClick={this.handleSpeciesBtnClick}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="card image-card">
                        <div className="card-header">
                            {this.state.species}
                        </div>
                        <div className="card-body">
                            {this.state.image}
                        </div>
                    </div>
                </div>
                <div className="card career-card">
                    <div className="card-header">
                    <i className="far fa-tools"></i> Career Selection <i className="far fa-tools"></i>
                    </div>
                    <div className="card-body background">
                        <h3 className="careerHeader">{this.state.career} : {this.state.specialization}</h3>
                        <h5 className="careerHeader">{this.state.tagline}</h5>
                        <p>{this.state.career_description}</p>
                        <p><b>Career Skills: </b>{this.state.career_skills}</p>
                        <div className={["buttonDiv"]}>
                            <input
                                type="button"
                                value="Smuggler - Gunslinger"
                                data-value="gunslinger"
                                className="btn btn-outline-warning career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Smuggler - Pilot"
                                data-value="pilot"
                                className="btn btn-outline-warning career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Hunter - Assassin"
                                data-value="assassin"
                                className="btn btn-outline-danger career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Hunter - Gadgeteer"
                                data-value="gadgeteer"
                                className="btn btn-outline-danger career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Soldier - Commando"
                                data-value="commando"
                                className="btn btn-outline-primary career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Soldier - Medic"
                                data-value="medic"
                                className="btn btn-outline-primary career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Jedi - Sage"
                                data-value="sage"
                                className="btn btn-outline-success career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                            <input
                                type="button"
                                value="Jedi - Protector"
                                data-value="protector"
                                className="btn btn-outline-success career-button"
                                onClick={this.handleCareerBtnClick}
                            />
                        </div>
                    </div>
                </div>

                <div className="card personal-card">
                    <div className="card-header">
                    <i className="far fa-clipboard-list-check"></i> Character Skills <i className="far fa-clipboard-list-check"></i>
    </div>
                    <div className="card-body background">
                        <div className="container col">
                            <h4 className="careerHeader"><i className="far fa-scroll"></i> Player Attributes <i className="far fa-scroll"></i></h4> <br />
                            <div className="row">
                                <div className="form-group skill-form-attributes">
                                    <label htmlFor="brawn"><span className="brawn_color">Brawn</span></label>
                                    <select className="form-control" id="brawn" defaultValue={this.state.brawn} onChange={this.handleChange}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-attributes">
                                    <label htmlFor="agility"><span className="agility_color">Agility</span></label>
                                    <select className="form-control" id="agility" defaultValue={this.state.agility}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-attributes">
                                    <label htmlFor="intelliegnce"><span className="intelligence_color">Intelliegnce</span></label>
                                    <select className="form-control" id="intelliegnce" defaultValue={this.state.intelliegnce}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-attributes">
                                    <label htmlFor="cunning"><span className="cunning_color">Cunning</span></label>
                                    <select className="form-control" id="cunning" defaultValue={this.state.cunning}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-attributes">
                                    <label htmlFor="willpower"><span className="willpower_color">Willpower</span></label>
                                    <select className="form-control" id="willpower" defaultValue={this.state.willpower}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-attributes">
                                    <label htmlFor="presence"><span className="presence_color">Presence</span></label>
                                    <select className="form-control" id="presence" defaultValue={this.state.presence}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <h4 className="careerHeader"><i className="far fa-cog"></i> General Skills <i className="far fa-cog"></i></h4> <br />
                            <div className="row">
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="astrogation"><span className="intelligence_color">Astrogation</span></label>
                                    <select className="form-control" id="astrogation" defaultValue={this.state.astrogation}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="athletics"><span className="brawn_color">Athletics</span></label>
                                    <select className="form-control" id="athletics" defaultValue={this.state.athletics}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="charm"><span className="presence_color">Charm</span></label>
                                    <select className="form-control" id="charm" defaultValue={this.state.charm}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="coercion"><span className="willpower_color">Coercion</span></label>
                                    <select className="form-control" id="coercion" defaultValue={this.state.coercion}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="computers"><span className="intelligence_color">Computers</span></label>
                                    <select className="form-control" id="Computers" defaultValue={this.state.computers}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="cool"><span className="presence_color">Cool</span></label>
                                    <select className="form-control" id="cool" defaultValue={this.state.cool}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="coordination"><span className="agility_color">Coordination</span></label>
                                    <select className="form-control" id="coordination" defaultValue={this.state.coordination}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="deception"><span className="cunning_color">Deception</span></label>
                                    <select className="form-control" id="deception" defaultValue={this.state.deception}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="discipline"><span className="willpower_color">Discipline</span></label>
                                    <select className="form-control" id="discipline" defaultValue={this.state.discipline}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="leadership"><span className="presence_color">Leadership</span></label>
                                    <select className="form-control" id="leadership" defaultValue={this.state.leadership}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="mechanics"><span className="intelligence_color">Mechanics</span></label>
                                    <select className="form-control" id="mechanics" defaultValue={this.state.mechanics}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="medicine"><span className="intelligence_color">Medicine</span></label>
                                    <select className="form-control" id="medicine" defaultValue={this.state.medicine}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="negotiation"><span className="presence_color">Negotiation</span></label>
                                    <select className="form-control" id="negotiation" defaultValue={this.state.negotiation}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="perception"><span className="cunning_color">Perception</span></label>
                                    <select className="form-control" id="perception" defaultValue={this.state.perception}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="planetary"><span className="agility_color">Pilot Planet</span></label>
                                    <select className="form-control" id="planetary" defaultValue={this.state.planetary}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="space"><span className="agility_color">Pilot Space</span></label>
                                    <select className="form-control" id="space" defaultValue={this.state.space}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="resilience"><span className="brawn_color">Resilience</span></label>
                                    <select className="form-control" id="resilience" defaultValue={this.state.resilience}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="skulduggery"><span className="cunning_color">Skulduggery</span></label>
                                    <select className="form-control" id="skulduggery" defaultValue={this.state.skulduggery}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="stealth"><span className="agility_color">Stealth</span></label>
                                    <select className="form-control" id="stealth" defaultValue={this.state.stealth}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="streetwise"><span className="cunning_color">Streetwise</span></label>
                                    <select className="form-control" id="streetwise" defaultValue={this.state.streetwise}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="survival"><span className="cunning_color">Survival</span></label>
                                    <select className="form-control" id="survival" defaultValue={this.state.survival}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-skills">
                                    <label htmlFor="vigilance"><span className="willpower_color">Vigilance</span></label>
                                    <select className="form-control" id="vigilance" defaultValue={this.state.vigilance}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <h4 className="careerHeader"><i className="far fa-swords"></i> Combat Skills <i className="far fa-swords"></i></h4> <br />
                            <div className="row">
                                <div className="form-group skill-form-combat">
                                    <label htmlFor="brawl"><span className="brawn_color">Brawl</span></label>
                                    <select className="form-control" id="brawl" defaultValue={this.state.brawl}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-combat">
                                    <label htmlFor="gunnery"><span className="agility_color">Gunnery</span></label>
                                    <select className="form-control" id="gunnery" defaultValue={this.state.Gunnery}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-combat">
                                    <label htmlFor="melee"><span className="brawn_color">Melee</span></label>
                                    <select className="form-control" id="melee" defaultValue={this.state.melee}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-combat">
                                    <label htmlFor="rangedLight"><span className="agility_color">Ranged - Light</span></label>
                                    <select className="form-control" id="rangedLight" defaultValue={this.state.rangedLight}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-combat">
                                    <label htmlFor="rangedHeavy"><span className="agility_color">Ranged - Heavy</span></label>
                                    <select className="form-control" id="rangedHeavy" defaultValue={this.state.rangedHeavy}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                            <hr />
                            <h4 className="careerHeader"><i className="far fa-book"></i> Knowledge Skills <i className="far fa-book"></i></h4> <br />
                            <div className="row">
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="coreWorlds"><span className="intelligence_color">Core Worlds</span></label>
                                    <select className="form-control" id="coreWorlds" defaultValue={this.state.coreWorlds}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="education"><span className="intelligence_color">Education</span></label>
                                    <select className="form-control" id="education" defaultValue={this.state.education}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="lore"><span className="intelligence_color">Lore</span></label>
                                    <select className="form-control" id="lore" defaultValue={this.state.lore}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="outerRim"><span className="intelligence_color">Outer Rim</span></label>
                                    <select className="form-control" id="outerRim" defaultValue={this.state.outerRim}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="underworld"><span className="intelligence_color">Underworld</span></label>
                                    <select className="form-control" id="underworld" defaultValue={this.state.underworld}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="warfare"><span className="intelligence_color">Warfare</span></label>
                                    <select className="form-control" id="warfare" defaultValue={this.state.warfare}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                                <div className="form-group skill-form-knowledge">
                                    <label htmlFor="xenology"><span className="intelligence_color">Xenology</span></label>
                                    <select className="form-control" id="xenology" defaultValue={this.state.xenology}>
                                        <option value='0'>0</option>
                                        <option value='1'>1</option>
                                        <option value='2'>2</option>
                                        <option value='3'>3</option>
                                        <option value='4'>4</option>
                                        <option value='5'>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <input type="submit" name="Submit" className="btn btn-info btn-lg btn-block" onClick={this.handleSubmit} value="Create Character" />
            </div>

        );
    };
}
export default Create;
