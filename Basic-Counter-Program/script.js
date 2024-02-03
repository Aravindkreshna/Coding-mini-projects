const decreaseBtn = document.getElementById("decreaseBtn");
const increaseBtn = document.getElementById("increaseBtn");
const resetBtn = document.getElementById("resetBtn");
const countLabel = document.getElementById("countLabel");

let count = 0;

decreaseBtn.onclick = function(){
    count--
    countLabel.innerHTML = count;
}

increaseBtn.onclick = function(){
    count++
    countLabel.innerHTML = count;
}

resetBtn.onclick = function(){
    count=0;
    countLabel.innerHTML = count;
}