import mongoose from 'mongoose';

const currentTypeSchema = new mongoose.Schema({
  Description: String,
  Title: String,
});

export default mongoose.model('CurrentType', currentTypeSchema);
