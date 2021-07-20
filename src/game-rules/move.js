import Ball from "../components/ball.js"

const move = (player, column) => {
  const $boardColumnList = document.querySelectorAll('.board-column')
  const $boardItemList = [...$boardColumnList[column].querySelectorAll('.board-item')]
  
  for (const $item of $boardItemList.reverse()) {
    const $ball = $item.querySelector('.ball')
    
    if ($ball) continue
    
    const ball = Ball(player)

    return $item.appendChild(ball)
  }
}

export default move