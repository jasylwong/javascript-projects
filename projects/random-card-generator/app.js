const button = document.querySelector('#button')
const numberOfCardsDisplay = document.querySelector('#numberOfCardsDisplay')
let numberOfCards = 1;
const fewerCards = document.querySelector('#fewerCards')
const moreCards = document.querySelector('#moreCards')
const card1 = document.querySelector('#card1')
const hand = document.querySelectorAll('#hand img')

const cards = ["AC", "2C", "3C", "4C", "5C", "6C", "7C", "8C", "9C", "10C", "JC", "QC", "KC",
  "AD", "2D", "3D", "4D", "5D", "6D", "7D", "8D", "9D", "10D", "JD", "QD", "KD",
  "AS", "2S", "3S", "4S", "5S", "6S", "7S", "8S", "9S", "10S", "JS", "QS", "KS",
  "AH", "2H", "3H", "4H", "5H", "6H", "7H", "8H", "9H", "10H", "JH", "QH", "KH"]

button.onclick = function() {
  hand.forEach(card => {
    const currentCard = cards[Math.floor(Math.random() * cards.length)]
    card.src = `./cards/${currentCard}.png`
  })
}

moreCards.onclick = function () {
  if(numberOfCards < 5) {
    numberOfCards++;
    numberOfCardsDisplay.innerHTML = numberOfCards;
    document.querySelector(`#card${numberOfCards}`).removeAttribute('hidden');
  }
}

fewerCards.onclick = function () {
  if(numberOfCards > 1) {
    document.querySelector(`#card${numberOfCards}`).setAttribute('hidden', true);
    numberOfCards--;
    numberOfCardsDisplay.innerHTML = numberOfCards;
  }
}
