document.addEventListener('DOMContentLoaded', () => {
  const squares = document.querySelectorAll('.grid div')
  const scoreDisplay = document.querySelector('span')
  const startBtn = document.querySelector('.start')

  const width = 10
  let currentIndex = 0
  let appleIndex = 0
  let currentSnake = [2, 1, 0] // head is 2, 0 is tail, all the 1's are the body
  let direction = 1
  let score = 0
  let speed = 0.9
  let intervalTime = 0
  let interval = 0

  
  // to (re)start the game
  function startGame() {
    squares[appleIndex].classList.remove('apple')
    randomApple()
    currentSnake.forEach(index => squares[index].classList.remove('snake'))
    currentSnake = [2, 1, 0]
    currentSnake.forEach(index => squares[index].classList.add('snake'))
    direction = 1
    score = 0
    scoreDisplay.innerText = score
    speed = 0.9
    intervalTime = 1000
    clearInterval(interval)
    interval = setInterval(moveOutcomes, intervalTime)
  }

  // function that deals with all the move outcomes of the snake
  function moveOutcomes() {
    //  deals with the snake hitting border or itself
    if (
      (currentSnake[0] + width >= (width * width) && direction === width) || // if snake hits bottom
      (currentSnake[0] % width === width - 1 && direction === 1) || // if snake hits right wall
      (currentSnake[0] % width === 0 && direction === -1) || // if snake hits left wall
      (currentSnake[0] - width < 0 && direction === -width) || // if snake hits left wall
      squares[currentSnake[0] + direction].classList.contains('snake') // if snake goes into itself
    ) {
      return clearInterval(interval)
    }
    
    const tail = currentSnake.pop() // removes last bit of array and shows it
    squares[tail].classList.remove('snake') // removes class of snake from the tail
    currentSnake.unshift(currentSnake[0] + direction) // gives direction to the head

    // deals with sanke getting apple
    if(squares[currentSnake[0]].classList.contains('apple')) {
      squares[currentSnake[0]].classList.remove('apple')
      squares[tail].classList.add('snake')
      currentSnake.push(tail)
      randomApple()
      score++
      scoreDisplay.textContent = score
      clearInterval(interval)
      intervalTime = intervalTime * speed
      interval = setInterval(moveOutcomes, intervalTime)
    }
    squares[currentSnake[0]].classList.add('snake')
  }

  function randomApple() {
    do {
      appleIndex = Math.floor(Math.random() * squares.length)
    } while(squares[appleIndex].classList.contains('snake'))
    squares[appleIndex].classList.add('apple')
  }



  function control(e) {
    squares[currentIndex].classList.remove('snake')

    if(e.keyCode === 39) {
      direction = 1 // right arrow key to go right one div
    } else if (e.keyCode === 38) {
      direction = -width // up arrow key to go back 10 divs, appearing to go up
    } else if (e.keyCode === 37) {
      direction = -1 // left arrow key to go left one div
    } else if (e.keyCode === 40) {
      direction = +width // down arrow key to go forward 10 divs, appearing to go down
    }
    console.log('hello')
  }

  document.addEventListener('keyup', control)
  startBtn.addEventListener('click', startGame)
})