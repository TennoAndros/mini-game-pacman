import { GRID_SIZE, CELL_SIZE, OBJECT_TYPE, CLASS_LIST } from "./setup";

class GameBoard {
  constructor(DOMGrid) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid = DOMGrid;
  }

  showGameStatus(gameWin) {
    const div = document.createElement("div");
    div.classList.add("game-status");
    div.innerHTML = `${gameWin ? "WIN!" : "GAME OVER!"}`;
    this.DOMGrid.appendChild(div);
  }

  createGrid(level) {
    this.dotCount = 0;
    this.grid = [];
    this.DOMGrid.innerHTML = "";
    this.DOMGrid.style.cssText = `grid-template-columns:repeat(${GRID_SIZE},${CELL_SIZE}px);`;

    level.forEach((square) => {
      const div = document.createElement("div");
      div.classList.add("square", CLASS_LIST[square]);
      div.style.cssText = `width:${CELL_SIZE}px; height:${CELL_SIZE}px`;
      this.DOMGrid.appendChild(div);
      this.grid.push(div);

      if (CLASS_LIST[square] === OBJECT_TYPE.DOT) this.dotCount++;
    });
  }

  addObject(position, classes) {
    this.grid[position].classList.add(...classes);
  }

  removeObject(position, classes) {
    this.grid[position].classList.remove(...classes);
  }

  objectExists = (position, object) => {
    return this.grid[position].classList.contains(object);
  };

  rotateDiv(position, degrees) {
    this.grid[position].style.transform = `rotate(${degrees}deg)`;
  }

  moveCharacter(character) {
    if (character.shouldMove()) {
      const { nextMovePosition, direction } = character.getNextMove(
        this.objectExists.bind(this)
      );
      const { classesToRemove, classesToAdd } = character.makeMove();

      if (character.rotation && nextMovePosition !== character.position) {
        this.rotateDiv(nextMovePosition, character.direction.rotation);
        this.rotateDiv(character.position, 0);
      }

      this.removeObject(character.position, classesToRemove);
      this.addObject(nextMovePosition, classesToAdd);

      character.setNewPosition(nextMovePosition, direction);
    }
  }

  static createGameBoard(DOMGrid, level) {
    const board = new this(DOMGrid);
    board.createGrid(level);
    return board;
  }
}

export default GameBoard;
