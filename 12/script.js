const box = document.querySelector(".box");

window.addEventListener("keydown", move);

function move(e) {
  if(e.keyCode == 68 ){
  	box.style.transform = "translate(40vw)"
  }
  else if(e.keyCode == 65){
  	box.style.transform = "translate(0vw)"
  }
}
