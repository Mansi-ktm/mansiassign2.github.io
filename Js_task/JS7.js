let train = document.getElementById('train');
let position = 0;
let animation;

function startAnimation() {
    stopAnimation(); 
    animation = setInterval(moveTrain, 20);
}

function moveTrain() {
    position += 2;
    train.style.left = position + 'px';
    if (position > window.innerWidth) {
        position = -train.width; 
    }
}

function stopAnimation() {
    clearInterval(animation);
}
