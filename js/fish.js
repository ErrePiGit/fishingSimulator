const FISH_TYPES = [
  {
    name: "Rudd",
    maxWeightKg: 0.3,
  },
  {
    name: "Trout",
    maxWeightKg: 3,
  },
  {
    name: "Carp",
    maxWeightKg: 6,
  },
  {
    name: "Tench",
    maxWeightKg: 2,
  },
  {
    name: "Chub",
    maxWeightKg: 2,
  },
  {
    name: "Eel",
    maxWeightKg: 1,
  },
  {
    name: "Loach",
    maxWeightKg: 0.3,
  },
  {
    name: "Common Roach",
    maxWeightKg: 0.3,
  },
  {
    name: "Bleak",
    maxWeightKg: 0.1,
  },
];

function getRandomFish() {
  const randomFishIndex = Math.floor(Math.random() * FISH_TYPES.length);
  const randomFishType = FISH_TYPES[randomFishIndex];
  const newFish = {
    ...randomFishType,
    weight: randomFishType.maxWeightKg * Math.random(),
  };
  return newFish;
}
