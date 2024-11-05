import { config } from "../src/config";
import { getRandomCity } from "../src/utils/test-helpers";
import {
  apiClient,
  customApiClient,
  ErrorResponse,
} from "../src/weatherClient";

describe("API client", () => {
  it("invalid API error message key", async () => {
    expect(() => apiClient("")).toThrow(
      "API key for OpenWeatherMap is missing. Please set the WHETHER_API environment variable."
    );
  });
});

describe("Negative Weather API Tests", () => {
  it("invalid API error message from server", async () => {
    const response = await customApiClient()["/weather"].get({
      query: {
        q: config.defaultCity,
        appid: "",
      },
    });

    expect(response.status).toBe(401);

    const data = (await response.json()) as ErrorResponse;

    const errorMessage =
      "Invalid API key. Please see https://openweathermap.org/faq#error401 for more info.";

    expect(data.message?.toLowerCase()).toBe(errorMessage.toLowerCase());
  });

  it("should display error for invalid city", async () => {
    const response = await apiClient()["/weather"].get({
      query: {
        q: "Londonnnnnnn",
      },
    });

    expect(response.status).toBe(404);

    const data = (await response.json()) as ErrorResponse;

    const errorMessage = "city not found";

    expect(data.message?.toLowerCase()).toBe(errorMessage.toLowerCase());
  });
});
