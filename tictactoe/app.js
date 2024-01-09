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
        return [board[a], board[b], board[c]];
      }
    }
    return null;
  };

  const updatePlayerScore = (currentPlayer) => {
    const playerScore = Array.from(document.querySelectorAll('.player__score'));
    let score = parseInt(
      playerScore.find((player) => player.dataset.playername === currentPlayer)
        .textContent
    );
    score++;

    playerScore.forEach((player) => {
      if (currentPlayer === player.dataset.playername) {
        player.textContent = score.toString().padStart(2, '0');
      }
    });
  };

  const resetScore = () => {
    const playerScore = Array.from(document.querySelectorAll('.player__score'));
    playerScore.forEach((player) => (player.textContent = '00'));
  };

  const isBoardFull = () => {
    return board.every((box) => box.querySelector('span').textContent !== '');
  };

  const getBoard = () => board.slice();

  const resetBoard = () => {
    for (let i = 0; i < board.length; i++) {
      board[i].querySelector('span').textContent = '';
      board[i].querySelector('span').classList.remove('x', 'o');
    }
  };

  return {
    isValidMove,
    getWinner,
    updatePlayerScore,
    resetScore,
    isBoardFull,
    getBoard,
    resetBoard,
  };
})();

const Player = (name, marker) => {
  return { name, marker };
};

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
      const winner = Gameboard.getWinner();
      if (winner) {
        whosTurn.textContent = `${currentPlayer.name} wins!`;
        for (let i = 0; i < winner.length; i++) {
          setTimeout(() => {
            winner[0].classList.add('shake');
          }, 100);
          setTimeout(() => {
            winner[1].classList.add('shake');
          }, 200);
          setTimeout(() => {
            winner[2].classList.add('shake');
          }, 300);
        }
        Events.playSound('winSound');
        Gameboard.updatePlayerScore(currentPlayer.name);
        gameActive = false;
      } else if (Gameboard.isBoardFull()) {
        whosTurn.textContent = `It's a draw!`;
        Events.playSound('drawSound');
        gameActive = false;
      } else {
        switchPlayer();
        if (currentPlayer.name === 'Computer') {
          handleComputerTurn();
        }
      }
    }
  };

  const handleComputerTurn = () => {
    if (
      GameController.gameActive &&
      GameController.currentPlayer.name === 'Computer'
    ) {
      let availableIndexes = [];
      Gameboard.getBoard().forEach((box, index) => {
        if (box.querySelector('span').textContent === '') {
          availableIndexes.push(index);
        }
      });

      if (availableIndexes.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableIndexes.length);
        const computerMove = availableIndexes[randomIndex];
        setTimeout(() => {
          GameController.handlePlayerTurn(computerMove);
        }, 500);
      }
    }
  };

  const startGame = (playerOneName, playerTwoName) => {
    const header = document.querySelector('.header');
    const soundIcon = document.querySelector('.audio-icon span');
    const scores = Array.from(document.querySelector('.score__board').children);

    const whosTurn = document.querySelector('.player h2');

    playerOne = Player(playerOneName, 'x');
    playerTwo = Player(playerTwoName, 'o');
    currentPlayer = playerOne;
    header.classList.add('out-of-view');
    soundIcon.classList.remove('hidden');

    scores.forEach((score) => score.classList.add('in-view'));
    gameActive = true;
    Gameboard.resetBoard();
    whosTurn.textContent = `${currentPlayer.name}'s turn.`;

    const boardBoxes = document.querySelectorAll('.box');
    boardBoxes.forEach((box) => {
      box.addEventListener('click', Events.boxClickHandler);
    });

    Events.isBackgroundMusic();
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

const play = () => {
  const startButtons = document.querySelectorAll('.start');
  const resetButton = document.querySelector('.reset');
  const endButton = document.querySelector('.end');
  const boardBoxes = document.querySelectorAll('.box');
  const header = document.querySelector('.header');
  const soundIcon = document.querySelector('.audio-icon span');
  const scores = Array.from(document.querySelector('.score__board').children);
  let playerOneName;
  let playerTwoName;

  startButtons.forEach((button) => {
    const modals = Array.from(document.querySelector('.modals').children);
    const getData = async (selector, defaultStr) => {
      let player;
      const findModal = modals.find((modal) =>
        modal.classList.contains(`modal--${selector}`)
      );
      findModal.showModal();
      const input = findModal.querySelector(`input`);
      input.value = '';
      const confirmName = findModal.querySelector('.confirm');

      return new Promise((resolve) => {
        confirmName.addEventListener('click', () => {
          player = input.value ? input.value : `${defaultStr}`;
          findModal.close();
          resolve(player);
        });
      });
    };

    button.addEventListener('click', async () => {
      playerOneName = await getData('one', 'Player one');

      if (button.classList.contains('two__player')) {
        playerTwoName = await getData('two', 'Player two');
      } else {
        playerTwoName = 'Computer';
      }

      GameController.startGame(playerOneName, playerTwoName);

      const playerOneScore = document.querySelector('.player--one');
      playerOneScore.dataset.playername = playerOneName;

      const playerTwoScore = document.querySelector('.player--two');
      playerTwoScore.dataset.playername = playerTwoName;

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
    const index = this.dataset.index;
    GameController.handlePlayerTurn(index);
  }

  resetButton.addEventListener('click', () => {
    const winner = Gameboard.getWinner();

    if (winner) {
      winner.forEach((winningBox) => winningBox.classList.remove('shake'));
    }

    GameController.startGame(playerOneName, playerTwoName);
    Gameboard.resetBoard();
  });

  endButton.addEventListener('click', () => {
    const winner = Gameboard.getWinner();
    const whosTurn = document.querySelector('.player h2');
    whosTurn.textContent = '';

    Gameboard.resetBoard();
    Gameboard.resetScore();

    [...Gameboard.getBoard()][0].querySelector('span').textContent = 'o';
    [...Gameboard.getBoard()][0].querySelector('span').className = 'default-o';
    [...Gameboard.getBoard()][4].querySelector('span').textContent = 'o';
    [...Gameboard.getBoard()][4].querySelector('span').className = 'default-o';
    [...Gameboard.getBoard()][6].querySelector('span').textContent = 'x';
    [...Gameboard.getBoard()][6].querySelector('span').className = 'default-x';
    [...Gameboard.getBoard()][8].querySelector('span').textContent = 'x';
    [...Gameboard.getBoard()][8].querySelector('span').className = 'default-x';

    startButtons.forEach((btn) => btn.classList.remove('hidden'));
    resetButton.classList.add('hidden');
    endButton.classList.add('hidden');
    header.classList.remove('out-of-view');
    soundIcon.classList.add('hidden');
    scores.forEach((score) => score.classList.remove('in-view'));
    if (winner || Gameboard.isBoardFull()) {
      winner.forEach((winningBox) => winningBox.classList.remove('shake'));
    }

    // Remove event listeners from board boxes
    boardBoxes.forEach((box) => {
      box.removeEventListener('click', handleBox);
      box.removeEventListener('click', Events.boxClickHandler);
    });
    Events.stopSound('bgSound');
  });
};

const Events = (() => {
  const btns = document.querySelector('.btns');
  const playSound = (selector, vol = 0.4) => {
    const sound = document.querySelector(`.${selector}`);
    sound.volume = vol;
    sound.play();
  };

  const stopSound = (selector) => {
    const sound = document.querySelector(`.${selector}`);
    sound.pause();
    sound.currentTime = 0;
  };

  const boxClickHandler = () => {
    playSound('placeMarkSound');
  };

  const isBackgroundMusic = () => {
    const icon = document.querySelector('.audio-icon span');
    let isPlaying = false;

    icon.addEventListener('click', () => {
      if (isPlaying) {
        stopSound('bgSound');
        icon.textContent = 'volume_off';
        isPlaying = false;
      } else {
        playSound('bgSound', 0.03);
        icon.textContent = 'volume_up';
        isPlaying = true;
      }
    });
  };

  btns.addEventListener('mouseover', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    playSound('hoverSound');
  });
  btns.addEventListener('focusin', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    playSound('hoverSound');
  });

  btns.addEventListener('click', (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    playSound('selectSound');
  });

  return {
    playSound,
    stopSound,
    boxClickHandler,
    isBackgroundMusic,
  };
})();

play();
