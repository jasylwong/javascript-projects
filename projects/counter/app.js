let counter = 0

const display = document.getElementById('display')
display.innerHTML='0'

const dec_btn = document.getElementById('dec_btn')
const inc_btn = document.getElementById('inc_btn')
const reset = document.getElementById('reset')

dec_btn.onclick = () => {
  counter--
  display.innerHTML = counter.toString()
}

inc_btn.onclick = () => {
  counter++
  display.innerHTML = counter.toString()
}

reset.onclick = () => {
  counter = 0
  display.innerHTML = '0'
}
