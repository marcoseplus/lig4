import checkEquality from "./checkEquality.js"
import getBoardInfo from "./getBoardInfo.js";
import paintWinnerBall from "./paintWinnerBall.js"
import resetBoard from "./resetBoard.js";

const verifyGame = (player) => {
  const $boardItemList = document.querySelectorAll('.board-item');

  if (getBoardInfo().every(array => [...array].every(item => item !== undefined))){
    setTimeout(resetBoard, 1000)
    return false
  }

  return [...$boardItemList].some(($boardItem, index) => {
    const columnIndex = Math.floor(index / 6)
    const itemIndexOnColumn =  index - (columnIndex * 6)
    const rightLine = [$boardItem, $boardItemList[index + 6], $boardItemList[index + (6 * 2)], $boardItemList[index + (6 * 3)]]
    const bottomLine = [itemIndexOnColumn < 3 ? $boardItem : undefined, $boardItemList[index + 1], $boardItemList[index + 2], $boardItemList[index + 3]]
    const diagonalLeftLine = [itemIndexOnColumn < 3 ? $boardItem : undefined, $boardItemList[index + 6 + 1], $boardItemList[index + (6 * 2) + 2], $boardItemList[index + (6 * 3) + 3]]
    const diagonalRightLine = [itemIndexOnColumn > 2 ? $boardItem : undefined, $boardItemList[index + 6 - 1], $boardItemList[index + (6 * 2) - 2], $boardItemList[index + (6 * 3) - 3]]

    if (checkEquality(rightLine, player)) {
      paintWinnerBall(rightLine)
      return true
    } 

    if (checkEquality(bottomLine, player)) {
      paintWinnerBall(bottomLine)
      return true
    }

    if (checkEquality(diagonalLeftLine, player)) {
      paintWinnerBall(diagonalLeftLine)
      return true
    }

    if (checkEquality(diagonalRightLine, player)) {
      paintWinnerBall(diagonalRightLine)
      return true
    }

    return false
  })
}

export default verifyGame