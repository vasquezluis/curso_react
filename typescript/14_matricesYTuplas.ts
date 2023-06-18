// ----> Matrices y tuplas

/**
 ['X', 'O', 'X'],
 ['O', 'X', 'O'],
 ['X', 'O', 'O'],
 */

type CellValue = "X" | "O" | "";
// -> tupla -> como un array pero con un limite fijado
type GameBoard = [
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue],
  [CellValue, CellValue, CellValue]
];

const gameBoard: GameBoard = [
  ["X", "O", "X"],
  ["O", "X", "O"],
  ["X", "O", "O"],
];
