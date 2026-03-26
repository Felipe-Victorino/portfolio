saveRound();

// MODAL

window.onclick = function (event) {
  const modal = document.querySelector(".modal");
  if (event.target == modal) {
    switchModal();
  }
};
