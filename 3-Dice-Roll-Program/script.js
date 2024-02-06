let rollBtn = document.getElementById("rollBtn");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");

let randomNum1;
let randomNum2;
let randomNum3;

rollBtn.onclick = function(){
    randomNum1 = Math.floor(Math.random() * 6 + 1);
    ans1.textContent = randomNum1;

    randomNum2 = Math.floor(Math.random() * 6 + 1);
    ans2.textContent = randomNum2;

    randomNum3 = Math.floor(Math.random() * 6 + 1);
    ans3.textContent = randomNum3;
}