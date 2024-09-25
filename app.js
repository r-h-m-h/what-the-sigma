let music = new Audio('./erm-what-the-sigmaa.mp3');
const rizzBtn = document.querySelector('button');
const transition = document.getElementById('transition');
music.loop = true
rizzBtn.addEventListener('click', function() {
    transition.classList.add('transition');
    rizzBtn.remove();
    music.play();
});
