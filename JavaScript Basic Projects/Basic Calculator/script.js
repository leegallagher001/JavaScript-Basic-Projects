let no1; // declares variable for first number
let no2; // declares variable for second number
let answer; // declares variable for our final answer

document.getElementById("add").onclick = function(){ // calls a function when button is clicked
    no1 = document.getElementById("no1").value; // accesses value entered into "no1" textbox
    no2 = document.getElementById("no2").value; // accesses values entered into "no2" textbox
    answer = parseFloat(no1) + parseFloat(no2); // Had to parse as float for addition as "+" is treated as string concatenation otherwise
    document.getElementById("answer").textContent = `Your Answer is: ${no1} + ${no2} = ${answer}`;
}

document.getElementById("subtract").onclick = function(){
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    answer = no1 - no2;
    document.getElementById("answer").textContent = `Your Answer is: ${no1} - ${no2} = ${answer}`;
}

document.getElementById("multiply").onclick = function(){
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    answer = no1 * no2;
    document.getElementById("answer").textContent = `Your Answer is: ${no1} * ${no2} = ${answer}`;
}

document.getElementById("divide").onclick = function(){
    no1 = document.getElementById("no1").value;
    no2 = document.getElementById("no2").value;
    answer = no1 / no2;
    document.getElementById("answer").textContent = `Your Answer is: ${no1} / ${no2} = ${answer}`;
}