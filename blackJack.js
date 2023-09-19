let cards = []
let sum = 0
let hasBlackJack = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector("#cards-el");
let newCardDis = document.getElementById("newCard");
let title = document.getElementById("title");
let playerEl = document.getElementById("player-el");
 


// ||  PLAYER INFO
const player = {
  name: "",
  chips: 555, // default chips
};
// Need to render player info 
player.name = prompt("ENTER YOUR NAME!" , "Guest")
playerEl.textContent = player.name + ": $" + player.chips;

// random function to get RandomNumbers
function getRandomCard() {
  let randomNumber = Math.floor(Math.random() * 13) + 1;
  if (randomNumber > 10) {
    return 10;
  } else if (randomNumber === 1) {
    return 11;
  } else {
    return randomNumber;
  }
}

// Start Game function
function startGame() {
  // need to be at start hasBlackJack false otherwise it never will be false 
  // after first BlackJack
  hasBlackJack = false; 

  if (player.chips > 9) {
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard];
    sum = firstCard + secondCard;
    // decreasing chips 10 / New game
    player.chips = player.chips - 10;
    renderGame();
  } else {
    alert("Please Refresh, and try again!");
  }
}

// RENDERING Game Functionality / UI
function renderGame() {
  cardsEl.textContent = "Cards: ";

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  sumEl.textContent = "sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
    messageEl.style.color = "black";
    title.style.color = "black";

  } else if (sum === 21) {
    message = "Wohoo! you'have got Blackjack!";
    messageEl.style.color = "green";
    title.style.color = "green";
    // Need to add time delay !!
    player.chips = player.chips + 1000;
    hasBlackJack = true;

  } else {
    message = "You're out of the game!";
    messageEl.style.color = "red";
    title.style.color = "black";
  }

  playerEl.textContent = player.name + ": $" + player.chips;
  messageEl.textContent = message;
}

// NEW CARD FUNCTION

function newCard() {
  if (sum < 21 && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card;
    cards.push(card);
    renderGame();
  } 
}
