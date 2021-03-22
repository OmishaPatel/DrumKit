
function playSound(e) {
    
const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
if(!audio) return; // Stop the function from running all together
audio.currentTime = 0;//rewind to the start
audio.play();
key.classList.add('playing');
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') return;// Skip if its not transform
    this.classList.remove('playing');//this is equal to whatever got called against it
}
const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend',removeTransition));
document.addEventListener('keydown', playSound);

// Adding click and touchscreen to the drum set

const click = document.querySelectorAll('.key');
click.forEach(key => key.addEventListener('click', playSound1));   

function playSound1(e) {
    const key1 = this.dataset.key;
    const audio = document.querySelector(`audio[data-key="${key1}"]`);
    const key = document.querySelector(`.key[data-key="${key1}"]`);
    if (!key1) return;
    audio.currentTime = 0;
    audio.play();
    key.classList.add('playing');
}





