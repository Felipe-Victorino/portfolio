export function shuffle(names) {
  //console.log("Shuffle");
  for (let i = 0; i < names.length; i++) {
    let target = Math.floor(Math.random() * (1 + i));
    [names[i], names[target]] = [names[target], names[i]];
  }
}
