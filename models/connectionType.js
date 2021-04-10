import mongoose from 'mongoose';

const connectionTypeSchema = new mongoose.Schema({
  FormalName: String,
  Title: String,
});

export default mongoose.model('ConnectionType', connectionTypeSchema);
