const q = document.querySelector.bind(document)
const qll = document.querySelectorAll.bind(document);
const select = () => {
  q('#color-palette').addEventListener('click', async (e) => {
    await q('.selected').classList.remove('selected');
    e.target.classList.add('selected');
  });
};
const fill = () => q('#pixel-board').addEventListener('click', async (e) =>
  await (e.target.style.backgroundColor = q('.selected').style.backgroundColor));
const clear = () => q('#clear-board').addEventListener('click', async () => {
  for (let pxl of qll('.pixel')) pxl.style.backgroundColor = 'white';
});
select(), fill(), clear();