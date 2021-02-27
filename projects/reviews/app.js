const reviews = [
  {
    id: 1,
    name: "Arthur Morgan",
    occupation: 'Web developer',
    review: "Vengeance is an idiot's game",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuqZ5fDeA2IMIQufmOzIzvEOawx_pCgdITbg&usqp=CAU"
  },
  {
    id: 2,
    name: 'John Marston',
    occupation: 'Devops engineer',
    review: 'Rip Van Winkle',
    image: "http://pm1.narvii.com/7022/2e2734b90d4d804720d7956d9a51448bd14f5ae5r1-513-513v2_00.jpg"
  },
  {
    id: 3,
    name: 'Sadie Adler',
    occupation: 'UI designer',
    review: "Nobody's Taking Nothing",
    image: "https://static.wikia.nocookie.net/p__/images/f/f2/Sadie-1907.jpg/revision/latest?cb=20200126032102&path-prefix=protagonist"
  },
  {
    id: 4,
    name: 'Micah Bell',
    occupation: 'Unemployed',
    review: 'Blacklung',
    image: "https://static.wikia.nocookie.net/reddeadredemption/images/9/9d/Micah_Bell_1906_scar.jpg/revision/latest/top-crop/width/300/height/300?cb=20181213000001"
  }
]

let index = 0

window.addEventListener("DOMContentLoaded", function() {
  update_values()
})

function left() {
  index = index == 0 ? reviews.length - 1 : index - 1
  update_values()
}
function right() {
  index = index == reviews.length - 1 ? 0 : index + 1
  update_values()
}
function suprise_me() {
  index = Math.floor(Math.random() * reviews.length)
  update_values()
}

function update_values() {
  const item = reviews[index]
  document.getElementById("name").innerHTML = item.name
  document.getElementById("occupation").innerHTML = item.occupation
  document.getElementById("review").innerHTML = item.review
  document.getElementById("image").src = item.image
}

