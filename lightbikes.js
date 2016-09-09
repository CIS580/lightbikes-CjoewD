var canvas = document.getElementById('screen');
var ctx = canvas.getContext('2d');
var speed = 1 / 16 / 1000;

var x = 0;
var y = 0;

var input = {
    up:false,
    down:false,
    left: false,
    right: false
}

window.onkeydown = function (event) {
    switch (event.keyCode) {
        case 38:
        case 87:
            input.up = true;
            break;
        case 40:
        case 83:
            input.down = true;
            break;
        case 37:
        case 65:
            input.left = true;
            break;
        case 39:
        case 68:
            input.right = true;
            break;
    }
}

window.onkeyup = function (event) {
    event.preventDefault();
    switch (event.keyCode) {
        case 38:
        case 87:
            input.up = false;
            break;
        case 40:
        case 83:
            input.down = false;
            break;
        case 37:
        case 65:
            input.left = false;
            break;
        case 39:
        case 68:
            input.right = false;
            break;
    }
}

function loop(timestamp) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "red";
    ctx.fillRect(x, y, 5, 5);
    if (input.up) y -= 1;
    if (input.down) y += 1;
    if (input.left) x -= 1;
    if (input.right) x += 1;

    for (i = 0; i < 100; i++) {
        ctx.fillStyle = "blue";
        ctx.fillRect(
            (i*20) % 100,
            i * 20 % 100,
            10,
            10
            )
    }
    //setTimeout(loop, speed);
    requestAnimationFrame(loop);
}
//loop();
//var intercalId = setInterval(loop, speed);
requestAnimationFrame(loop);