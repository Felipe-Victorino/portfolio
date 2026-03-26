export default function switchModal() {
  const modal = document.querySelector(".modal");
  const modalShow = modal.style.display;
  if (modalShow == "flex") {
    modal.style.display = "none";
  } else {
    modal.style.display = "flex";
  }
}
