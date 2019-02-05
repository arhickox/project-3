import React from "react";
import Hero from "../components/Hero";

var cardstyle = {
    margin: "20px 0px 20px 0px",
};

var cardheader = {
    textAlign: "center",
};


function Main() {
    return (
        <div>
        <Hero backgroundImage="https://magazineclonerepub.blob.core.windows.net/mcepub/2786/158565/image/636e1b8c-7b30-47f9-a965-de8a5d8fe23b.jpg">
            <h1>Tabletop Assistant</h1>
            <h2>RPG Character Creation Tool</h2>
            <h2>For Star Wars: Edge of the Empire by Fantasy Flight Games</h2>
        </Hero>
        <div className="container">
        <div class="card" style={cardstyle}>
      <div class="card-body">
        <h5 class="card-title" style={cardheader}>Created by Austin Hickox, Jesse Schimmel, Mike Diallo and Matt Crowe</h5>
        <p class="card-text">Tabletop Assistant is valuable because it is often challenging to keep track of and organize character sheets. We are creating a character managment application for tabletop roleplaying game character sheets. The application will allow users to log in and identify themselves as a Game Master or player. Users will select their desired tabletop game system. Users will have the option to create a new character sheet or open an existing character sheet. Game Master users will have the ability to edit a players character sheet in real time. This application will allow players and Game Masters to have easy access to their character sheets and will facilitate Game Masters in guiding new or inexperienced players through the often complex character creation process. Additionaly Game Masters will be able to alter character sheets without overtly alerting players to the change.</p>
        <p class="card-text">The current 1.0 iteration of the application allows users to go through the character creation process, and upload their finished character to a database to be retrieved later. It is also currently only made to create characters in the following Star Wars Tabletop games: Edge of the Empire, Age of Rebellion and Force and Destiny. Future iterations will have expanded functionality and allow the user to toggle to other Tabletop games.</p>
        <p class="card-text">Technology Used: </p>
        <ul>
            <li>React</li>
            <li>AWS</li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
      </div>
    </div>
        </div>
        </div>
    );
}

export default Main;
