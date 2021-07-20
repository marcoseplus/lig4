const paintWinnerBall = ($winnerBoardList) => {
  $winnerBoardList.forEach($boardList => {
    if (!$boardList) return;
    const $ball = $boardList.querySelector('.ball')
    $ball?.classList.add('winner')

    setTimeout(() => {
      $ball?.classList.remove('winner')
    }, 1500)
  })
}

export default paintWinnerBall