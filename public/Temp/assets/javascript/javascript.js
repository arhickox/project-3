// Code for species buttons on Character Creation Page
$("#human_button").click(function () {
    player_brawn = 2;
    player_agility = 2;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 2;
    player_presence = 2;
    player_wound_threshold = 10;
    player_strain_threshold = 10;
    player_starting_xp = 110;
    player_species_ability_description = "Humans start the game with one rank in <u>two different non-career skills of their choice</u>. They still may not train these skills above rank 2 at character creation.";
    player_species_image = "<img src='assets/images/human.jpg' class='species_img' height='460' width='270'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#twilek_button").click(function () {
    player_brawn = 1;
    player_agility = 2;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 2;
    player_presence = 3;
    player_wound_threshold = 10;
    player_strain_threshold = 11;
    player_starting_xp = 100;
    player_species_ability_description = "Twi'leks begin the game with one rank in either <u>Charm</u> or <u>Deception</u>. They still may not train Charm or Deception above rank 2 during character creation. When making skill checks, Twi'leks may remove [1 Setback Die] imposed due to arid or hot environmental conditions.";
    player_species_image = "<img src='assets/images/twilek.png' class='species_img' height='500' width='290'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#wookiee_button").click(function () {
    player_brawn = 3;
    player_agility = 2;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 1;
    player_presence = 2;
    player_wound_threshold = 14;
    player_strain_threshold = 8;
    player_starting_xp = 90;
    player_species_ability_description = "Wookiees begin the game with one rank in <u>Brawl</u>. They still may not train Brawl above rank 2 during character creation. <br> <b>Wookiee Rage: </b> When a Wookiee has suffered any wounds, he deals + 1 damage to Brawl and Melee attacks. When a Wookiee is Critically Injured, he instead deals + 2 damage to Brawl and Melee attacks.";
    player_species_image = "<img src='assets/images/wookiee.jpg' class='species_img' height='460' width='270'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#rodian_button").click(function () {
    player_brawn = 2;
    player_agility = 3;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 1;
    player_presence = 2;
    player_wound_threshold = 10;
    player_strain_threshold = 10;
    player_starting_xp = 100;
    player_species_ability_description = "Rodians begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. Rodians start with one rank in the Expert Tracker talent.";
    player_species_image = "<img src='assets/images/rodian.jpg' class='species_img' height='480' width='320'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#zabrak_button").click(function () {
    player_brawn = 2;
    player_agility = 2;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 3;
    player_presence = 1;
    player_wound_threshold = 10;
    player_strain_threshold = 10;
    player_starting_xp = 100;
    player_species_ability_description = "Zabrak begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. <br><b>Fearsome Counterance: </b> Zabrak add automatic [1 Advantage] to all Coercion checks they make.";
    player_species_image = "<img src='assets/images/zabrak.jpg' class='species_img' height='480' width='320'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#ithorian_button").click(function () {
    player_brawn = 2;
    player_agility = 1;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 3;
    player_presence = 2;
    player_wound_threshold = 9;
    player_strain_threshold = 12;
    player_starting_xp = 90;
    player_species_ability_description = "Ithorians begin the game with one rank in <u>Survival</u>. They still may not train Survival above rank 2 during character creation. <br> <b>Ithorian Bellow: </b> With two mouths and four throats, Ithorians have a unique natural weapon they can call upon when threatened (Resilience; Damage 6; Critical 4; Range [Short]; Blast 3, Concussive 1, Slow-Firing 2, Stun Damage). Each time they use this ability, they suffer 3 strain.";
    player_species_image = "<img src='assets/images/ithorian.jpg' class='species_img' height='480' width='340'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#duros_button").click(function () {
    player_brawn = 1;
    player_agility = 2;
    player_intelligence = 3;
    player_cunning = 2;
    player_willpower = 2;
    player_presence = 2;
    player_wound_threshold = 11;
    player_strain_threshold = 10;
    player_starting_xp = 100;
    player_species_ability_description = "Duros begin the game with one rank in <u>Piloting (Space)</u>. They still may not train Piloting (Space) above rank 2 during character creation. <br><b>Intuitive Navigation: </b> Duros may add [1 Advantage] to all Astrogation checks they make.";
    player_species_image = "<img src='assets/images/duros.jpg' class='species_img' height='480' width='300'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#gand_button").click(function () {
    player_brawn = 2;
    player_agility = 2;
    player_intelligence = 2;
    player_cunning = 2;
    player_willpower = 3;
    player_presence = 1;
    player_wound_threshold = 10;
    player_strain_threshold = 10;
    player_starting_xp = 100;
    player_species_ability_description = "Gands begin the game with one rank in <u>Discipline</u>. They still may not train Discipline above rank 2 during character creation. <br><b>Ammonia Breathers: </b> One notable difference between the two main sub-species of Gand is that one has lungs and one does not. Those that have lungs breathe an ammonia gas mixture. Those without lungs do not respire and gain all necessary metabolic substances through food. When playing a Gand, each player chooses whether he wishes his character to have lungs or not. If he selects to be playing a lungless Gand, his character is immune to suffocation (but not the wounds suffered from being exposed to vacuum). If he chooses to play a Gand with lungs, he starts the game with an ammonia respirator, and treats oxygen as a dangerous atmosphere with Rating 8. However, he gains + 10 starting XP.";
    player_species_image = "<img src='assets/images/gand.jpg' class='species_img' height='480' width='340'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#mon_calamari_button").click(function () {
    player_brawn = 2;
    player_agility = 2;
    player_intelligence = 3;
    player_cunning = 1;
    player_willpower = 2;
    player_presence = 2;
    player_wound_threshold = 10;
    player_strain_threshold = 10;
    player_starting_xp = 100;
    player_species_ability_description = "Mon Calamari begin the game with one rank in <u>Knowledge (Education)</u>. They still may not train Knowledge (Education) above rank 2 during character creation. <br><b>Amphibious: </b> Mon Calamari can breathe underwater without penalty and never suffer movement penalties for traveling through water.";
    player_species_image = "<img src='assets/images/monCalamari.jpg' class='species_img' height='480' width='290'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

$("#droid_button").click(function () {
    player_brawn = 1;
    player_agility = 1;
    player_intelligence = 1;
    player_cunning = 1;
    player_willpower = 1;
    player_presence = 1;
    player_wound_threshold = 10;
    player_strain_threshold = 10;
    player_starting_xp = 175;
    player_species_ability_description = "Droids do not need to eat, sleep, or breathe, and are unaffected by toxins or poisons. Droids have a cybernetic implant cap of 6 instead of their Brawn rating. In addition, after selecting their career, a Droid Player Character may train one rank in six of the eight career skills (instead of the usual four). After selecting their first specialization, a Droid Player Character may train one rank in three of the four specialization skills (instead of the usual two). <br><b>Inorganic: </b> Since droids are inorganic, they do not gain the benefits of recovering with a bacta tank, stimpack, or Medicine skill checks. Droids do recover naturally by resting, as their systems attempt self-repairs. Otherwise, droids need to be tended to with a Mechanics check, using the same difficulties and results of Medicine checks for organic beings. Emergency repair patches can be used to repair damage just like stimpacks are used on organic beings. Due to their resilient metallic construction, droids start the game with one rank in the Enduring talent. <br><b>Mechanical Being: </b> Droids cannot become Force sensitive, nor acquire a Force Rating by any means. Droids cannot use Force powers, and also cannot be affected by mind-altering Force powers.";
    player_species_image = "<img src='assets/images/droid.jpg' class='species_img' height='550' width='320'>";
    document.getElementById("statBrawn").innerHTML = player_brawn;
    document.getElementById("statAgility").innerHTML = player_agility;
    document.getElementById("statIntelligence").innerHTML = player_intelligence;
    document.getElementById("statCunning").innerHTML = player_cunning;
    document.getElementById("statWillpower").innerHTML = player_willpower;
    document.getElementById("statPresence").innerHTML = player_presence;
    document.getElementById("woundThreshold").innerHTML = player_wound_threshold;
    document.getElementById("strainThreshold").innerHTML = player_strain_threshold;
    document.getElementById("speciesStartingXP").innerHTML = player_starting_xp;
    document.getElementById("speciesAbilityDescription").innerHTML = player_species_ability_description;
    document.getElementById("speciesImageInsert").innerHTML = player_species_image;
});

// code for Career Selection buttons

$("#gunslinger_button").click(function () {
    player_career_title = "Smuggler";
    player_specialization_title = "Gunslinger";
    player_specialization_tagline = "The Quick Draw";
    player_specialization_description = "The Gunslinger knows better than most that making a living in the Outer Rim Territories is a constant struggle. He needs to be fast on the draw to stay alive. The Gunslinger and his beloved sidearm are inseparable, but he often carries a holdout weapon when stuck in a hostile, target-rich environment. To face off with a Gun­slinger is a dangerous and foolish proposition."
    player_specialization_skills_full = "Coordination, Deception, Knowledge (Underworld), Perception, Piloting (Space), Skulduggery, Streetwise, Vigilance, Coercion, Cool, Knowl­edge (Outer Rim) and Ranged (Light)"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#pilot_button").click(function () {
    player_career_title = "Smuggler";
    player_specialization_title = "Pilot";
    player_specialization_tagline = "A Galaxy of Destinations";
    player_specialization_description = "Plenty of folks know how to fly a starship, but a Smuggler who specializes as a Pilot develops a relationship with his ship, and it becomes an extension of his wit and his will. He can make a plodding old transport run far above its performance ratings, and given time and some modifications, he can turn it into one of the fleetest and most maneuverable craft ever to take to the stars."
    player_specialization_skills_full = "Coordination, Deception, Knowledge (Underworld), Perception, Piloting (Space), Skulduggery, Streetwise, Vigilance, Astrogation, Gunnery, Piloting (Planetary), and Piloting (Space)"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#assassin_button").click(function () {
    player_career_title = "Bounty Hunter";
    player_specialization_title = "Assassin";
    player_specialization_tagline = "Instrument of Policy";
    player_specialization_description = "Whereas most Bounty Hunters focus primarily on the capture of quarry, those who specialize as Assassins are generally tasked with the straightforward proposition of terminating their targets. Assassins tend to prefer getting in quietly, taking out targets (either up close or sniping from afar), and leaving just as silently as they entered. Their talents are very appropriate for this kind of work."
    player_specialization_skills_full = "Athletics, Brawl, Perception, Piloting (Planetary), Piloting (Space), Ranged (Heavy), Streetwise, Vigilance, Melee, Ranged (Heavy), Skulduggery, and Stealth."
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#gadgeteer_button").click(function () {
    player_career_title = "Bounty Hunter";
    player_specialization_title = "Gadgeteer";
    player_specialization_tagline = "Connoisseur of Tech";
    player_specialization_description = "Considering how often a single Bounty Hunter finds himself faced with terrible odds (more often than not, an acquisition has friends or employees who work hard to protect him), it's not surprising how many specialize in high-tech gear and weapons. The Gadgeteer excels at presenting himself as a one-person battle force, at least for a short time. Using both the latest tech and his own personally-modified gear, a Bounty Hunter with this specialization can be hard to stop."
    player_specialization_skills_full = "Athletics, Brawl, Perception, Piloting (Planetary), Piloting (Space), Ranged (Heavy), Streetwise, Vigilance, Brawl, Coercion, Mechanics, and Ranged (Light)"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#commando_button").click(function () {
    player_career_title = "Soldier";
    player_specialization_title = "Commando";
    player_specialization_tagline = "Strike the Target";
    player_specialization_description = "Commandos are specialists trained to strike the enemy from unexpected directions to do the most damage in the most vulnerable locations. Commando teams are often used like surgical instruments by the commanders who have access to them. A Commando knows how to find a target, attack it, disable it, survive the after- math, and find his way home."
    player_specialization_skills_full = "Athletics, Brawl, Knowledge (Warfare), Medicine, Melee, Ranged (Light), Ranged (Heavy), Survival, Brawl, Melee, Resilience, and Survival"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#medic_button").click(function () {
    player_career_title = "Soldier";
    player_specialization_title = "Medic";
    player_specialization_tagline = "Save the Team";
    player_specialization_description = "The Alliance cannot afford to fight a war of attrition the way the Empire can. The enemy can pour thousands of stormtroopers and other forces into a meat-grinder of a battle, taking horrific casualties, without blinking an eye over its losses. Every soldier of the Rebellion is, on the other hand, a valuable asset whose loss Alliance High Command feels keenly. The Medic serves to prevent as many of those losses as possible."
    player_specialization_skills_full = "Athletics, Brawl, Knowledge (Warfare), Medicine, Melee, Ranged (Light), Ranged (Heavy), Survival, Knowledge (Xenology), Medicine. Resilience, and Vigilance"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#protector_button").click(function () {
    player_career_title = "Jedi";
    player_specialization_title = "Protector";
    player_specialization_tagline = "Keeping the Peace";
    player_specialization_description = "Many Consulars know the universal truth: knowledge is power, and understanding a situation can give one a decisive advantage. This holds just as true when resolving disputes or negotiations as it does on the battlefield. A Sage focuses on studying the world around him, recognizing that information offers tre­mendous advantages to himself and his allies. He then uses that power to help change the hearts and minds of others to achieve his goals."
    player_specialization_skills_full = "Cool, Discipline, Knowledge (Education), Knowledge (Lore), Leadership, Negotiation, Discipline, Knowledge (Education), Knowledge (Xenology), and Medicine"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});

$("#sage_button").click(function () {
    player_career_title = "Jedi";
    player_specialization_title = "Sage";
    player_specialization_tagline = "Disciple of Harmony";
    player_specialization_description = "Guardians are often driven by their compassion for the plights of those who cannot protect themselves. Pro­tectors ensure these innocents never come to harm. Few are tougher than a Protector, and even fewer can get through his guard to attack those he defends. Even if his charges do suffer harm, the Protector possesses basic medical knowledge to heal their wounds."
    player_specialization_skills_full = "Brawl, Cool, Discipline, Melee, Resilience, Vigilance, Ath­letics, Medicine, Ranged (Light), and Resilience"
    document.getElementById("careerTitle").innerHTML = player_career_title;
    document.getElementById("specializationTitle").innerHTML = player_specialization_title;
    document.getElementById("careerTagline").innerHTML = player_specialization_tagline;
    document.getElementById("careerDescription").innerHTML = player_specialization_description;
    document.getElementById("careerSkills").innerHTML = player_specialization_skills_full;
});
