import Level from '../models/level.js';

export default {
  Query: {
    leveltypes: () => Level.find(),
  },
  Connections: {
    LevelID: (parent, args) => {
      return Level.findById(parent.LevelID);
    },
  },
};
