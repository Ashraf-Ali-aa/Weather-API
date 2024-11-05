import { getRandomCity } from "../../src/utils/test-helpers";

describe("getRandomCity", () => {
  it("should return a city from the predefined list", () => {
    const cities = ["London", "Paris", "New York", "Tokyo", "Sydney"];
    const city = getRandomCity();
    expect(cities).toContain(city);
  });

  it("should return a random city from the list over multiple calls", () => {
    const cities = ["London", "Paris", "New York", "Tokyo", "Sydney"];
    const results = new Set();

    for (let i = 0; i < 100; i++) {
      results.add(getRandomCity());
    }

    const notIncludedCity = "Manchester";

    expect(Array.from(results)).toEqual(expect.arrayContaining(cities));

    expect(results.has(notIncludedCity)).toBe(false);
  });
});
