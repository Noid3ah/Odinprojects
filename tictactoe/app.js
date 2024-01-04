// Define the board
// Define all winning sequences
// Make a move if position on board is available
// Check for wins
// Is the board full (no winner: "tie")
// Return the board
// Reset the board
const Gameboard = (() => {
  const container = document.querySelector('.container');
  const board = Array.from(container.children);
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
    if (board[index].querySelector('span').textContent === '') {
      board[index].querySelector('span').textContent = currentPlayerMarker;
      board[index].querySelector('span').className = currentPlayerMarker;
      return true;
    }
    return false;
  };

  const getWinner = () => {
    for (const sequence of winSequence) {
      const [a, b, c] = sequence;
      if (
        board[a].querySelector('span').textContent &&
        board[a].querySelector('span').textContent ===
          board[b].querySelector('span').textContent &&
        board[a].querySelector('span').textContent ===
          board[c].querySelector('span').textContent
      ) {
        return board[a];
      }
    }
    return null;
  };

  const isBoardFull = () => {
    return board.every((box) => box.querySelector('span').textContent !== '');
  };

  const getBoard = () => board.slice();

  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i].querySelector('span').textContent = '';
    }
  };

  return {
    isValidMove,
    getWinner,
    isBoardFull,
    getBoard,
    resetBoard,
    get board() {
      return board;
    },
  };
})();

const Player = (name, marker) => {
  return { name, marker };
};

// Switch player after a move
// Handle player turn
// Instantiate the game
const GameController = (() => {
  const whosTurn = document.querySelector('.player h2');
  let playerOne;
  let playerTwo;
  let currentPlayer;
  let gameActive = true;

  const switchPlayer = () => {
    currentPlayer = currentPlayer === playerOne ? playerTwo : playerOne;
    whosTurn.textContent = `${currentPlayer.name}'s turn.`;
  };

  const handlePlayerTurn = (index) => {
    if (gameActive && Gameboard.isValidMove(index, currentPlayer.marker)) {
      console.log(Gameboard.getBoard());
      const winner = Gameboard.getWinner();
      if (winner) {
        whosTurn.textContent = `${currentPlayer.name} wins!`;
        gameActive = false;
      } else if (Gameboard.isBoardFull()) {
        whosTurn.textContent = `It's a draw!`;
        gameActive = false;
      } else {
        switchPlayer();
      }
    }
  };

  const startGame = (playerOneName, playerTwoName) => {
    playerOne = Player(playerOneName, 'x');
    playerTwo = Player(playerTwoName, 'o');
    currentPlayer = playerOne;
    gameActive = true;
    Gameboard.resetBoard();

    const whosTurn = document.querySelector('.player h2');
    whosTurn.textContent = `${currentPlayer.name}'s turn.`;

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
  const startButtons = document.querySelectorAll('.start');
  const resetButton = document.querySelector('.reset');
  const endButton = document.querySelector('.end');
  const boardBoxes = document.querySelectorAll('.box');
  let playerOneName;
  let playerTwoName;

  startButtons.forEach((button) => {
    button.addEventListener('click', () => {
      playerOneName = prompt("Enter Player 1's name:");
      playerTwoName = button.classList.contains('two__player')
        ? prompt("Enter Player 2's name:")
        : 'Computer';

      GameController.startGame(playerOneName, playerTwoName);

      // Hide start buttons and show reset and end buttons
      startButtons.forEach((btn) => btn.classList.add('hidden'));
      resetButton.classList.remove('hidden');
      endButton.classList.remove('hidden');

      // Add event listeners to board boxes
      boardBoxes.forEach((box) => {
        box.addEventListener('click', handleBox);
      });
    });
  });

  function handleBox() {
    console.log(GameController.currentPlayer.name);
    const index = this.dataset.index;
    GameController.handlePlayerTurn(index);
  }

  resetButton.addEventListener('click', () => {
    GameController.startGame(playerOneName, playerTwoName);
    // Clear the board UI
    Gameboard.resetBoard();
  });

  endButton.addEventListener('click', () => {
    const whosTurn = document.querySelector('.player h2');
    whosTurn.textContent = '';

    startButtons.forEach((btn) => btn.classList.remove('hidden'));
    resetButton.classList.add('hidden');
    endButton.classList.add('hidden');

    // Remove event listeners from board boxes
    boardBoxes.forEach((box) => {
      box.removeEventListener('click', handleBox);
    });
  });
};

play();

const btns = document.querySelector('.btns');
btns.addEventListener('mouseover', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const audio = document.querySelector('.hoverSound');
  PlaySound(audio);
});
btns.addEventListener('focusin', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const audio = document.querySelector('.hoverSound');
  PlaySound(audio);
});
btns.addEventListener('click', (e) => {
  if (e.target.tagName !== 'BUTTON') return;
  const audio = document.querySelector('.selectSound');
  console.log('clicked');
  PlaySound(audio);
});

function PlaySound(sound) {
  sound.play();
}

// function StopSound(sound) {
//   sound.pause();
//   sound.currentTime = 0;
// }
