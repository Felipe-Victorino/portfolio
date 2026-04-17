import { getWeather } from "./api.js";

export async function getTemp() {
  let data;
  data = await getWeather();

  return data.main.temp;
}

export async function setTemp() {
  let temp = await getTemp();
  temp = Math.trunc(temp);

  let weatherelement = document.querySelector("#weather");
  weatherelement.textContent = temp + " Cº";
}
