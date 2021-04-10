import mongoose from 'mongoose';

const levelType = new mongoose.Schema({
  Title: String,
  Comments: String,
  IsFastChargeCapable: Boolean,
});

export default mongoose.model('Level', levelType);
