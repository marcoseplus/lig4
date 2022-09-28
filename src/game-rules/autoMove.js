import getBoardInfo from "./getBoardInfo.js"
import move from "./move.js"
import printPlayerBoard from "./printPlayerBoard.js"
import resetBoard from "./resetBoard.js"
import verifyGame from "./verifyGame.js"

const $timeOut = document.querySelector('.time-out')
const $autoReset = document.querySelector('#auto-reset')

const autoMove = async (player1, player2, turn, player1Score, player2Score) => {
  const $butVsBotButton = document.querySelector('.button-auto')

  if (!player1) return
  
  if (turn === 0){
    turn = 1
    const column = await player1.script(getBoardInfo(), turn)
    move(turn, column)
  } else {
    turn = 0
    const column = await player2.script(getBoardInfo(), turn)
    move(turn, column)
  }

  if (verifyGame(turn)) {
    // setTimeout(() => alert(`${turn} ganhou`), 100)
    const $resetBoardTime = document.querySelector('.reset-board-time');

    turn === 0 ? player1Score++ : player2Score++
    printPlayerBoard(player1Score, player2Score)
    $autoReset.checked && setTimeout(resetBoard, $resetBoardTime.value)
    return $butVsBotButton.classList.contains('active') && setTimeout(() => $autoReset.checked && autoMove(player1, player2, turn, player1Score, player2Score), 2000)
  } else{
    setTimeout(() => $butVsBotButton.classList.contains('active') && autoMove(player1, player2, turn, player1Score, player2Score), parseInt($timeOut.value))
  }
   
}

export default autoMove