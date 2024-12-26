import Gameboard from '../Gameboard';
import Ship from '../Ship';

describe('Gameboard', () => {
  const createGameBoard = () => {
    const destroyerCoordinates = [
      [0, 5],
      [1, 5],
    ];
    const destroyer = new Ship('Destroyer', destroyerCoordinates);
    const submarineCoordinates = [
      [4, 0],
      [5, 0],
      [6, 0],
    ];
    const submarine = new Ship('Submarine', submarineCoordinates);
    const cruiserCoordinates = [
      [9, 6],
      [9, 7],
      [9, 8],
    ];
    const cruiser = new Ship('Cruiser', cruiserCoordinates);
    const battleshipCoordinates = [
      [8, 1],
      [8, 2],
      [8, 3],
      [8, 4],
    ];
    const battleship = new Ship('Battleship', battleshipCoordinates);
    const carrierCoordinates = [
      [1, 8],
      [2, 8],
      [3, 8],
      [4, 8],
      [5, 8],
    ];
    const carrier = new Ship('Carrier', carrierCoordinates);
    const ships = [destroyer, submarine, cruiser, battleship, carrier];
    return new Gameboard(ships);
  };

  test('gets hit coordinates', () => {
    const gameboard = createGameBoard();
    gameboard.receiveAttack([0, 5]);
    expect(gameboard.getCoordinates()).toEqual({ hitCoordinates: [[0, 5]], missCoordinates: [] });
  });

  test('gets miss coordinates', () => {
    const gameboard = createGameBoard();
    gameboard.receiveAttack([0, 4]);
    expect(gameboard.getCoordinates()).toEqual({
      hitCoordinates: [],
      missCoordinates: [[0, 4]],
    });
  });

  test('gets coordinates', () => {
    const gameboard = createGameBoard();
    gameboard.receiveAttack([7, 4]);
    gameboard.receiveAttack([8, 4]);
    expect(gameboard.getCoordinates()).toEqual({
      hitCoordinates: [[8, 4]],
      missCoordinates: [[7, 4]],
    });
  });

  test("confirms that all ships didn't sunk", () => {
    const gameboard = createGameBoard();
    gameboard.receiveAttack([0, 5]);
    expect(gameboard.isAllShipsSunk()).toBe(false);
  });

  test('confirms that all ships sunk', () => {
    const gameboard = createGameBoard();
    gameboard.receiveAttack([0, 5]);
    gameboard.receiveAttack([1, 5]);
    gameboard.receiveAttack([4, 0]);
    gameboard.receiveAttack([5, 0]);
    gameboard.receiveAttack([6, 0]);
    gameboard.receiveAttack([9, 6]);
    gameboard.receiveAttack([9, 7]);
    gameboard.receiveAttack([9, 8]);
    gameboard.receiveAttack([8, 1]);
    gameboard.receiveAttack([8, 2]);
    gameboard.receiveAttack([8, 3]);
    gameboard.receiveAttack([8, 4]);
    gameboard.receiveAttack([1, 8]);
    gameboard.receiveAttack([2, 8]);
    gameboard.receiveAttack([3, 8]);
    gameboard.receiveAttack([4, 8]);
    gameboard.receiveAttack([5, 8]);
    expect(gameboard.isAllShipsSunk()).toBe(true);
  });
});
