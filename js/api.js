import { URL, SAVE_URL, RANK_URL, NAMES } from "./config.js";

export async function getWords() {
  try {
    const response = await fetch(`${URL}/api/palavras.php?quantidade=8`);
    //console.log(response);
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    let names = [];
    names = await response.json();
    return names;
  } catch (error) {
    console.log(error);
    return NAMES;
  }
}

export async function saveRound(name, time, tries) {
  try {
    const response = await fetch(`${URL}/api/salvar.php`, {
      method: "POST",
      header: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ nome: "Sr. Post", tempo: 20, tentativas: 42 }),
    });
    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }
    const data = await response.json();
    //console.log(data);
  } catch (error) {
    console.log(error);
  }
}

export async function getRankings() {
  try {
    const response = await fetch(`${URL}/api/ranking.php`);

    if (!response.ok) {
      throw new Error(`Error ${response.status}`);
    }

    let ranking = [];
    ranking = await response.json();
    return ranking;
  } catch (error) {
    console.log(error);
    return [];
  }
}
