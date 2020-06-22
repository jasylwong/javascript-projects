const squares = document.querySelectorAll('.square')
const mole = document.querySelector('.mole')
const score = document.querySelector('#score')
const timeLeft = document.querySelector('#time-left')

let result = 0;
let currentTime = timeLeft.textContent;

function randomSquare() {
  squares.forEach(square => {
    square.classList.remove('mole');
  })
  let randomPosition = squares[Math.floor(Math.random() * 9)];
  randomPosition.classList.add('mole');
  hitPosition = randomPosition.id;
}

squares.forEach(square => {
  square.addEventListener('mouseup', () => {
    if (square.id === hitPosition) {
      result ++;
      score.textContent = result;
    }
  })
})

let moveMole = setInterval(randomSquare, 800)

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    clearInterval(moveMole);
    alert(`Game over! Your score is ${result}`)
  }
}

let timerId = setInterval(countDown, 1000);