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

function GameController(
  playerOneName = 'Player One',
  playerTwoName = 'Player Two'
) {
  const players = [
    {
      name: playerOneName,
      mark: 'X',
    },
    {
      name: playerTwoName,
      mark: 'O',
    },
  ];
  let running = false;
  let activePlayer = players[0];

  const winner = document.querySelector('.winner');
  const modal = document.querySelector('.result');
  const board = gameBoard.getBoard();
  const playerOne = document.querySelector('.player1');
  const playerTwo = document.querySelector('.player2');
  const resetBtn = document.querySelector('.reset');

  const changePlayerTurn = () => {
    activePlayer = activePlayer === players[0] ? players[1] : players[0];
    if (activePlayer === players[0]) {
      playerTwo.removeAttribute('active');
      playerOne.setAttribute('active', 'activePlayer');
    } else if (activePlayer === players[1]) {
      playerOne.removeAttribute('active');
      playerTwo.setAttribute('active', 'activePlayer');
    }
  };
  const playersTurn = () => activePlayer;

  const plaRound = () => {
    cells.forEach(cell => cell.addEventListener('click', clickedCell));
    resetBtn.addEventListener('click', restartGame);
    gameText.textContent = `${currentPlayer}'s turn`;
    running = true;
  };
}
