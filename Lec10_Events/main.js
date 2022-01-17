function playAudio(audio) {
    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
};

function activatingKey(key, audio) {
    playAudio(audio)
    key.classList.add("playing")
};

function playKeydownAudio(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`)
    const key = document.querySelector(`div[data-key="${e.keyCode}"]`)
    activatingKey(key, audio)
};

function playClickAudio(e) {
    const key = e.target.closest('.key');
    const audio = document.querySelector(`audio[data-key="${key.dataset.key}"]`);
    activatingKey(key, audio)
};

function removeTransition(e){
    if(e.propertyName != 'transform') return;
    e.target.classList.remove('playing')
};

window.addEventListener('keydown', playKeydownAudio);
window.addEventListener('click', playClickAudio);

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));