
const p1Button = document.querySelector("#p1Button")
const p2Button = document.querySelector("#p2Button")
const resetButton = document.querySelector("#reset");
const winningScoreSelect = document.querySelector("#playTo");

const p1Display = document.querySelector("#p1Display");
const p2Display = document.querySelector("#p2Display");

const winner = ("U WON!");


let winningScore = 3;
let isGameOver = false;
let p1Score = 0;
let p2Score = 1;

p1Button.addEventListener('click', function () {
    if (!isGameOver) {
        p1Score += 1;
        p1Display.innerText = p1Score;

        if (p1Score === winningScore) {
            p1Display.innerText = `${winner}`
            isGameOver = true;
            p1Display.classList.add('winner');
            p2Display.classList.add('looser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        
    }
})

p2Button.addEventListener('click', function () {
    if (!isGameOver) {
        p2Score += 1;
        p2Display.innerText = p2Score;

        if (p2Score === winningScore) {
            p2Display.innerText = `${winner}`
            isGameOver = true;
            p2Display.classList.add('winner');
            p1Display.classList.add('looser');
            p1Button.disabled = true;
            p2Button.disabled = true;
        }
        
    }
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener("click", reset);

function reset() {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;

    p1Display.innerText = 0;
    p2Display.innerText = 0;

    p1Display.classList.remove('winner', 'looser');
    p2Display.classList.remove('winner', 'looser');

    p2Button.disabled = false;
    p1Button.disabled = false;

}