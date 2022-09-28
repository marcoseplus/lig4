const printPlayerBoard = (player1Score, player2Score) => {
  const $score1 = document.querySelector('.score-player-1')
  const $score2 = document.querySelector('.score-player-2')

  $score1.textContent = player1Score
  $score2.textContent = player2Score
}

export default printPlayerBoard