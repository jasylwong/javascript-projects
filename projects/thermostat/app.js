const defaultTemp = 22;
let temp = defaultTemp;
const maxTemp = 25;
const displayTemp = document.querySelector('#temp')
const plusButton = document.querySelector('#plus')
const minusButton = document.querySelector('#minus')
const resetButton = document.querySelector('#reset')
const powerSaveButton = document.querySelector('#power-save-btn')
const powerSaveDisplay = document.querySelector('#power-save-display')
let powerSaveMode = "Off";

const increaseTemp = () => {
  if (powerSaveMode === "Off" || (powerSaveMode === "On" && temp < maxTemp)) {
    temp++;
    displayTemp.innerHTML = temp;
  }
}

const decreaseTemp = () => {
  temp--;
  displayTemp.innerHTML = temp;
}

const resetTemp = () => {
  temp = defaultTemp;
  displayTemp.innerHTML = defaultTemp;
}

const switchPowerSaveMode = () => {
  powerSaveMode = powerSaveMode === "On" ? "Off" : "On"
  powerSaveDisplay.innerHTML = powerSaveMode
  if (powerSaveMode === "On" && temp > maxTemp) { 
    temp = maxTemp
    displayTemp.innerHTML = temp;
  }
}

plusButton.onclick = increaseTemp;
minusButton.onclick = decreaseTemp;
resetButton.onclick = resetTemp;
powerSaveButton.onclick = switchPowerSaveMode;

