import { createClient, OASOutput, type NormalizeOAS } from "fets";
import type openapi from "./oas";
import { config } from "../config";

export function apiClient(apiKey = config.apiKey) {

  if (!apiKey) {
    throw new Error(
      "API key for OpenWeatherMap is missing. Please set the WHETHER_API environment variable."
    );
  }

  return createClient<NormalizeOAS<typeof openapi>>({
    endpoint: config.endpoint,
    globalParams: {
      query: {
        appid: apiKey,
      },
    },
  });
}

export function customApiClient() {
  return createClient<NormalizeOAS<typeof openapi>>({
    endpoint: "https://api.openweathermap.org/data/2.5/",
  });
}

export type ValidWeatherResponse = OASOutput<
  NormalizeOAS<typeof openapi>,
  "/weather",
  "get",
  "200"
>;

export type ErrorResponse = OASOutput<
  NormalizeOAS<typeof openapi>,
  "/weather",
  "get",
  "401"
>;
