const pongGame = new Game();
const back = new Background();
//const paddle = new Paddle();

function preload() {
    pongGame.preload();
}

function setup() {
    createCanvas(pongGame.windowX, pongGame.windowY);
}

function draw() {
    back.draw();
    pongGame.draw();
    //paddle.draw();
}

