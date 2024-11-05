import { config } from "../src/config";
import { getRandomCity } from "../src/utils/test-helpers";
import { apiClient, ValidWeatherResponse } from "../src/weatherClient";

describe("Weather API Tests", () => {
  it("should get current weather for a valid city", async () => {
    const response = await apiClient()["/weather"].get({
      query: {
        q: config.defaultCity,
      },
    });

    expect(response.status).toBe(200);

    const data = (await response.json()) as ValidWeatherResponse;

    expect(data?.name?.toLowerCase()).toBe(config.defaultCity.toLowerCase());
    expect(Number.isInteger(data?.main?.humidity)).toBe(true);
    expect(data?.coord).toEqual({
      lat: 51.5085,
      lon: -0.1257,
    });
  });

  it("should retrun weather for random city", async () => {
    const city = getRandomCity();

    const response = await apiClient()["/weather"].get({
      query: {
        q: city,
      },
    });

    expect(response.status).toBe(200);

    const data = (await response.json()) as ValidWeatherResponse;

    expect(data?.name?.toLowerCase()).toBe(city.toLowerCase());
  });
});
