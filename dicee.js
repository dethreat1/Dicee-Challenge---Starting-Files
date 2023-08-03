var randomNumber1 = Math.floor(Math.random() * 6 + 1);
var randomNumber2 = Math.floor(Math.random() * 6 + 1);
const dice1 = document.querySelector(".img1");
const dice2 = document.querySelector(".img2");
const heading = document.querySelector("h1");
dice1.setAttribute("src", "images/dice" + randomNumber1 + ".png");
dice2.setAttribute("src", "images/dice" + randomNumber2 + ".png");
if (randomNumber1 == randomNumber2) {
    heading.innerHTML = "It is a tie!"
} else {
    if (randomNumber1 > randomNumber2) {
        heading.innerHTML = "😁Player 1 wins!!"
    } else {
        heading.innerHTML = "Player 2 wins!!😁"
    }
}