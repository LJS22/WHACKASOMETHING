//Variable for the start button
const button = document.getElementById("button");

//Variable for the score display
let scoreDisplay = document.getElementById("score");

//Variables for individual moles
const mole1 = document.getElementById("mole1");
const mole2 = document.getElementById("mole2");
const mole3 = document.getElementById("mole3");
const mole4 = document.getElementById("mole4");
const mole5 = document.getElementById("mole5");
const mole6 = document.getElementById("mole6");
const mole7 = document.getElementById("mole7");
const mole8 = document.getElementById("mole8");
const mole9 = document.getElementById("mole9");

let scoreCount = 0;

//Event to initialise scoring function
document.addEventListener("click", () => {
    let totalScore = 0;
    var scoreCount = (score());
    totalScore = totalScore + scoreCount;
    scoreDisplay.textContent = totalScore;
});

function score() {
    let points = 1;
    mole1.addEventListener("click", () => {
        mole1.style.zIndex = ("-1");
        return points;
    });
    mole2.addEventListener("click", () => {
        mole2.style.zIndex = ("-1");
        return points;
    });
    mole3.addEventListener("click", () => {
        mole3.style.zIndex = ("-1");
        return points;
    });
    mole4.addEventListener("click", () => {
        mole4.style.zIndex = ("-1");
        return points;
    });
    mole5.addEventListener("click", () => {
        mole5.style.zIndex = ("-1");
        return points;
    });
    mole6.addEventListener("click", () => {
        mole6.style.zIndex = ("-1");
        return points;
    });
    mole7.addEventListener("click", () => {
        mole7.style.zIndex = ("-1");
        return points;
    });
    mole8.addEventListener("click", () => {
        mole8.style.zIndex = ("-1");
        return points;
    });
    mole9.addEventListener("click", () => {
        mole9.style.zIndex = ("-1");
        return points;
    });
}

//Variable and function for changing the time
let time = 3000;
function changeTime() {
    time = time / 1.25;
    return time;
};
time = (changeTime());

//Function for displaying the mole
function chooseMole() {
    //Variables for the random mole
    changeTime();
    let numberValue = Math.floor(Math.random() * 9) + 1;
    if (numberValue === 1) {
        mole1.style.zIndex = ("1");

    } else if (numberValue === 2) {
        mole2.style.zIndex = ("1");

    } else if (numberValue === 3) {
        mole3.style.zIndex = ("1");

    } else if (numberValue === 4) {
        mole4.style.zIndex = ("1");

    } else if (numberValue === 5) {
        mole5.style.zIndex = ("1");

    } else if (numberValue === 6) {
        mole6.style.zIndex = ("1");

    } else if (numberValue === 7) {
        mole7.style.zIndex = ("1");

    } else if (numberValue === 8) {
        mole8.style.zIndex = ("1");


    } else if (numberValue === 9) {
        mole9.style.zIndex = ("1");

    }
};

