import getBoardInfo from "./getBoardInfo.js"
import move from "./move.js"
import printPlayerBoard from "./printPlayerBoard.js"
import resetBoard from "./resetBoard.js"
import verifyGame from "./verifyGame.js"

const $timeOut = document.querySelector('.time-out')
const $autoReset = document.querySelector('#auto-reset')

const autoMove = (player1, player2, turn, player1Score, player2Score) => {
  const $butVsBotButton = document.querySelector('.button-auto')

  if (!player1) return
  
  if (turn === 0){
    turn = 1
    const column = player1.script(getBoardInfo(), turn)
    move(turn, column)
  } else {
    turn = 0
    const column = player2.script(getBoardInfo(), turn)
    move(turn, column)
  }

  if (verifyGame(turn)) {
    // setTimeout(() => alert(`${turn} ganhou`), 100)
    turn === 0 ? player1Score++ : player2Score++
    printPlayerBoard(player1Score, player2Score)
    $autoReset.checked && setTimeout(resetBoard, 1500)
    return $butVsBotButton.classList.contains('active') && setTimeout(() => $autoReset.checked && autoMove(player1, player2, turn, player1Score, player2Score), 2000)
  } else{
    setTimeout(() => $butVsBotButton.classList.contains('active') && autoMove(player1, player2, turn, player1Score, player2Score), parseInt($timeOut.value))
  }
   
}

export default autoMove