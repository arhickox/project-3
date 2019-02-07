import React from "react";
import API from "../utils/API";

class View extends React.Component {
  constructor(props) {
    super();
    this.state = {
      characters: []
    }
  }

  componentDidMount() {
    API.getCharacters().then(res => {
      this.setState({ characters: res.data });
      console.log(this.state.characters);
    });
  }

  render() {
    const characters = this.state.characters.map((character, key) => <div key={key} value={character.id}>{character.fullname}</div>);
    return (
    <div>
      <h1>View Characters</h1>
      {characters}
    </div>
    )
  }
}
export default View;