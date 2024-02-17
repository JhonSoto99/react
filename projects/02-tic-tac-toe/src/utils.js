import {WINNER_COMBOS} from "./constants.js";

export const checkWinner = (boardToCheck) => {
  for (const combo of WINNER_COMBOS) {
    const [a, b, c] = combo
    if(
      boardToCheck[a] && // 0 => x u o
      boardToCheck[a] === boardToCheck[b] && //
      boardToCheck[b] === boardToCheck[c] //
    ) {
      return boardToCheck[a]
    }
  }
  return null
}

export const checkEndGame = (newBoard) => {
  return newBoard.every((square) => square !== null)
}