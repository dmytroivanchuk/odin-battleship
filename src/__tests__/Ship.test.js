import Ship from '../Ship';

describe('Ship', () => {
  const createDestroyer = () => {
    const destroyerCoordinates = [
      [0, 0],
      [0, 1],
    ];
    return new Ship('Destroyer', destroyerCoordinates);
  };

  test('returns true if ship sunk', () => {
    const destroyer = createDestroyer();
    destroyer.hit();
    destroyer.hit();
    expect(destroyer.isSunk()).toBe(true);
  });

  test("returns false if ship didn't sunk", () => {
    const destroyer = createDestroyer();
    expect(destroyer.isSunk()).toBe(false);
  });
});
