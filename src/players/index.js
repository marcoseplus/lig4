import MarcosScript from "./myScript/index.js";

const players = {
  data: [
    {
      name: "Marcos",
      script: MarcosScript,
      photo: "./src/images/marcos.jpg",
    }
  ],

  getAll: () => {
    return [...players.data];
  },

  getByName: (name) => {
    const playerList = players.getAll();

    return playerList.find((player) => player.name === name);
  },
};

export default players;
