import autoMove from "./src/game-rules/autoMove.js";
import getBoardInfo from "./src/game-rules/getBoardInfo.js";
import move from "./src/game-rules/move.js";
import printPlayerBoard from "./src/game-rules/printPlayerBoard.js";
import resetBoard from "./src/game-rules/resetBoard.js";
import verifyGame from "./src/game-rules/verifyGame.js";
import players from "./src/players/index.js";

const $butVsBotButton = document.querySelector(".button-auto");
const $buttonpBotPlay = document.querySelector(".button-play");
const $boardColumnList = document.querySelectorAll(".board-column");
const $meVsBot = document.querySelector(".button-me-vs-bot");
const $botVsMe = document.querySelector(".button-bot-vs-me");
const $buttonResetBoard = document.querySelector('.button-reset')
const $autoReset = document.querySelector('#auto-reset')

let player = 0;
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let mevsbot = false;
let botVsMe = false;

$boardColumnList.forEach(($boardColumn, index) => {
  $boardColumn.addEventListener("click", () => {
    move(player, index);
    if (verifyGame(player)) {
      $autoReset.checked && setTimeout(resetBoard, 1000);
      player === 0 ? scorePlayer1++ : scorePlayer2++;
      printPlayerBoard(scorePlayer1, scorePlayer2);
      botVsMe && setTimeout(() => {
        move(player, index)
        player = player === 0 ? 1 : 0;
      }, 1001)
      return;
    }

    player = player === 0 ? 1 : 0;

    if (mevsbot || botVsMe) {
      setTimeout(() => {
        move(player, players.getAll()[0].script(getBoardInfo(), player));
        if (verifyGame(player)) {
          $autoReset.checked && setTimeout(resetBoard, 1000);
          player === 0 ? scorePlayer1++ : scorePlayer2++;
          printPlayerBoard(scorePlayer1, scorePlayer2);
          setTimeout(() => {
            move(player, index)
            player = player === 0 ? 1 : 0;
          }, 1001)
          return;
        }
        player = player === 0 ? 1 : 0;
      }, 200);
    }
  });
});

$butVsBotButton.addEventListener("click", () => {
  !$butVsBotButton.classList.contains("active") &&
    autoMove(
      players.getAll()[0],
      players.getAll()[0],
      player,
      scorePlayer1,
      scorePlayer2
    );
  $butVsBotButton.classList.toggle("active");
});

$buttonpBotPlay.addEventListener("click", () => {
  move(player, players.getAll()[0].script(getBoardInfo(), player));
  if (verifyGame(player)) {
    $autoReset.checked && setTimeout(resetBoard, 1000);
    player === 0 ? scorePlayer1++ : scorePlayer2++;
    printPlayerBoard(scorePlayer1, scorePlayer2);
    setTimeout(() => {
      move(player, index)
      player = player === 0 ? 1 : 0;
    }, 1001)
    return;
  }
  player = player === 0 ? 1 : 0;
});

$meVsBot.addEventListener("click", () => {
  mevsbot = !mevsbot;
  $meVsBot.classList.toggle("active");
});

$botVsMe.addEventListener("click", () => {
  botVsMe = !botVsMe;
  !$botVsMe.classList.contains("active") && move(player, players.getAll()[0].script(getBoardInfo(), player));
  player = player === 0 ? 1 : 0;
  $botVsMe.classList.toggle("active");
});

$buttonResetBoard.addEventListener('click', () => {
  resetBoard()
})

// CardListPriter(players.getAll());
