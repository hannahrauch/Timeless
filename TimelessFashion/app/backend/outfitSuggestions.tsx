export type OutfitTag = "vintage" | "trending" | "upcoming";

export interface OutfitItem {
  name: string;
  tag: OutfitTag;
}

export interface Outfit {
  id: string;
  title: string;
  top: OutfitItem;
  bottom: OutfitItem;
  accessory: OutfitItem;
  image: string;
}

const possibleTags: OutfitTag[] = ["vintage", "trending", "upcoming"];

const getRandomTag = (): OutfitTag => {
  const randomIndex = Math.floor(Math.random() * possibleTags.length);
  return possibleTags[randomIndex];
};

export const outfitSuggestions: Outfit[] = [
  {
    id: "1",
    title: "Retro Chic",
    top: { name: "Band Tee", tag: getRandomTag() },
    bottom: { name: "High-Waisted Jeans", tag: getRandomTag() },
    accessory: { name: "Leather Belt", tag: getRandomTag() },
    image: "URL",
  },
  {
    id: "2",
    title: "Cozy Core",
    top: { name: "Chunky Knit Sweater", tag: getRandomTag() },
    bottom: { name: "Wide-Leg Pants", tag: getRandomTag() },
    accessory: { name: "Scarf", tag: getRandomTag() },
    image: "URL",
  },
  {
    id: "3",
    title: "Tech Street",
    top: { name: "Utility Jacket", tag: getRandomTag() },
    bottom: { name: "Cargo Pants", tag: getRandomTag() },
    accessory: { name: "Crossbody Bag", tag: getRandomTag() },
    image: "URL",
  },
];
