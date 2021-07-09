const q = document.querySelector.bind(document)
const qll = document.querySelectorAll.bind(document);
const select = () => {
  q('#color-palette').addEventListener('click', async (e) => {
    q('.selected').classList.remove('selected');
    await e.target.classList.add('selected');
  });
};
const fill = () => q('#pixel-board').addEventListener('click', async (e) =>
  await (e.target.style.backgroundColor = q('.selected').style.backgroundColor));
const clear = () => q('#clear-board').addEventListener('click', async () => {
  const p = await qll('.pixel');
  for (let pxl of p) pxl.style.backgroundColor = 'white';
});
select(), fill(), clear();