// Define the board
// Define all winning sequences
// Make a move if position on board is available
// Check for wins
// Is the board full (no winner: "tie")
// Return the board
// Reset the board
const Gameboard = (() => {
  const board = ['', '', '', '', '', '', '', '', ''];
  const winSequence = [
    //winning rows
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    //winning columns
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    //winning diagonals
    [0, 4, 8],
    [2, 4, 6],
  ];

  const isValidMove = (index, currentPlayerMarker) => {
    if (board[index] === '') {
      board[index] = currentPlayerMarker;
      return true;
    }
    return false;
  };

  const getWinner = () => {
    for (const sequence of winSequence) {
      const [a, b, c] = sequence;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = () => !board.includes('');

  const getBoard = () => board.slice();

  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i] = '';
    }
  };

  return {
    isValidMove,
    getWinner,
    isBoardFull,
    getBoard,
    resetBoard,
  };
})();

const Player = (name, marker) => {
  return { name, marker };
};

// Switch player after a move
// Handle player turn
// Instantiate the game
const GameController = (() => {
  let playerOne;
  let playerTwo;
  let currentPlayer;
  let gameActive = true;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
  };

  const handlePlayerTurn = (index) => {
    if (gameActive && Gameboard.isValidMove(index, currentPlayer.marker)) {
      console.log(Gameboard.getBoard());
      const winner = Gameboard.getWinner();
      if (winner) {
        console.log(`${currentPlayer.name} wins!`);
        gameActive = false;
      } else if (Gameboard.isBoardFull()) {
        console.log(`It's a draw!`);
        gameActive = false;
      } else {
        switchPlayer();
      }
    }
  };

  const startGame = (playerOneName, playerTwoName) => {
    playerOne = Player(playerOneName, 'X');
    playerTwo = Player(playerTwoName, 'O');
    currentPlayer = playerOne;
    gameActive = true;
    Gameboard.resetBoard();

    console.log(`Game Started..`);
    console.log(`Current board`);
    console.log(Gameboard.getBoard());
  };

  return {
    get currentPlayer() {
      return { ...currentPlayer };
    },
    get gameActive() {
      return gameActive;
    },
    handlePlayerTurn,
    startGame,
  };
})();

// Get user's name
// Get input until game ends
const play = () => {
  const playerOneName = prompt(`Enter player 1's name:`);
  const playerTwoName = prompt(`Enter player 2's name:`);

  GameController.startGame(playerOneName, playerTwoName);

  while (GameController.gameActive) {
    const index = prompt(
      `${GameController.currentPlayer.name}'s turn. Enter board position (0-8):`
    );
    GameController.handlePlayerTurn(index);
  }
};

const table = document.querySelector('#table');

table.addEventListener('click', (e) => {
  if (e.target.tagName !== 'TD') return;
  console.log(e.target);
});
