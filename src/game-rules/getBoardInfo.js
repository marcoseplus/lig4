const getBoardInfo = () => {
  const $boardColumnList = [...document.querySelectorAll('.board-column')]
  
  return $boardColumnList.reduce((acc, $column) => {
    const $boardItemList = [...$column.querySelectorAll('.board-item')]

    const boardArray = $boardItemList.reduce((boardItemAcc, $boardItem) => {
      const $ball = $boardItem.querySelector('.ball')
      if (!$ball) return [...boardItemAcc, undefined]
      return [...boardItemAcc, parseInt($ball?.getAttribute('data-player'))]
    }, [])

    return [...acc, boardArray]
  }, [])
}

export default getBoardInfo