import PlayerCard from "../components/playerCard/index.js"

const CardListPriter = (playerList) => {
  const $cardList = document.querySelector('.player-card-list')

  console.log(playerList)

  $cardList.innerHTML = ''

  playerList.forEach(player => {
    const playerCard = PlayerCard(player)

    playerCard.addEventListener('click', () => {
      
    })

    $cardList.appendChild(playerCard)
  })
}
export default CardListPriter