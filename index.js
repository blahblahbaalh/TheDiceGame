//This function is to randomly generate dice number for the 2 players
const diceNumGenerator = () => {
  const diceNum1 = Math.floor(Math.random() * 6 + 1);
  const diceNum2 = Math.floor(Math.random() * 6 + 1);
  return [diceNum1, diceNum2];
};

//This function checks which player will be the winner based on input of diceNum1 and diceNum2 value
const detResult = (diceNum1, diceNum2) => {
  switch (true) {
    case diceNum1 > diceNum2:
      return "Winner Player 1";
    case diceNum1 < diceNum2:
      return "Winner Player 2";
    default:
      return "TIE";
  }
};

//This function is to modify the result-panel
const domResult = (result) => {
  document.querySelector(".result-panel").innerHTML =
    "<h3> -- " + result + " -- </h3>";
};

//This function is to modify the dice image src
const domDice = (diceNum1, diceNum2) => {
  document
    .querySelector(".diceNum1")
    .setAttribute("src", `./resources/dice-${diceNum1}.png`);
  document
    .querySelector(".diceNum2")
    .setAttribute("src", `./resources/dice-${diceNum2}.png`);
};

//On click of the dice images, 2 random dice numbers will be generated.
//The result will:
//1. Call domResult: modify result-panel
//2. Call domDice: modify image of the dice
document.getElementsByClassName("dice")[0].onclick = () => {
  const [diceNum1, diceNum2] = diceNumGenerator();
  const result = detResult(diceNum1, diceNum2);
  domResult(result);
  domDice(diceNum1, diceNum2);
};
