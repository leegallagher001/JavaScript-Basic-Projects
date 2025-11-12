const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel")
let count = 0; // 'let' allows 'count' to be changed

increaseBtn.onclick = function(){
    count++; // increment operator to add 1 to 'count'
    countLabel.textContent = count;
}

decreaseBtn.onclick = function(){
    count--; // decrement operator to subtract 1 from 'count'
    countLabel.textContent = count;
}

resetBtn.onclick = function(){
    count = 0; // resets 'count' to a value of 0
    countLabel.textContent = count;
}