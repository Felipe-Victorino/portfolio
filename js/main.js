import switchModal from "./modal.js";
import * as theme from "./theme.js";
import * as game from "./game.js";
import * as api from "./api.js";

document.addEventListener("DOMContentLoaded", () => {
  theme.setTheme();

  const themeBtn = document.querySelector("#theme");
  themeBtn.onclick = () => theme.alterTheme();

  const resetBtn = document.querySelector("#reset");
  resetBtn.onclick = () => reset();

  const endBtn = document.querySelector("#giveUp");
  endBtn.onclick = () => switchModal();

  api.getWords();

  game.start();
});
