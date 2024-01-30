const cellContainer = document.querySelector('.cellContainer');
const toWin = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
let options = ['', '', '', '', '', '', '', '', ''];

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
  const isRunning = () => running;

  const playersTurn = () => activePlayer;

  const plaRound = () => {
    const cells = document.querySelectorAll('.cell'); // Select all cells
    cells.forEach(cell => cell.addEventListener('click', clickedCell));
    resetBtn.addEventListener('click', restartGame);
    gameText.textContent = `${activePlayer.name}'s turn`;
    running = true;
  };

  return {
    isRunning,
    playersTurn,
    plaRound,
  };
}
const gameController = new GameController();
const createCells = () => {
  for (let i = 0; i < 9; i++) {
    const cell = document.createElement('div');
    cell.setAttribute('cellIndex', i);
    cell.classList.add('cell');
    cellContainer.appendChild(cell);

    cell.addEventListener('click', () => {
      if (!gameController.isRunning()) {
        return;
      }

      console.log('clicked');
    });
  }
};
createCells();
