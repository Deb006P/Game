score = 0;
cross = true;
audio = new Audio('music_2.mp3');
audiogo = new Audio('gameover.mp3');
audio.play()
setTimeout(() => {
    audio.play()
}, 1000);
document.onkeydown = function (e) {
    console.log("Key code is: ", e.keyCode)
    if (e.keyCode == 38) {
        bheem = document.querySelector('.bheem');
        bheem.classList.add('animateBheem');
        setTimeout(() => {
            bheem.classList.remove('animateBheem')
        }, 700);
    }
    if (e.keyCode == 39) {
        bheem = document.querySelector('.bheem');
        bheemX = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = bheemX + 112 + "px";
    }
    if (e.keyCode == 37) {
        bheem = document.querySelector('.bheem');
        bheemX = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
        bheem.style.left = (bheemX - 112) + "px";
    }
}
setInterval(() => {
    bheem = document.querySelector('.bheem');
    game_over = document.querySelector('.game_over');
    daku = document.querySelector('.daku');

    dx = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('left'));
    dy = parseInt(window.getComputedStyle(bheem, null).getPropertyValue('top'));

    ox = parseInt(window.getComputedStyle(daku, null).getPropertyValue('left'));
    oy = parseInt(window.getComputedStyle(daku, null).getPropertyValue('top'));

    offsetX = Math.abs(dx - ox);
    offsetY = Math.abs(dy - oy);
    if (offsetX < 50 && offsetY < 52) {
        game_over.innerHTML = "Game Over - Reload to Play Again"
        daku.classList.remove('animateDaku')
        audiogo.play();
        setTimeout(() => {
            audiogo.pause();
            audio.pause();
        }, 1000);
    }
    else if (offsetX < 145 && cross) {
        score += 1;
        updateScore(score);
        cross = false;
        setTimeout(() => {
            cross = true;
        }, 1000);
        setTimeout(() => {
            aniDur = parseFloat(window.getComputedStyle(daku, null).getPropertyValue('animation-duration'));
            newDur = aniDur - 0.2;
            daku.style.animationDuration = newDur + 's';
            console.log('New animation duration: ', newDur)
        }, 500);
    }
}, 10);
function updateScore(score) {
    scoreCount.innerHTML = "Your Score: " + score
}

