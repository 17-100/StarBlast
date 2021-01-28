class Ball {
    constructor() {
        this.xBall = Math.floor(Math.random() * 400) + 50;
        this.yBall = 50;
        this.diameter = 30;
        this.ballRadius = this.diameter / 2 ;
        this.xBallChange = 6;
        this.yBallChange = 6;
    }

    draw() {
        // Draw ball
        /* fill('fffff');
        noStroke();
        ellipse(this.xBall, this.yBall, this.diameter, this.diameter); */
        image(pongGame.attackImages[0].src, this.xBall, this.yBall, this.diameter, this.diameter);
        this.yBall += this.yBallChange;
    }
}

class Coin {
    constructor() {
        this.xBall = Math.floor(Math.random() * 400) + 50;
        this.yBall = 50;
        this.diameter = 30;
        this.ballRadius = this.diameter / 2 ;
        this.xBallChange = 3.5;
        this.yBallChange = 3.5;
    }

    draw() {
        // Draw ball
        /* fill('fffff');
        noStroke();
        ellipse(this.xBall, this.yBall, this.diameter, this.diameter); */
        image(pongGame.starImages[0].src, this.xBall, this.yBall, this.diameter, this.diameter);
        this.yBall += this.yBallChange;
    }
}

class Comet{
    constructor() {
        this.xBall = Math.floor(Math.random() * 400) + 50;
        this.yBall = 50;
        this.diameter = 100;
        this.ballRadius = this.diameter / 2 ;
        this.xBallChange = 2;
        this.yBallChange = 2;
    }

    draw() {
        // Draw ball
        /* fill('fffff');
        noStroke();
        ellipse(this.xBall, this.yBall, this.diameter, this.diameter); */
        image(pongGame.cometImages[0].src, this.xBall, this.yBall, this.diameter, this.diameter);
        this.yBall += this.yBallChange;
    }
}









class Paddle {
    constructor() {
        // Variables for paddle
        this.xPaddle = 250;
        this.yPaddle = 350;
        this.paddleHeight = 80;
        this.paddleWidth = 56;
    }

    draw() {
        //fill('fffff')
        //noStroke();
        //rect(this.xPaddle, this.yPaddle, this.paddleWidth, this.paddleHeight)
        image(pongGame.playerImages[0].src, this.xPaddle, this.yPaddle, this.paddleWidth, this.paddleHeight)
    }

    // WARUM FUNKTIONIERT DAS NICHT??????
    keyPressed() {
        if (keyCode === LEFT_ARROW) {
            this.xPaddle -= 1.76;
        } else if (keyCode === RIGHT_ARROW) {
            this.xPaddle += 1.76;
        } else if (keyCode === UP_ARROW) {
            this.yPaddle -= 1.76;
        } else if (keyCode === DOWN_ARROW) {
            this.yPaddle += 1.76;
        }
    } 
}