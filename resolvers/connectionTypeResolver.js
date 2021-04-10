import ConnectionType from '../models/connectionType.js';

export default {
  Query: {
    connectiontypes: () => ConnectionType.find(),
  },
  Connections: {
    ConnectionTypeID: (parent, args) => {
      return ConnectionType.findById(parent.ConnectionTypeID);
    },
  },
};
