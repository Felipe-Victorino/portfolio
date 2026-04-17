import * as theme from "./theme.js";
import * as weather from "./weather.js";

document.addEventListener("DOMContentLoaded", () => {
  theme.setTheme();

  const themeBtn = document.querySelector("#theme");
  themeBtn.onclick = () => theme.alterTheme();

  weather.setTemp();

  let date = new Date();
  console.log(Date.now().toLocaleString());
  let dateString = date.toLocaleString("pt-BR");
  dateString = dateString.slice(0, 10);
  document.querySelector("#date").textContent = dateString;
});
