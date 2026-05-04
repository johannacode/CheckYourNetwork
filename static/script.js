const scoreElement = document.getElementById("score");
const circle = document.getElementById("progress");

const ARC_LENGTH = 518;

let finalScore = parseInt(scoreElement.dataset.score);
if (isNaN(finalScore)) finalScore = 0;

finalScore = Math.max(0, Math.min(100, finalScore));

let current = 0;

function animate() {
    if (current <= finalScore) {
        scoreElement.textContent = current;

        const offset = ARC_LENGTH - (ARC_LENGTH * current) / 100;
        circle.style.strokeDashoffset = offset;

        current++;
        setTimeout(animate, 18);
    }
}

animate();