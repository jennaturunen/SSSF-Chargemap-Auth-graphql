import mongoose from 'mongoose';

const connectionsSchema = new mongoose.Schema({
  Quantity: Number,
  ConnectionTypeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'ConnectionType',
  },
  CurrentTypeID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'CurrentType',
  },
  LevelID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Level',
  },
});

export default mongoose.model('Connections', connectionsSchema);
