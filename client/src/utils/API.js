import axios from "axios";

export default {
  getCharacters: () => {
    return axios.get("/api/characters");
  },

  getOneCharacter: (id) => {
    return axios.get(`/api/characters/${id}`);
  },

  postCharacter: (character) => {
    return axios.post('/api/characters', character);
  },

  updateCharacter: (id, character) => {
    return axios.put(`/api/characters/${id}`, character);
  },

  deleteCharacter: (id) => {
    return axios.delete(`/api/characters/${id}`);
  }
};

