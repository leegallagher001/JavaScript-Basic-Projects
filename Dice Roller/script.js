const myButton = document.getElementById("myButton");
const label1 = document.getElementById("label1");
const label2 = document.getElementById("label2");
const label3 = document.getElementById("label3");
const min = 1; // sets the minimum number that can be randomly generated
const max = 6; // sets the maximum number that can be randomly generated
let randomNum1;
let randomNum2;
let randomNum3;

myButton.onclick = function(){
    /* Below is a function that multiplies the math random function by the maximum of 6,
    allowing a range between 0 and 5 to be generated, and the addition of the 'min' (1) to 
    this creates the range of 1-6 that we want. The Math.random is wrapped in a 'Math.floor'
    function to round down the generated number to a whole number
    */
    randomNum1 = Math.floor(Math.random() * max) + min;
    randomNum2 = Math.floor(Math.random() * max) + min;
    randomNum3 = Math.floor(Math.random() * max) + min;
    rollStatement.textContent = `-- Your Dice Rolls Below --`
    label1.textContent = `Dice 1: ${randomNum1}`;
    label2.textContent = `Dice 2: ${randomNum2}`;
    label3.textContent = `Dice 3: ${randomNum3}`;
}