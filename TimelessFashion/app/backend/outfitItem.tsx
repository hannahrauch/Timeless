import mongoose from 'mongoose';

const outfitItemSchema = new mongoose.Schema({
  name: { type: String, required: true },
  imageUrl: { type: String, required: true },
  type: { type: String, enum: ['top', 'pants', 'accessory'], required: true },
  tag: { type: String, enum: ['vintage', 'trending', 'upcoming'], required: true },
});

export const OutfitItem = mongoose.model('OutfitItem', outfitItemSchema);
