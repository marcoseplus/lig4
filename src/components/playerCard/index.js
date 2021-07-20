import Element from "../shared/element.js"

const PlayerCard = (player) => {
  const el_playerImage = Element({
    elementType: 'img',
    classes: ['player-card-image'],
    src: player?.photo
  })

  const el_score = Element({
    elementType: 'span',
    classes: ['player-card-score'],
    text: `${player?.name}`
  })

  const buttonFirst = Element({
    elementType: 'button',
    classes: ['player-button-turn', 'player-button-turn-0'],
    text: 'Primeiro'
  })

  const buttonSecond = Element({
    elementType: 'button',
    classes: ['player-button-turn', 'player-button-turn-1'],
    text: 'Segundo'
  })

  const boxTurn = Element({
    elementType: 'div',
    classes: ['player-box-turn'],
    children: [buttonFirst, buttonSecond]
  })

  const wrapper = Element({
    elementType: 'div',
    classes: ['player-wrapper'],
    children: [el_score, boxTurn]
  })

  const el_container = Element({
    elementType: 'li',
    classes: ['player-card'],
    children: [el_playerImage, wrapper],
    dataValue: player.name
  }) 

  el_container.addEventListener('click', () => {
    el_container.classList.toggle('card-selected')
  })

  return el_container
}

export default PlayerCard