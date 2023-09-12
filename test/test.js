var canvas = document.getElementById("gameCanvas");
var context = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const img = new Image();
img.src = "../imgs/objects/backgrounds/ground_01.svg";
img.width = 200
img.height = 200
img.addEventListener("load", (e) => {
	context.drawImage(img, 0, 0, 200, 200);
	context.drawImage(img, 187, 0, 200, 200);
});
