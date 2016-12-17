
var playSound = function(e){
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  if(!audio) return;
  //set audio play time to 0 so we don't have to wait for any sounds that are currently playing to finish
  audio.currentTime = 0;
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e){
  if(e.propertyName !== 'transform') return;
  this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', playSound);
