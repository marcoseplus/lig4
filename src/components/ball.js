const Ball = (player) => {
  const ball = document.createElement('div')
  ball.classList.add(...[`ball`, `ball-${player}`])
  ball.setAttribute('data-player', player)

  return ball
}

export default Ball