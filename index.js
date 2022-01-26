let cards = []
let sum = 0
let hasBlackJack = false
let isAlive = false
let message = ''
let messageEl = document.getElementById('message-el')
let sumEl = document.getElementById('sum-el')
let cardsEl = document.getElementById('cards-el')

let player = {
  Name: 'Player',
  Chips: 100,
}

let playerEl = document.getElementById('player-el')
playerEl.textContent = player.Name + ': $ ' + player.Chips
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1
  if (randomNumber > 10) {
    return 10
  } else if (randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstcard = getRandomCard()
  let secondcard = getRandomCard()
  cards = [firstcard, secondcard]
  sum = firstcard + secondcard
  renderGame()
}

function renderGame() {
  cardsEl.textContent = 'Cards:'
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' '
  }

  sumEl.textContent = 'sum: ' + sum
  if (sum <= 20) {
    message = 'Do you want to draw a new card?'
    messageEl.textContent = message
  } else if (sum === 21) {
    message = 'wohoo! You have got a Blackjack  🎉🤩 !$!$'
    messageEl.textContent = message
    hasBlackJack = true
    player.Chips = parseInt(player.Chips) + 1
  } else {
    message = 'Sorry! You are out of the game!😰'
    messageEl.textContent = message
    isAlive = false
  }
}
function newCard() {
  if (hasBlackJack === false && isAlive === true) {
    let card = getRandomCard()
    sum += card
    cards.push(card)
    renderGame()
  }
}
