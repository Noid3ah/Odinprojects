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
  // const board = ['', '', '', '', '', '', '', '', ''];
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
// const play = () => {
//   const playerOneName = prompt(`Enter player 1's name:`);
//   const playerTwoName = prompt(`Enter player 2's name:`);

//   GameController.startGame(playerOneName, playerTwoName);

//   while (GameController.gameActive) {
//     const index = parseInt(
//       prompt(
//         `${GameController.currentPlayer.name}'s turn. Enter board position (0-8)`
//       )
//     );

//     GameController.handlePlayerTurn(index);
//   }
// };

const play = () => {
  const startButtons = document.querySelectorAll('.start');
  const resetButton = document.querySelector('.reset');
  const endButton = document.querySelector('.end');
  const boardBoxes = document.querySelectorAll('.box');

  startButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const playerOneName = prompt("Enter Player 1's name:");
      const playerTwoName = button.classList.contains('two__player')
        ? prompt("Enter Player 2's name:")
        : 'Computer';

      GameController.startGame(playerOneName, playerTwoName);

      // Hide start buttons and show reset and end buttons
      startButtons.forEach((btn) => btn.classList.add('hidden'));
      resetButton.classList.remove('hidden');
      endButton.classList.remove('hidden');

      // Add event listeners to board boxes
      boardBoxes.forEach((box) => {
        box.addEventListener('click', () => {
          console.log(GameController.currentPlayer.name);
          const index = box.dataset.index;
          GameController.handlePlayerTurn(index);
        });
      });
    });
  });

  resetButton.addEventListener('click', () => {
    GameController.startGame('', ''); // You can customize player names or leave them empty
    // Clear the board UI
    boardBoxes.forEach((box) => {
      box.textContent = '';
    });
  });

  endButton.addEventListener('click', () => {
    // Show start buttons and hide reset and end buttons
    startButtons.forEach((btn) => btn.classList.remove('hidden'));
    resetButton.classList.add('hidden');
    endButton.classList.add('hidden');

    // Remove event listeners from board boxes
    boardBoxes.forEach((box) => {
      box.removeEventListener('click', () => {});
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
