const pi = 3.14; // 'const' lets us declare a variable that can't be changed (such as the value of pi)
let radius;
let circumference;

document.getElementById("submit").onclick = function(){
    radius = document.getElementById("inputRadius").value;
    circumference = 2 * pi * radius;
    document.getElementById("printCircumference").textContent = `Circumference: ${circumference} cm`
}