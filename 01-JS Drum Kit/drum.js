window.addEventListener("keydown", playSound);

function playSound(e) {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  console.log("audio", audio);
  if (!audio) return; //stop function from running all together
  audio.currentTime = 0; //rewind to the start
  audio.play();
  key.classList.add("playing");
}
function removeTransition(e) {
  if (e.propertyName !== "box-shadow") return;
  this.classList.remove("playing");
}
const keys = document.querySelectorAll(".key");
keys.forEach((element) =>
  element.addEventListener("transitionend", removeTransition)
);
