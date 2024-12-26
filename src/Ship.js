export default class Ship {
  constructor(name, coordinates) {
    this.name = name;
    this.coordinates = coordinates;
  }

  #hits = 0;
  name = '';
  coordinates = [];
  isSunk = () => this.#hits === this.coordinates.length;
  hit = () => (this.#hits += 1);
}
