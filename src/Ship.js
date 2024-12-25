export default class Ship {
  constructor(length) {
    this.#length = length;
  }

  #length;
  hits = 0;
  isSunk = () => this.hits === this.#length;
  hit = () => (this.hits += 1);
}
