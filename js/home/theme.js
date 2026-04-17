document.body.addEventListener("load", setTheme());

export function setTheme() {
  let theme = localStorage.getItem("theme");
  document.documentElement.setAttribute("data-theme", theme);
}

export function alterTheme() {
  let theme = localStorage.getItem("theme") || "light";
  theme = theme == "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", theme);

  localStorage.setItem("theme", theme);
}
