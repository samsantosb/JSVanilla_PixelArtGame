const query = document.querySelector.bind(document);
const queryAll = document.querySelectorAll.bind(document);
const select = () => {
  query("#color-palette").addEventListener("click", (e) => {
    query(".selected").classList.remove("selected");
    e.target.classList.add("selected");
  });
};
const fill = () =>
  query("#pixel-board").addEventListener(
    "click",
    (e) =>
      (e.target.style.backgroundColor =
        query(".selected").style.backgroundColor)
  );
const clear = () =>
  query("#clear-board").addEventListener("click", () => {
    const p = queryAll(".pixel");
    for (let pxl of p) pxl.style.backgroundColor = "white";
  });
select(), fill(), clear();
