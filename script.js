const cellContainer = document.querySelector('.cellContainer');

const gameBoard = (() => {
  const rows = 3;
  const columns = 3;
  const board = [];

  for (let i = 0; i < rows; i++) {
    board[i] = [];
    for (let j = 0; j < columns; j++) {
      board[i].push('');
    }
  }
  const getBoard = () => board;
  return { getBoard };
})();
console.log(gameBoard.getBoard());

const createCells = () => {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('cellIndex', i);
    cell.classList.add('cell');
    cellContainer.appendChild(cell);
  }
};
createCells();
// const controller = () = {

// }
