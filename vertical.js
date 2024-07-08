document.addEventListener("keydown", function(event) {
	switch (event.key) {
		case "ArrowLeft": rotate(-90); break;
		case "ArrowRight": rotate(90); break;
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

function rotate(degrees) {
  let old = orientation;
  orientation = (orientation + degrees + 360) % 360;
  main.style.animationName = `rotate-${old}-${orientation}`;
}