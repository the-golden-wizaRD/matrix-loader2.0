var loader,threads,leftPos = -20, increment = 40;

const characters = ["0", "1", "d", "r", "t"];

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomText = function () {
  return characters[getRandomInt(0, characters.length - 1)];
};

const Thread = function () {
  threads = document.createElement("div");
  threads.className = "thread";

  var msg = "";

  for (i = 0; i < getRandomInt(200, 400); i++) {
    msg += randomText();
  }

  threads.innerHTML = msg;
  return threads;
};

const matrix = function() {
    while(leftPos < screen.width - 20) {
        thread =  new Thread();
        loader.appendChild(thread);
        leftPos += increment;
        thread.style.left = leftPos + "px";
    }
}

window.addEventListener("load", () => {
    loader = document.getElementById("loader");
    matrix();
    setTimeout(() => {
        loader.classList.add("fade");
    }, 4000)
    setTimeout(() => {
        loader.remove();
    }, 5500)
});