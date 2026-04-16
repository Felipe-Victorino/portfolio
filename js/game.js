import * as api from "./api.js";
import switchModal from "./modal.js";
import * as utils from "./utils.js";

const counter = document.querySelector("#counter");
const cards = document.querySelectorAll("#card");
let attempts = 0;
let seconds = 0;
let winner = "";

let lastChecked = undefined;
let thisCheck = undefined;
let bloqueado = false;
let completed = false;

var time = setInterval(incSeconds, 100);

export function finish() {
  let finalTime = seconds;
  let timeDisplay = document.querySelector("#time-results");
  let finalAttempts = attempts;
  let attemptDisplay = document.querySelector("#attempt-results");

  timeDisplay.textContent = finalTime.toString();
  attemptDisplay.textContent = finalAttempts.toString();

  winner = document.querySelector("#winner").value;
}

function incSeconds() {
  seconds += 1;
}

function updateCounter() {
  counter.textContent = attempts.toString();
}

function checkCompleteStatus() {
  let complete = 0;
  cards.forEach((card) => {
    if (card.textContent != "?") {
      complete++;
    }
  });
  if (complete == 16) completed = true;
  //console.log(complete + " " + completed);
  if (isComplete()) {
    switchModal();
  }
}

export function closeAndReset(){
  reset();
  start();
  switchModal();

}

function isComplete() {
  return completed;
}

function fillValues(cards, names) {
  cards.forEach((card, x) => {
    card.textContent = "?";
    card.dataset.palavra = names[x];
  });
}

function reset() {
  cards.forEach((card) => {
    hide(card);
  });
  //console.log("reset");
}

function hide(card) {
  card.textContent = "?";
  //console.log("hide");
}

function reveal(card) {
  if (bloqueado) return;
  card.textContent = card.dataset.palavra;
  //console.log("reveal");
  if (!lastChecked) {
    lastChecked = card;
    return;
  }
  thisCheck = card;
  attempts++;
  updateCounter();
  verify();
}

function verify() {
  if (lastChecked.textContent == thisCheck.textContent) {
    lastChecked = null;
    thisCheck = null;
    checkCompleteStatus();
    if (isComplete()) {
    }
  } else {
    bloqueado = true;
    setTimeout(() => {
      lastChecked.textContent = "?";
      thisCheck.textContent = "?";
      lastChecked = null;
      thisCheck = null;
      bloqueado = false;
    }, 650);
  }
}

export async function start() {
  let names = [];
  names = await api.getWords();
  let fulllist = [...names, ...names];

  utils.shuffle(fulllist);
  fillValues(cards, fulllist);
  cards.forEach((card) => {
    hide(card);
    card.addEventListener("click", () => {
      reveal(card);
    });
  });
}
