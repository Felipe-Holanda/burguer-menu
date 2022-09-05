function burguerMenu() {
  const button = document.querySelector(".menuBtn");
  const modal = document.querySelector(".mobileContent");
  const iframe = document.querySelector("i");


  button.addEventListener("click", (evento) => {
    if (button.id == "appear") {
      iframe.className = "bx bx-menu"
      modal.style.transform = "translateY(-150%)";
      button.removeAttribute("id");
    } else {
      modal.style.transform = "translateY(0%)";
      iframe.className = "bx bx-x"
      button.setAttribute("id", "appear");
    }
  });
}
burguerMenu();