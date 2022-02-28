

const gameContainer = document.getElementById("game");
const cards = document.querySelectorAll('#game div');
cardsFlipped = 0;
let flipped = false;
  let card1= null;
  let card2 = null;
let gif = document.createElement('img');
gif.src = 'https://c.tenor.com/QwyDTN_0AfAAAAAC/the-goon-win.gif';
let button = document.createElement('button');
let form = document.createElement('form');
button.innerText = 'Play Again?';


const COLORS = [
  "red",
  "blue",
  "green",
  "orange",
  "purple",
  "red",
  "blue",
  "green",
  "orange",
  "purple"
];


function shuffle(array) {
  let counter = array.length;

 
  while (counter > 0) {
    let index = Math.floor(Math.random() * counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

let shuffledColors = shuffle(COLORS);

function createDivsForColors(colorArray) {
  for (let color of colorArray) {
    const newDiv = document.createElement("div");
    newDiv.classList.add(color);
    newDiv.addEventListener("click", handleCardClick);
    gameContainer.append(newDiv);
  }
}




function handleCardClick(e){
  //this.classList.toggle('flip');
  
   this.classList.add('flip');
    if (!flipped){
      flipped = true;
      card1 = this;
    } else {
      flipped = false;
      card2 = this;

      if(card1.classList[0] === card2.classList[0]){
        card1.removeEventListener('click', handleCardClick);
        card2.removeEventListener('click', handleCardClick);
        cardsFlipped +=2;
      }else {
        setTimeout(() => {
        card1.classList.remove('flip');
        card2.classList.remove('flip');
        }, 1000);
      }
      

    }
 
  if (cardsFlipped === COLORS.length){ 
    gameContainer.append(gif);
    gameContainer.append(form);
    form.append(button);

  }
}


createDivsForColors(shuffledColors);



