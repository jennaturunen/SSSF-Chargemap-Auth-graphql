import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required: true },
  password: { type: String, required: true },
  full_name: { type: String },
});

export default mongoose.model('User', userSchema);
