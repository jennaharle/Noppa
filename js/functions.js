
const dice = document.getElementById("dice");


dice.addEventListener("click", function() {
    
    const randomNumber = Math.floor(Math.random() * 6) + 1;

    const newImagePath = "./img/" + randomNumber + ".png";

    const diceImage = dice.querySelector("img");

    diceImage.src = newImagePath;
});