export default function switchModal() {
  const modal = document.querySelector(".modal");
  const modalShow = modal.style.display;
  if (modalShow == "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}

export function displayRanking(ranking) {
  let rankingTable = document.querySelector("#ranking");
  for (let i = 0; i < ranking.length(); i++) {
    rankingTable.appendChild(createRankRow(i, ranking[i]));
  }
}

function createRankRow(index, ranking) {
  let tr = document.createElement("tr");
  for (let i = 0; i < array.length; i++) {
    tr.appendChild((document.createElement("th").textContent = index));
    tr.appendChild((document.createElement("th").textContent = ranking.nome));
    tr.appendChild(
      (document.createElement("th").textContent = ranking.tentativas),
    );
    tr.appendChild((document.createElement("th").textContent = ranking.tempo));
  }

  return tr;
}
