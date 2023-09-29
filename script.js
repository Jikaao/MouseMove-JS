const mousemove = document.querySelectorAll(".mouse");
const cursorBorder = document.getElementById("cursor-border");

window.addEventListener("mousemove", (e) => {
  mousemove.forEach((mouse) => {
    mouse.style.left = e.x + "px"; // .x ou .y permet de faire suivre le cursor sur les axes Y et X en même temps que la souris.
    mouse.style.top = e.y + "px";
  });
});
// ---------------------Pour aggrandir la bordure du cursor au clique de la souris----------------------------------------------------
window.addEventListener("mousedown", () => {
  cursorBorder.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  cursorBorder.style.transform = "scale(1) translate(-50%, -50%)";
});