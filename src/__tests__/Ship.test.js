import Ship from '../Ship';

describe('Ship', () => {
  test('hit() increments the number of hits', () => {
    const ship = new Ship(2);
    ship.hit();
    expect(ship.hits).toBe(1);
    ship.hit();
    expect(ship.hits).toBe(2);
  });

  test('isSunk() returns true if the ship has been sunk', () => {
    const ship = new Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });

  test('isSunk() returns false if the ship has not been sunk', () => {
    const ship = new Ship(2);
    expect(ship.isSunk()).toBe(false);
  });
});
