const resetBoard = () => {
  const $ballList = document.querySelectorAll('.ball')

  $ballList.forEach($ball => $ball.remove())
}

export default resetBoard