const Gameboard = (function () {
  const board = ['', '', '', '', '', '', '', '', ''];

  const matches = [
    [0, 1, 2], //row
    [3, 4, 5], //row
    [6, 7, 8], //row
    //
    [0, 3, 6], //colomn
    [1, 4, 7], //colomn
    [2, 5, 8], //colomn
    //
    [0, 4, 8], //diagonal tl - br
    [6, 4, 2], //diagonal tr - bl
  ];

  const checkWinner = function () {
    for (const match of matches) {
      const [pos1, pos2, pos3] = match;
      if (
        board[pos1] &&
        board[pos1] === board[pos2] &&
        board[pos1] === board[pos3]
      ) {
        return board[pos1];
      }
    }
    return null;
  };

  const makeMove = function (index, playerMarker) {
    //place the marker if the board position is empty
    if (board[index] === '') {
      board[index] = playerMarker;
      return true;
    }
    return false;
  };

  const isBoardFull = () => !board.includes('');

  const getBoard = () => board.slice();

  const resetBoard = function () {
    for (let i = 0; i < board.length; i++) {
      board[i] = '';
    }
  };

  return {
    checkWinner,
    makeMove,
    isBoardFull,
    getBoard,
    resetBoard,
  };
})();

const Player = function (name, marker) {
  return {
    name,
    marker,
  };
};

const GameController = (function () {
  let player1;
  let player2;
  let currentPlayer;
  let gameActive = true;

  const switchPlayer = function () {
    currentPlayer = currentPlayer === player1 ? player2 : player1;
  };
  //initializes the game state

  //Handle a player's turn
  const playTurn = function (index) {
    if (gameActive && Gameboard.makeMove(index, currentPlayer.marker)) {
      console.log('Current Board:');
      console.log(Gameboard.getBoard());
      const winner = Gameboard.checkWinner();
      if (winner) {
        console.log(`${currentPlayer.name} wins!`);
        gameActive = false;
      } else if (Gameboard.isBoardFull()) {
        console.log(`it's a draw`);
        gameActive = false;
      } else {
        switchPlayer();
      }
    }
  };

  const startGame = function (player1Name, player2Name) {
    player1 = Player(player1Name, 'X');
    player2 = Player(player2Name, 'O');
    currentPlayer = player1;
    gameActive = true;
    Gameboard.resetBoard();
    console.log('Game started');
    console.log('Current board:');
    console.table(Gameboard.getBoard());
  };

  return {
    startGame,
    playTurn,
    get gameActive() {
      return gameActive;
    },

    get currentPlayer() {
      return { ...currentPlayer };
    },
  };
})();

const playGame = function () {
  const playerOneName = prompt("Enter Player 1's name:");
  const playerTwoName = prompt("Enter Player 2's name:");

  GameController.startGame(playerOneName, playerTwoName);

  while (GameController.gameActive) {
    const index = parseInt(
      prompt(
        `${GameController.currentPlayer.name}'s turn. Enter position (0-8):`
      ),
      10
    );
    GameController.playTurn(index);
  }
};
