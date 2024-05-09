"use strict"

// Elements

const dice = document.querySelector('.dice')
const rollDice = document.querySelector('.rl-dc')
const player0 = document.querySelector('.side0')
const player1 = document.querySelector('.side1')
const currentScore0 = document.querySelector('.current-score-0')
const currentScore1 = document.querySelector('.current-score-1')
const score0 = document.getElementById('score--0')
const score1 = document.getElementById('score--1')
const holdBtn = document.querySelector('.hold')
const newGameBtn = document.querySelector('.nw-gm')

// Additional Elements

let scores = [0, 0]
let currentTotal = 0
let activePlayer = 0
let playing = true

// Game Functionality

dice.classList.add('hidden')

    // Roll Dice

rollDice.addEventListener('click', function() {
    if(playing) {
    const diceNum = Math.trunc(Math.random()*6) + 1
    dice.classList.remove('hidden')
    dice.src = `dice-${diceNum}.png`

    if(diceNum !== 1) {
        currentTotal += diceNum
        document.querySelector(`.current-score-${activePlayer}`).textContent = currentTotal
    } else {
        document.querySelector(`.side${activePlayer}`).classList.remove('selected')
        document.querySelector(`.current-score-${activePlayer}`).textContent = 0
        activePlayer = activePlayer === 0 ? 1 : 0
        currentTotal = 0
        document.querySelector(`.side${activePlayer}`).classList.add('selected')
    } }
})

// Hold The Score

holdBtn.addEventListener('click', function() {
    if(playing) {
    scores[activePlayer] += currentTotal
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer]
    document.querySelector(`.current-score-${activePlayer}`).textContent = 0
    
    
    if(scores[activePlayer] >= 100) {
        playing = false
        dice.classList.add('hidden')
        document.querySelector(`.side${activePlayer}`).classList.add('player-winner')
        document.querySelector(`.side${activePlayer}`).classList.remove('selected')
    } else {
        document.querySelector(`.side${activePlayer}`).classList.remove('selected')
        activePlayer = activePlayer === 0 ? 1 : 0
        currentTotal = 0
        document.querySelector(`.side${activePlayer}`).classList.add('selected')
    } }
})

// Restart The Game

newGameBtn.addEventListener('click', function() {
    currentScore0.textContent = 0
    currentScore1.textContent = 0
    score0.textContent = 0
    score1.textContent = 0
    playing = true
    dice.classList.add('hidden')
    activePlayer = 0
    player0.classList.add('selected')
    player1.classList.remove('selected')
    player0.classList.remove('player-winner')
    player1.classList.remove('player-winner')
})
