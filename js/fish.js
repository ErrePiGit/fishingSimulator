const FISH_TYPES = [
  {
    name: "Rudd",
    maxWeightKg: 0.3,
    number: 0,
  },
  {
    name: "Trout",
    maxWeightKg: 3,
    number: 0,
  },
  {
    name: "Carp",
    maxWeightKg: 6,
    number: 0,
  },
  {
    name: "Tench",
    maxWeightKg: 2,
    number: 0,
  },
  {
    name: "Chub",
    maxWeightKg: 2,
    number: 0,
  },
  {
    name: "Eel",
    maxWeightKg: 1,
    number: 0,
  },
  {
    name: "Loach",
    maxWeightKg: 0.3,
    number: 0,
  },
  {
    name: "Roach",
    maxWeightKg: 0.3,
    number: 0,
  },
  {
    name: "Bleak",
    maxWeightKg: 0.1,
    number: 0,
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
