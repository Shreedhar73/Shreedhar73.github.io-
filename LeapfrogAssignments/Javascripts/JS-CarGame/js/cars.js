
function Cars() {
    this.car = 0;
    this.lane = 0;
    this.distanceFromTop = 10;
    this.playerType = 0;

    // Initializing car with player type i.e real or obstacle
    this.init = function (playerType) {
        this.playerType = playerType;
        if(this.playerType == "player"){
            this.lane = 1;
        }else{
            this.lane = RandomNumber(0,3);
        }
        
        this.drawCar();
    };

    // Draw a new car
    this.drawCar = function () {
        this.car = document.createElement("div");
        var car = this.car;
        car.className += "new-car";

        // Defining obstacle car and giving it properties
        this.obstaclePlayer = document.createElement("div");
        
        var obstacleCar = this.obstaclePlayer;
        obstacleCar.style.height = "90px";
        obstacleCar.style.width = "75px";
        imgurl = "img/obstacle.png";
        obstacleCar.style.background = `url(${imgurl})`;
        obstacleCar.style.backgroundSize = "cover";
        obstacleCar.className += "obstacle-car";
        this.playerx = document.createElement("div");
        

        var playerCar = this.playerx;
        playerCar.style.height = "90px";
        playerCar.style.width = "75px";
        imgurl = "img/you.png";
        playerCar.style.background = `url(${imgurl})`;
        playerCar.style.backgroundSize = "cover";
        playerCar.className += "player-car";
        

        /*
        player will spawn on millde lane(lane 1) while obstacles will spawn on random lanes 
        */
        game.appendChild(this.car);
        if (this.playerType == "obstacle") {
            this.car.appendChild(this.obstaclePlayer);
            if (this.lane == 0) {
                this.car.style.left = distanceFromLeft[this.lane];
            }
            if (this.lane == 1) {
                this.car.style.left = distanceFromLeft[this.lane];
            }
            if (this.lane == 2) {
                this.car.style.left = distanceFromLeft[this.lane];
            }
        }
        // Defining initial position of real player from top and left
        else if (this.playerType == "player") {
            this.car.style.left = "780px";
            this.car.style.top = "665px";
            this.car.appendChild(this.playerx);
        }
    };

    this.moveobstacle = function () {
        this.distanceFromTop += carSpeedY;
        this.car.style.top = this.distanceFromTop + "px";
    };
}