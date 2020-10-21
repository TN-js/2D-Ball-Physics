let canvas = document.getElementById('canvas');
let ctx = canvas.getContext("2d");

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

let height = canvas.height;
let width = canvas.width;

let time = 0;

let cellSize = (width / 30) + (height / 30);

let yacceleration = cellSize / 200;

let yvelocity = -90 * Math.random() - 10;

let xvelocity = 200 * Math.random() + 50;

let y = height - 3 * cellSize;

let x = (width / 8) - (cellSize / 2);

var mouseX;
var mouseY;

onmousemove = function(e) {
    //console.log("mouse location:", e.clientX, e.clientY)
    mouseX = e.clientX;
    mouseY = e.clientY;
}

function WhichButton(event) {

    if ((mouseX > width / 2) && event.button == 0) {
        xvelocity += (mouseX - x) * 0.25;
        yvelocity += (mouseY - y) * 0.15;

        if (y - cellSize >= mouseY) {
            y = height - 2 * cellSize;
        } else {
            y = mouseY;
        }

    } else if ((mouseX < width / 2) && event.button == 0) {
        xvelocity += (mouseX - x) * 0.25;
        yvelocity += (mouseY - y) * 0.15;

        if (y - cellSize >= mouseY) {
            y = height - 2 * cellSize;
        } else {
            y = mouseY;
        }

    }
}

function test() {

    cellSize = (width / 30) + (height / 30);
    yacceleration = cellSize / 200;

    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;

    height = canvas.height;
    width = canvas.width;

    yvelocity = yvelocity + (yacceleration * time);

    if (y >= height - cellSize) {
        y = (height - cellSize)

        if (Math.abs(xvelocity) < 0.01) {
            xvelocity = 0;
        }

        yvelocity -= (cellSize * 0.100);

        xvelocity = xvelocity * 0.98;

        yvelocity = -0.250 * yvelocity;
        //yacceleration = .982;

        y = y + yvelocity;

        time = 0;
    } else {
        y = y + yvelocity;

    }

    if (x >= (width - cellSize)) {
        x = (width - cellSize)

        xvelocity = -0.80 * xvelocity;

        x = x + xvelocity;

    } else if (x < width && x > 0 + cellSize) {
        x = x + xvelocity;

    } else if (x <= cellSize) {
        x = 0 + cellSize;
    
        xvelocity = -(0.80 * 0.80) * xvelocity;

        x = x + xvelocity;
    }

    //ctx.fillRect(x, y, cellSize, cellSize);

    ctx.beginPath();
    ctx.fillStyle = "#0A0A2A";
    ctx.arc(x, y, cellSize, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke(); 

    time += 1;

    console.log(cellSize);

    setTimeout(test, 16);
}

test();

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y"];

let i = 0;

function base60() {

    if (i <= 60) {
        console.log(i + " " + numbers[i]);
        i++;
    } else {
        i = 0;
    }

    setTimeout(base60, 100);
}

//base60();