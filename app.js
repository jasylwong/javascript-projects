const squares = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
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

function moveMole() {
  let timerId = null
  timerId = setInterval(randomSquare, 800)
}

moveMole();

function countDown() {
  currentTime--;
  timeLeft.textContent = currentTime;
  if (currentTime === 0) {
    clearInterval(timerId);
    alert(`Game over! Your score is ${result}`)
  }
}

let timerId = setInterval(countDown, 1000);