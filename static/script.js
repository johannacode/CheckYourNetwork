let scoreElement = document.getElementById("score");
let circle = document.getElementById("progress");

let finalScore = parseInt(scoreElement.dataset.score);

if (isNaN(finalScore)) {
    finalScore = 0;
}

let current = 0;

function animate() {
    if (current <= finalScore) {
        scoreElement.innerText = current;

        let offset = 628 - (628 * current) / 100;
        circle.style.strokeDashoffset = offset;

        current++;
        setTimeout(animate, 15);
    }
}

animate();