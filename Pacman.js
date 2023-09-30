import { OBJECT_TYPE, DIRECTIONS } from "./setup";

class Pacman {
  constructor(speed, startPosition) {
    this.position = startPosition;
    this.speed = speed;
    this.direction = null;
    this.timer = 0;
    this.powerPill = false;
    this.rotation = true;
  }

  shouldMove() {
    if (!this.direction) return false;
    if (this.timer === this.speed) {
      this.timer = 0;
      return true;
    }
    this.timer++;
  }

  getNextMove(objectExists) {
    let nextMovePosition = this.position + this.direction.movement;

    if (
      objectExists(nextMovePosition, OBJECT_TYPE.WALL) ||
      objectExists(nextMovePosition, OBJECT_TYPE.GHOSTLAIR)
    ) {
      nextMovePosition = this.position;
    }
    return { nextMovePosition, direction: this.direction };
  }

  makeMove() {
    const classesToRemove = [OBJECT_TYPE.PACMAN];
    const classesToAdd = [OBJECT_TYPE.PACMAN];

    return { classesToRemove, classesToAdd };
  }

  setNewPosition(nextMovePosition) {
    this.position = nextMovePosition;
  }

  handleKeyInput(event, objectExists) {
    let direction;

    if (event.keyCode >= 37 && event.keyCode <= 40) {
      direction = DIRECTIONS[event.key];
    } else return;

    const nextMovePosition = this.position + direction.movement;
    if (
      objectExists(nextMovePosition, OBJECT_TYPE.WALL) ||
      objectExists(nextMovePosition, OBJECT_TYPE.GHOST_LAIR)
    )
      return;
    this.direction = direction;
  }
}

export default Pacman;
