const board = document.querySelector('.gameBoard');

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
