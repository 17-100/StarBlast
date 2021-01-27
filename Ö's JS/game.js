class Game {
    constructor() {
        // Variables for background
        this.background = new Background();

        // Variables for the balls
        this.ball = new Ball();

        // Variables for the paddle
        this.paddle = new Paddle();

        // Variables for the collecting stars
        this.coin = new Coin();

        // Variables for the flying comets
        this.comet = new Comet();

        // ??? Whats this ???
        this.windowX = 600;
        this.windowY = 500;
        this.started = false;

        // Score
        this.score = 0;
    }



    preload() {
        this.backgroundImages = [{
            src: loadImage('assets/background/stars2.png'),
            x: 0,
            y: 0
        }, ]
        this.playerImages = [{
            src: loadImage('assets/background/rocket.png')
        }]
        this.attackImages = [{
            src: loadImage('assets/background/attack.png')
        }]
        this.starImages = [{
            src: loadImage('assets/background/goldenStar.png')
        }]
        this.cometImages = [{
            src: loadImage('assets/background/comet.png')
        }]
        this.youWonImages = [{
            src: loadImage('assets/background/YouWon.png')
        }]
    }

    setup() {}

    draw() {
        this.background.draw();
        this.ball.draw();
        this.coin.draw();
        this.comet.draw();
        this.paddle.draw();


        //ball 1
        if (this.ball.xBall < 0 || this.ball.xBall > this.windowX) {
            this.ball.xBall = Math.floor(Math.random() * 100) + 100;
            this.ball.yBall = 50;
        }
        if (this.ball.yBall < this.ball.diameter / 2 || this.ball.yBall > this.windowY) {
            this.ball.xBall = Math.floor(Math.random() * 500) + 100;
            this.ball.yBall = 50;
        }

        // Coins flying
        if (this.coin.xBall < 0 || this.coin.xBall > this.windowX) {
            this.coin.xBall = Math.floor(Math.random() * 100) + 100;
            this.coin.yBall = 50;
        }
        if (this.coin.yBall < this.coin.diameter / 2 || this.coin.yBall > this.windowY) {
            this.coin.xBall = Math.floor(Math.random() * 500) + 100;
            this.coin.yBall = 50;
        }

        // Comets flying
        this.comet.xBall += this.comet.xBallChange;
        this.comet.yBall += this.comet.yBallChange;

        if (this.comet.xBall < this.comet.diameter / 2 || this.comet.xBall > this.windowX - 0.5 * this.comet.diameter) {
            this.comet.xBall = Math.floor(Math.random() * 500) + 100;
            this.comet.yBall = 50;
        }
        if (this.comet.yBall < this.comet.diameter / 2 || this.comet.yBall > this.windowY - 0.5 * this.comet.diameter) {
            this.comet.xBall = 50;
            this.comet.yBall = Math.floor(Math.random() * 300);
        }
        // GAME OVER
        if (
            ((this.comet.xBall >= this.paddle.xPaddle &&
                this.comet.xBall < this.paddle.xPaddle + this.paddle.paddleWidth) &&
            (this.comet.yBall + this.comet.ballRadius >= this.paddle.yPaddle)) 
            || 
            ((this.coin.xBall >= this.paddle.xPaddle &&
                this.coin.xBall < this.paddle.xPaddle + this.paddle.paddleWidth) &&
            (this.coin.yBall + this.coin.ballRadius >= this.paddle.yPaddle)) 
            ||
            ((this.ball.xBall >= this.paddle.xPaddle &&
                this.ball.xBall < this.paddle.xPaddle + this.paddle.paddleWidth) &&
            (this.ball.yBall + this.ball.ballRadius >= this.paddle.yPaddle)) 
            ) {
            this.ball.xBallChange = 0;
            this.ball.yBallChange = 0;
            this.coin.xBallChange = 0;
            this.coin.yBallChange = 0;
            this.comet.xBallChange = 0;
            this.comet.yBallChange = 0;
            fill("#FFFF66")
            noStroke();
            textSize(42)
            text("GAME OVER", 170, 260)
            noLoop();
        }

        // YOU WIN
        if (this.paddle.yPaddle <= -50) {
            fill('#FDD400')
            noStroke();
            textSize(42)
            text("YOU WON!", 180, 260)
            noLoop();
        }

         // YOU COWARD
         if (this.paddle.xPaddle <= -50 || this.paddle.xPaddle >= 650 || this.paddle.yPaddle >= 500) {
            fill("#FFFF66")
            noStroke();
            textSize(25)
            text("YOU COWARD STAY INSIDE THE CANVAS", 60, 250)
            noLoop();
        }


        /* if (this.comet.xBall < 0 || this.comet.xBall > this.windowX) {
            this.comet.xBall = Math.floor(Math.random() * 100) + 100;
            this.comet.yBall = 50;
        }
        if (this.comet.yBall < this.comet.diameter / 2 || this.comet.yBall > this.windowY) {
            this.comet.xBall = Math.floor(Math.random() * 500) + 100;
            this.comet.yBall = 50;
        } */

        // Invoking the funcitonality of the Spaceship - but does it get better?
        this.paddle.keyPressed();

    }





}