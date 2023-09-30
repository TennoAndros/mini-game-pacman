import { LEVEL, OBJECT_TYPE } from "./setup";
import GameBoard from "./GameBoard";
import Pacman from "./Pacman";
import randomMovement from "./ghostMovement";
import Ghost from "./Ghost";

const soundDot = require("url:./assets/sounds/munch.wav");
const soundPill = require("url:./assets/sounds/pill.wav");
const soundGameStart = require("url:./assets/sounds/game_start.wav");
const soundGameOver = require("url:./assets/sounds/death.wav");
const soundGhost = require("url:./assets/sounds/eat_ghost.wav");

const gameGrid = document.querySelector("#game");
const scoreTable = document.querySelector("#score");
const startButton = document.querySelector("#start-button");

const POWER_PILL_TIME = 10000;
const GLOBAL_SPEED = 80;
const gameBoard = GameBoard.createGameBoard(gameGrid, LEVEL);

let score = 0;
let timer = null;
let gameWin = false;
let powerPillActive = false;
let powerPillTimer = null;

function playAudio(audio) {
  const soundEffect = new Audio(audio);
  soundEffect.play();
}

function gameOver(pacman, grid) {
  playAudio(soundGameOver);

  document.removeEventListener("keydown", (event) =>
    pacman.handleKeyInput(event, gameBoard.objectExists.bind(gameBoard))
  );
  gameBoard.showGameStatus(gameWin);

  clearInterval(timer);

  startButton.classList.remove("hide");
}

function checkCollision(pacman, ghosts) {
  const collidedGhost = ghosts.find(
    (ghost) => pacman.position === ghost.position
  );
  if (collidedGhost) {
    if (pacman.powerPill) {
      playAudio(soundGhost);

      gameBoard.removeObject(collidedGhost.position, [
        OBJECT_TYPE.GHOST,
        OBJECT_TYPE.SCARED,
        collidedGhost.name,
      ]);
      collidedGhost.position = collidedGhost.startPosition;
      score += 200;
    } else {
      gameBoard.removeObject(pacman.position, [OBJECT_TYPE.PACMAN]);
      gameBoard.rotateDiv(pacman.position, 0);
      gameOver(pacman, gameGrid);
    }
  }
}

function gameLoop(pacman, ghosts) {
  gameBoard.moveCharacter(pacman);
  checkCollision(pacman, ghosts);
  ghosts.forEach((ghost) => {
    gameBoard.moveCharacter(ghost);
  });
  checkCollision(pacman, ghosts);

  if (gameBoard.objectExists(pacman.position, OBJECT_TYPE.DOT)) {
    playAudio(soundDot);
    gameBoard.removeObject(pacman.position, [OBJECT_TYPE.DOT]);
    gameBoard.dotCount--;
    score += 10;
  }

  if (gameBoard.objectExists(pacman.position, OBJECT_TYPE.PILL)) {
    playAudio(soundPill);

    gameBoard.removeObject(pacman.position, [OBJECT_TYPE.PILL]);

    pacman.powerPill = true;
    score += 50;

    clearTimeout(powerPillTimer);
    powerPillTimer = setTimeout(
      () => (pacman.powerPill = false),
      POWER_PILL_TIME
    );
  }

  if (pacman.powerPill !== powerPillActive) {
    powerPillActive = pacman.powerPill;
    ghosts.forEach((ghost) => (ghost.isScared = pacman.powerPill));
  }

  if (gameBoard.dotCount === 0) {
    gameWin = true;
    gameOver(pacman, ghosts);
  }

  scoreTable.innerHTML = score;
}

function startGame() {
  playAudio(soundGameStart);

  gameWin = false;
  powerPillActive = false;
  score = 0;

  startButton.classList.add("hide");

  gameBoard.createGrid(LEVEL);

  const pacman = new Pacman(2, 287);
  gameBoard.addObject(287, [OBJECT_TYPE.PACMAN]);
  document.addEventListener("keydown", (event) =>
    pacman.handleKeyInput(event, gameBoard.objectExists.bind(gameBoard))
  );

  const ghosts = [
    new Ghost(5, 188, randomMovement, OBJECT_TYPE.BLINKY),
    new Ghost(4, 209, randomMovement, OBJECT_TYPE.PINKY),
    new Ghost(3, 230, randomMovement, OBJECT_TYPE.INKY),
    new Ghost(2, 251, randomMovement, OBJECT_TYPE.CLYDE),
  ];

  timer = setInterval(() => gameLoop(pacman, ghosts), GLOBAL_SPEED);
}

startButton.addEventListener("click", startGame);
