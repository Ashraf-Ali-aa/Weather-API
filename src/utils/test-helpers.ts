export const getRandomCity = () => {
  const cities = ["London", "Paris", "New York", "Tokyo", "Sydney"];
  return cities[Math.floor(Math.random() * cities.length)];
};
