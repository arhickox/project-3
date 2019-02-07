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
    const characters = this.state.characters.map((character, key) => <div key={key} value={character.id}>NAME:{character.fullname}{' '}SPECIES:{character.species}{' '}SPECIALIZATION:{character.specialization}</div>);
    return (
    <div>
      <div class="card">
  <div class="card-header">
  View Characters
  </div>
  <div class="card-body">
  {characters}
  </div>
</div>
      
      
    </div>
    )
  }
}
export default View;
