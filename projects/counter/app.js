let counter = 0

const display = document.getElementById('display')
display.innerHTML='0'

const dec_btn = document.getElementById('dec_btn')
const inc_btn = document.getElementById('inc_btn')
const reset = document.getElementById('reset')

dec_btn.onclick = () => {
  counter--
  color_change()
  display.innerHTML = counter.toString()
}

inc_btn.onclick = () => {
  counter++
  if (counter > 0) {
    display.classList.toggle('positive')
  } else if (counter === 0) {
    display.classList.toggle('zero')
  }
  display.innerHTML = counter.toString()
}

reset.onclick = () => {
  counter = 0
  display.innerHTML = '0'
  color_change()
} 

const color_change = () => {
  display.removeAttribute('class')
  if (counter > 0) {
    display.classList.add('positive')
  } else if (counter === 0) {
    display.classList.add('zero')
  } else {
    display.classList.add('negative')
  }
}