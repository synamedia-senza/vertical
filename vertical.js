document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "ArrowUp": left2x(); break;
		case "ArrowDown": right2x(); break;
		case "ArrowLeft": left(); break;
		case "ArrowRight": right(); break;
		default: return;
	}
	event.preventDefault();
});

let width = 1920;
let height = 1080;
let block = 96;
let count = Math.floor(width / block) * Math.floor(height / block);

function addBlocks() {
	let main = document.getElementById("main");
  
	for (let i = 1; i <= count; i++) {
    let div = document.createElement("div");
    div.classList.add("block");
    div.classList.add(`color${i % 6}`);
    div.innerHTML = `<p>${i}</p>`;
    main.appendChild(div);
	}
}
addBlocks();

let orientation = 0;

function left() {
  let old = orientation;
  orientation = (orientation + 270) % 360;
  spin(old, orientation, -1);
}

function left2x() {
  let old = orientation;
  orientation = (orientation + 180) % 360;
  spin(old, orientation, -2);
}

function right() {
  let old = orientation;
  orientation = (orientation + 90) % 360;
  spin(old, orientation, 1);
}

function right2x() {
  let old = orientation;
  orientation = (orientation + 180) % 360;
  spin(old, orientation, 2);
}

function spin(from, to, by) {
  let rotation = from;
  let count = 0;
  let interval = setInterval(() => {
    rotation += by;
    count++;
    document.getElementById("main").style.transform = `rotate(${rotation}deg)`;
    if (count == 45) {
      document.getElementById("main").classList.remove(`orientation${from}`);
      document.getElementById("main").classList.add(`orientation${to}`);
    }
    if (count == 90) {
      clearInterval(interval);
    }
  }, 4);
}