import checkEquality from "./checkEquality.js";
import getBoardInfo from "./getBoardInfo.js";
import paintWinnerBall from "./paintWinnerBall.js";
import resetBoard from "./resetBoard.js";

// const verifyGame = (player) => {
//   const $boardItemList = document.querySelectorAll('.board-item');
//   const $resetBoardTime = document.querySelector('.reset-board-time');

//   if (getBoardInfo().every(array => [...array].every(item => item !== undefined))){
//     setTimeout(resetBoard, $resetBoardTime.value)
//     return false
//   }

//   return [...$boardItemList].some(($boardItem, index) => {
//     const columnIndex = Math.floor(index / 6)
//     const itemIndexOnColumn =  index - (columnIndex * 6)
//     const rightLine = [$boardItem, $boardItemList[index + 6], $boardItemList[index + (6 * 2)], $boardItemList[index + (6 * 3)]]
//     const bottomLine = [itemIndexOnColumn < 3 ? $boardItem : undefined, $boardItemList[index + 1], $boardItemList[index + 2], $boardItemList[index + 3]]
//     const diagonalLeftLine = [itemIndexOnColumn < 3 ? $boardItem : undefined, $boardItemList[index + 6 + 1], $boardItemList[index + (6 * 2) + 2], $boardItemList[index + (6 * 3) + 3]]
//     const diagonalRightLine = [itemIndexOnColumn > 2 ? $boardItem : undefined, $boardItemList[index + 6 - 1], $boardItemList[index + (6 * 2) - 2], $boardItemList[index + (6 * 3) - 3]]

//     if (checkEquality(rightLine, player)) {
//       paintWinnerBall(rightLine)
//       return true
//     }

//     if (checkEquality(bottomLine, player)) {
//       paintWinnerBall(bottomLine)
//       return true
//     }

//     if (checkEquality(diagonalLeftLine, player)) {
//       paintWinnerBall(diagonalLeftLine)
//       return true
//     }

//     if (checkEquality(diagonalRightLine, player)) {
//       paintWinnerBall(diagonalRightLine)
//       return true
//     }

//     return false
//   })
// }

const verifyGame = (player) => {
  const $boardItemList = document.querySelectorAll(".board-item");
  const $resetBoardTime = document.querySelector(".reset-board-time");

  if (
    getBoardInfo().every((array) =>
      [...array].every((item) => item !== undefined)
    )
  ) {
    setTimeout(resetBoard, $resetBoardTime.value);
    return false;
  }
  
  const lSceneryTop = (index) => {
    const excludedColumns = [0, 6, 12, 18, 24, 30, 36, 42];

    if (excludedColumns.includes(index)) return false;

    return [[0, 6, 6 * 2, (6 * 2) - 1], [0, -6, -6 * 2, (-6 * 2) - 1]];
  };

  const lSceneryBottom = (index) => {
    const excludedIndexDefault = [5, 11, 17, 23, 29, 35, 41, 47];

    if (excludedIndexDefault.includes(index)) return false;

    return [[0, 6, 6 * 2, (6 * 2) + 1], [0, -6, -6 * 2, (-6 * 2) + 1]];
  };

  const lSceneryLeft = (index) => {
    const excludedIndexDefault = [0, 1, 2, 3, 4, 5, 10, 11, 16, 17, 22, 23, 28, 29, 34, 35, 40, 41, 46, 47];

    if (excludedIndexDefault.includes(index)) return false;

    return [[0, 1, 2, -6], [0, 1, 2, -4]];
  };

  const lSceneryRight = (index) => {
    const excludedIndexDefault = [42, 43, 44, 45, 46, 47, 4, 5, 10, 11, 16, 17, 22, 23, 28, 29, 34, 35, 40, 41];

    if (excludedIndexDefault.includes(index)) return false;

    return [[0, 1, 2, 6], [0, 1, 2, 8]];
  };

  const lSceneryList = [
    lSceneryTop,
    lSceneryBottom,
    lSceneryLeft,
    lSceneryRight,
  ];

  return [...$boardItemList].some((_, index) => {
    const scenaries = lSceneryList.filter((scenery) => !!scenery(index));

    if (!scenaries) return false;

    return scenaries.some((scenery) => {
      const reverseScenery = scenery(index, true);
      const defaultScenery = scenery(index);

      const lScenery = defaultScenery && defaultScenery[0].map(
        (item) => $boardItemList[index + item]
      );

      const lSceneryReverse = reverseScenery && reverseScenery[1].map(
        (item) => $boardItemList[index + item]
      );

      if (checkEquality(lScenery, player)) {
        paintWinnerBall(lScenery);
        return true;
      } else if (checkEquality(lSceneryReverse, player)) {
        paintWinnerBall(lSceneryReverse);
        return true;
      }

      return false;
    });
  });
};

export default verifyGame;
