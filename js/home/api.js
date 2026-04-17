import { WEATHER_URL } from "./config.js";

export async function getWeather() {
  try {
    const response = await fetch(`${WEATHER_URL}`);
    //console.log(response);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    let weather = {};
    weather = await response.json();
    console.log(weather);
    return weather;
  } catch (error) {
    console.log(error);
    return {};
  }
}
