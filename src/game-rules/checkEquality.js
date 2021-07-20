const checkEquality = (line, player) => {
  return line.every($boardItem => {
    if (!$boardItem) return false
    const $ball = $boardItem.querySelector('.ball')

    return $ball?.getAttribute('data-player') && parseInt($ball?.getAttribute('data-player')) === player
  })
}

export default checkEquality