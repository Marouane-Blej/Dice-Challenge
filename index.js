var randomNumber1 = (Math.random() * 6) + 1;
randomNumber1 = Math.floor(randomNumber1); // first dice 1-6

var randomNumber2 = (Math.random() * 6) + 1;
randomNumber2 = Math.floor(randomNumber2); // second dice 1-6

var randomDiceImg1 = "dice" + randomNumber1 + ".png"; // dice1-6.png dice1
var randomDiceImg2 = "dice" + randomNumber2 + ".png"; // dice 2

var randomImgSrc1 = "images/" + randomDiceImg1; // dice 1
var randomImgSrc2 = "images/" + randomDiceImg2; // dice 2

document.querySelectorAll("img")[0].setAttribute("src", randomImgSrc1);
document.querySelectorAll("img")[1].setAttribute("src", randomImgSrc2);

if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins! 🎲";
} else if (randomNumber1 === randomNumber2){
    document.querySelector("h1").innerHTML = "🎲 Draw 🎲";
} else {
    document.querySelector("h1").innerHTML = "Player 2 wins! 🎲";
}