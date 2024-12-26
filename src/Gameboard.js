export default class Gameboard {
  constructor(ships) {
    this.#ships = ships;
  }
  #ships = [];
  #hitCoordinates = [];
  #missCoordinates = [];
  receiveAttack = (coordinates) => {
    const hitShip = this.#ships.find((ship) =>
      ship.coordinates.some((coord) => coord[0] === coordinates[0] && coord[1] === coordinates[1]),
    );

    if (hitShip) {
      hitShip.hit();
      this.#hitCoordinates.push(coordinates);
    } else {
      this.#missCoordinates.push(coordinates);
    }
  };
  isAllShipsSunk = () => {
    return this.#ships.every((ship) => ship.isSunk());
  };
  getCoordinates = () => ({
    hitCoordinates: this.#hitCoordinates,
    missCoordinates: this.#missCoordinates,
  });
}
