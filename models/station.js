import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const stationSchema = new Schema({
  Title: String,
  AddressLine1: String,
  Town: String,
  StateOrProvince: String,
  Postcode: String,
  Location: {
    type: {
      type: String,
      enum: ['Point'],
    },
    coordinates: {
      type: [Number],
    },
  },
  Connections: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Connections',
    },
  ],
});

export default mongoose.model('Station', stationSchema);
