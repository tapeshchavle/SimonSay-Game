let gameSequence = [];
let userSequence = [];

let started = false;
let level = 0;
let color = ["red", "yellow", "green", "purple"];
//step-1 when any key is press then start the game
document.addEventListener("keypress", function () {
  if (!started) {
    levelUp();
    started = true;
  }
});

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function () {
    btn.classList.remove("flash");
  }, 500);
}

let h3 = document.querySelector("h3");
function levelUp() {
  userSequence = [];
  ++level;
  h3.innerText = "Level " + level;
  //choose random color
  let ranidx = Math.floor(Math.random() * 3);
  let rancol = color[ranidx];
  let ranbtn = document.querySelector(`#${rancol}`);

  gameSequence.push(rancol);
  console.log(gameSequence);
  flash(ranbtn);
}

function checkseq(idx) {
  if (userSequence[idx] === gameSequence[idx]) {
    if (userSequence.length == gameSequence.length) {
      setTimeout(levelUp, 500);
    }
  } else {
    let box = document.querySelector(".box");
    box.style.backgroundColor = "pink";
    h3.innerText = `Game is over and your score is ${
      level * 10
    } . Press any key to start `;
    reset();
  }
}

function buttonpress() {
  let btn = this;
  let id = btn.getAttribute("id");
  flash(btn);
  userSequence.push(id);
  checkseq(userSequence.length - 1);
}
let allbtn = document.querySelectorAll(".inner");
for (btn of allbtn) {
  btn.addEventListener("click", buttonpress);
}
function reset() {
  started = false;
  gameSequence = [];
  userSequence = [];
  level = 0;
}
