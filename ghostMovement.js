import { DIRECTIONS, OBJECT_TYPE } from "./setup";

function randomMovement(position, direction, objectExists) {
  let nextMovePosition = position + direction.movement;
  const keys = Object.keys(DIRECTIONS);

  while (
    objectExists(nextMovePosition, OBJECT_TYPE.WALL) ||
    objectExists(nextMovePosition, OBJECT_TYPE.GHOST)
  ) {
    const key = keys[Math.floor(Math.random() * keys.length)];
    direction = DIRECTIONS[key];
    nextMovePosition = position + direction.movement;
  }
  return { nextMovePosition, direction };
}

export default randomMovement;
