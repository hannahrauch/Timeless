import express from 'express';
import { OutfitItem } from './outfitItem';

const router = express.Router();

//all outfit items
router.get('/', async (req, res) => {
  try {
    const items = await OutfitItem.find();
    res.json(items);
  } catch (err) {
    res.status(500).json({ error: 'Server error' });
  }
});

//Post a new outfit item
router.post('/', async (req, res) => {
  try {
    const newItem = new OutfitItem(req.body);
    await newItem.save();
    res.status(201).json(newItem);
  } catch (err) {
    res.status(400).json({ error: 'Invalid data' });
  }
});

export default router;
