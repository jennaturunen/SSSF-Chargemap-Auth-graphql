import CurrentType from '../models/currentType.js';

export default {
  Query: {
    currenttypes: () => CurrentType.find(),
  },
  Connections: {
    CurrentTypeID: (parent, args) => {
      return CurrentType.findById(parent.CurrentTypeID);
    },
  },
};
