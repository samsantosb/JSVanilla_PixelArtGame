const q = document.querySelector.bind(document);
const qll = document.querySelectorAll.bind(document);
const select = () => q('#color-palette').addEventListener('click', (e) => {
  q('.selected').classList.remove('selected');
  e.target.classList.add('selected');
});
const fill = () => q('#pixel-board').addEventListener('click', (e) =>
  e.target.style.backgroundColor = q('.selected').style.backgroundColor);
const clear = () => q('#clear-board').addEventListener('click', () => {
  for (const p of qll('.pixel')) p.style.backgroundColor = 'white';
});
select(), fill(), clear();
