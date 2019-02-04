import React, { Component } from "react";
import "../SpeciesOverall/style.css";

class SpeciesInfo extends Component {
    state = {
        species: "",
        brawn: "",
        agility: "",
        intelligence: "",
        cunning: "",
        willpower: "",
        presence: "",
        wound: "",
        strain: "",
        experience: "",
        ability: "",
        career: "",
        specialization: "",
        tagline: "",
        career_description: "",
        career_skills: ""
    }

    handleSpeciesBtnClick = event => {

        const btnSpeciesType = event.target.attributes.getNamedItem("data-value").value;

        if (btnSpeciesType === "human") {
            this.setState({ species: "Human" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/human.jpg' className='species_img' height='450' width='290' /> });
            this.setState({ brawn: 2 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 2 });
            this.setState({ presence: 2 });
            this.setState({ wound: 10 });
            this.setState({ strain: 10 });
            this.setState({ experience: 110 });
            this.setState({ ability: <text>"Humans start the game with <u>one rank in two different non-career skills of their choice</u>. They still may not train these skills above rank 2 at character creation."</text> });
        } else if (btnSpeciesType === "twilek") {
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/twilek.png' class='species_img' height='450' width='290' /> });
            this.setState({ species: "Twi'lek" });
            this.setState({ brawn: 1 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 2 });
            this.setState({ presence: 3 });
            this.setState({ wound: 10 });
            this.setState({ strain: 11 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>Twi'leks begin the game with one rank in either <u>Charm</u> or <u>Deception</u>. They still may not train Charm or Deception above rank 2 during character creation. When making skill checks, Twi'leks may remove [1 Setback Die] imposed due to arid or hot environmental conditions."</text> });
        } else if (btnSpeciesType === "wookiee") {
            this.setState({ species: "Wookiee" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/wookiee.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 3 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 1 });
            this.setState({ presence: 2 });
            this.setState({ wound: 14 });
            this.setState({ strain: 8 });
            this.setState({ experience: 90 });
            this.setState({ ability: <text>"Wookiees begin the game with one rank in <u>Brawl</u>. They still may not train Brawl above rank 2 during character creation. <br /> <b>Wookiee Rage: </b> When a Wookiee has suffered any wounds, he deals + 1 damage to Brawl and Melee attacks. When a Wookiee is Critically Injured, he instead deals + 2 damage to Brawl and Melee attacks."</text> });
        } else if (btnSpeciesType === "rodian") {
            this.setState({ species: "Rodian" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/rodian.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 2 });
            this.setState({ agility: 3 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 1 });
            this.setState({ presence: 2 });
            this.setState({ wound: 10 });
            this.setState({ strain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Rodians begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. Rodians start with one rank in the <u>Expert Tracker talent</u>."</text> });
        } else if (btnSpeciesType === "zabrak") {
            this.setState({ species: "Zabrak" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/zabrak.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 2 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 3 });
            this.setState({ presence: 1 });
            this.setState({ wound: 10 });
            this.setState({ strain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Zabrak begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. <br /><b>Fearsome Counterance: </b> Zabrak add automatic [1 Advantage] to all Coercion checks they make."</text> });
        } else if (btnSpeciesType === "ithorian") {
            this.setState({ species: "Ithorian" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/ithorian.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 2 });
            this.setState({ agility: 1 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 3 });
            this.setState({ presence: 2 });
            this.setState({ wound: 9 });
            this.setState({ strain: 12 });
            this.setState({ experience: 90 });
            this.setState({ ability: <text>"Ithorians begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. <br /> <b>Ithorian Bellow: </b> With two mouths and four throats, Ithorians have a unique natural weapon they can call upon when threatened (Resilience; Damage 6; Critical 4; Range [Short]; Blast 3, Concussive 1, Slow-Firing 2, Stun Damage). Each time they use this ability, they suffer 3 strain."</text> });
        } else if (btnSpeciesType === "duros") {
            this.setState({ species: "Duros" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/duros.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 1 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 3 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 2 });
            this.setState({ presence: 2 });
            this.setState({ wound: 11 });
            this.setState({ strain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Duros begin the game with one rank in <u>Piloting (Space)</u>. They still may not train Piloting (Space) above rank 2 during character creation. <br /><b>Intuitive Navigation: </b> Duros may add [1 Advantage] to all Astrogation checks they make."</text> });
        } else if (btnSpeciesType === "gand") {
            this.setState({ species: "Gand" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/gand.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 2 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 2 });
            this.setState({ cunning: 2 });
            this.setState({ willpower: 3 });
            this.setState({ presence: 1 });
            this.setState({ wound: 10 });
            this.setState({ strain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Gands begin the game with one rank in <u>Discipline</u>. They still may not train Discipline above rank 2 during character creation. <br /><b>Ammonia Breathers: </b> One notable difference between the two main sub-species of Gand is that one has lungs and one does not. Those that have lungs breathe an ammonia gas mixture. Those without lungs do not respire and gain all necessary metabolic substances through food. When playing a Gand, each player chooses whether he wishes his character to have lungs or not. If he selects to be playing a lungless Gand, his character is immune to suffocation (but not the wounds suffered from being exposed to vacuum). If he chooses to play a Gand with lungs, he starts the game with an ammonia respirator, and treats oxygen as a dangerous atmosphere with Rating 8. However, he gains + 10 starting XP."</text> });
        } else if (btnSpeciesType === "moncalamari") {
            this.setState({ species: "Mon Calamari" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/monCalamari.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 2 });
            this.setState({ agility: 2 });
            this.setState({ intelligence: 3 });
            this.setState({ cunning: 1 });
            this.setState({ willpower: 2 });
            this.setState({ presence: 2 });
            this.setState({ wound: 10 });
            this.setState({ strain: 10 });
            this.setState({ experience: 100 });
            this.setState({ ability: <text>"Mon Calamari begin the game with one rank in <u>Knowledge (Education)</u>. They still may not train Knowledge (Education) above rank 2 during character creation. <br /><b>Amphibious: </b> Mon Calamari can breathe underwater without penalty and never suffer movement penalties for traveling through water."</text> });
        } else if (btnSpeciesType === "droid") {
            this.setState({ species: "Droid" });
            this.setState({ image: <img src='https://project-3-20190122205700-deployment.s3.amazonaws.com/droid.jpg' class='species_img' height='450' width='290' /> });
            this.setState({ brawn: 1 });
            this.setState({ agility: 1 });
            this.setState({ intelligence: 1 });
            this.setState({ cunning: 1 });
            this.setState({ willpower: 1 });
            this.setState({ presence: 1 });
            this.setState({ wound: 10 });
            this.setState({ strain: 10 });
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

    render() {
        return (

            <div className="container">
                <div className="row">
                    <div className="card species-info">
                        <div className="card-header">
                            Species Selection
                        </div>
                        <div className="card-body background">
                            <div className={["species_stats"]}>
                                <b>Brawn:</b> {this.state.brawn} <br />
                                <b>Agility:</b> {this.state.agility} <br />
                                <b>Intelligence:</b> {this.state.intelligence} <br />
                                <b>Cunning:</b> {this.state.cunning} <br />
                                <b>Willpower:</b> {this.state.willpower} <br />
                                <b>Presence:</b> {this.state.presence} <br />
                                <b>Wound Threshold:</b> {this.state.wound} + Brawn <br />
                                <b>Strain Threshold:</b> {this.state.strain} + Willpower <br />
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
                        Career Selection
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
            </div>

        );
    };
}
export default SpeciesInfo;