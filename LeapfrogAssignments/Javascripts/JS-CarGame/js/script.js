//Initializing Game
var game = document.querySelector(".game");
var scoreDiv = document.querySelector(".score");
scoreDiv.style.float = "right";
var score = 0;
var speedY = 10;
var carSpeedY = 10;
var listOfCars = [];
// to bring player at middle
var distanceFromLeft = ["470px", "780px", "1050px"];

//start the game
startCarGame = function () {
    game.removeChild(gameHeading);
    var gameWorld = new Game();
    gameWorld.init();
};

// landing screen
startGame = function () {
    gameHeading = document.createElement("div");
    gameHeading.className += "game-name";
    

    var heading = document.createElement("div");
    heading.innerHTML = "Car Game";

    var playButton = document.createElement("div");
    playButton.className += "play-game";
    playButton.innerHTML = "Start";

    gameHeading.appendChild(heading);
    gameHeading.appendChild(playButton);
    game.appendChild(gameHeading);

    // on click of play button to start
    playButton.addEventListener("click", startCarGame);
};



// Game Structure 
function Game() {
    self = this;

    this.init = function () {
        // Checking Key press for movement
        document.onkeydown = whichKey;

        function whichKey(e) {
            if (e.keyCode == "37") {
                moveLeft();
            } else if (e.keyCode == "39") {
                moveRight();
            }
        }
        scoreDiv.innerHTML = "Score: " + parseInt(score) + "<br>" + "Speed: "+speedY ;
        
        self.gameLoop();
    };

    // To move car left
    moveLeft = function () {
         if (self.playerCar.lane !== 0) {
            self.playerCar.lane--;
            self.playerCar.car.style.left =
                distanceFromLeft[self.playerCar.lane];
        }
    };

    // to move car right
    moveRight = function () {
       

        if (self.playerCar.lane !== 2) {
            self.playerCar.lane++;
            self.playerCar.car.style.left =
                distanceFromLeft[self.playerCar.lane];
        }
    };

    // to draw obstacle car
    this.createobstacle = function () {
        newCar = new Cars();
        newCar.init("obstacle");
        listOfCars.push(newCar);
    };

   //continuously spawn obstacles
    this.gameLoop = function () {
        this.bgPosition = 0;
        var counter = 0;
        self.loop = setInterval(() => {
            counter++;
            this.bgPosition += speedY;
            game.style.backgroundPosition = "0px " + this.bgPosition + "px";
            // create random obstacle
            if (counter % 15 == 0) self.createobstacle();
            self.checkCollision();
            self.removeobstacle();
            for (var i = 1; i < listOfCars.length; i++) {
                listOfCars[i].moveobstacle();
            }
        }, 50);
    };

    // Remove the car at end of the road
    this.removeobstacle = function () {
        for (var i = 0; i < listOfCars.length; i++) {
            if (listOfCars[i].distanceFromTop >= 670) {
                game.removeChild(listOfCars[i].car);
                listOfCars.splice(i, 1);
                self.updateScore();
            }
        }
    };

    // Update the score and slowly increase the speed
    this.updateScore = function () {
        score += 1;
        highScore = 0;
        if(score > highScore){
            highScore = score;
        }
        scoreDiv.innerHTML = "Score: " + parseInt(score) + "<br>" + "Speed: "+parseInt(carSpeedY) ;

        speedY += 0.1;
        carSpeedY += 0.2;
       

        localStorage.setItem('scorex', score);
        
        if(localStorage.getItem('high-score')){
            if(score > localStorage.getItem('high-score')){
                localStorage.getItem('high-score',score);
            }
        }else{
            localStorage.setItem('high-score', score)
        }
        

    };

    // Collision detection with car && obstacle car
    this.checkCollision = function () {
        for (var i = 0; i < listOfCars.length; i++) {
            if (
                listOfCars[i].distanceFromTop >= 590 &&
                listOfCars[i].distanceFromTop < 720 &&
                listOfCars[i].lane == self.playerCar.lane
            ) {
                gameOver();
            }
        }
    };

    //screen after crashing the game

    endGame = function () {
        gameHeading = document.createElement("div");
        gameHeading.className += "game-name";
    
        var heading = document.createElement("div");
        heading.innerHTML = "Crashed!!! <br> Want to Try Again?";

    
        var playButton = document.createElement("div");
        playButton.className += "play-game";
        playButton.innerHTML = "PLAY Again";

    
        gameHeading.appendChild(heading);
        gameHeading.appendChild(playButton);
        
        game.appendChild(gameHeading);
        
    
        // on click of restart to start
        playButton.addEventListener("click", startCarGame);
    };

    gameOver = function () {
        clearInterval(self.loop);
        score = 0;
        speedY = 10;
        carSpeedY = 10;

        while (listOfCars.length > 0) {
            game.removeChild(listOfCars[0].car);
            listOfCars.shift();
        }

        
        endGame();
    };

    this.playerCar = new Cars();
    this.playerCar.init("player");
    listOfCars.push(self.playerCar);
}

startGame();
