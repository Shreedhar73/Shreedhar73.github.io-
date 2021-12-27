


   var viewport = document.getElementById('viewport');
    



   //custom random integer generator
   
    function getRandomValue(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }


    //colors
    colors = [
        "red",
        "black", 
        "blue",
        "olive",
        "navy",
        "teal",
        "aliceblue",
    ];

    

    

    // BOX Class
    
    function Box(x, y, boundaryWidth, boundaryHeight,viewport) {
        this.x = x;
        this.y = y;
        this.boundaryWidth = boundaryWidth ;
        this.boundaryHeight = boundaryHeight ;

        this.speed = 1;

        
        this.xAxis = true;
        
        this.yAxis = true;


        
            
         
        this.init = function (index) {

            this.balls = document.createElement('div');
            this.balls.id = "ant"+index;
            
            var imageurl = "./img/ant.svg";
            
            this.balls.style.background = `url("${imageurl}")`
            this.balls.style.backgroundSize ="25px";
            this.balls.style.backgroundRepeat = "no-repeat";
            this.balls.style.zIndex = "1001";
            
            
            
            this.balls.style.height = 32+"px";
            this.balls.style.width = 32+"px";
            
            this.balls.style.position = 'absolute';

            
            
            viewport.appendChild(this.balls);
            

        };

        

        
        this.draw = function () {
            this.balls.style.top = this.y + 'px';
            this.balls.style.left = this.x + 'px';
        };

        //moving the balls in the a-axis
        this.move = function () {
            if (this.xAxis === true && this.yAxis === true) {
                this.x += this.speed;
                this.y += this.speed;
            }

            if (this.xAxis === false && this.yAxis === true) {
                this.x -= this.speed;
                this.y += this.speed;
            }

            if (this.xAxis === true && this.yAxis === false) {
                this.x += this.speed;
                this.y -= this.speed;
            }

            if (this.xAxis === false && this.yAxis === false) {
                this.x -= this.speed;
                this.y -= this.speed;
            }
            this.draw();
        };

        
        
    }

    function ballCollision( ) {

        var boxes = [];

        //change value of ball numbers to increase or decrease the numbe rof balls
        ballNumbers = 10;
        

        this.init = function () {
            var boundaryHeight = 600;
            var boundaryWidth = 800;
            

            for (var i = 0; i < ballNumbers; i++) {
                
                var size = getRandomValue(50, 80);
               
                var x = getRandomValue(0, boundaryWidth-5);
                var y = getRandomValue(0, boundaryHeight - 5);


                
                var box = new Box(x, y, size, size,viewport);
               
               
                box.init(i);
               
                box.draw();
                boxes.push(box);
               
            }
            window.requestAnimationFrame(this.animate.bind(this));
        };

        this.animate = function () {
            
                var boundaryHeight = 600;
                var boundaryWidth = 800;

                for (var i = 0; i < ballNumbers; i++) {
                    var box = boxes[i];
                    this.collide(box, boundaryWidth, boundaryHeight);
                }
             
            window.requestAnimationFrame(this.animate.bind(this));
        };

        this.collide = function (box, boundaryWidth, boundaryHeight) {
            this.collidewithBalls(box);
            this.collidewithBorderr(box, boundaryWidth, boundaryHeight);
            box.move();
        };

        this.collidewithBorderr = function (box, boundaryWidth, boundaryHeight) {
            if (box.x + box.boundaryWidth >= boundaryWidth) {
                box.xAxis = false;
            }
            if (box.x <= 0) {
                box.xAxis = true;
            }

            if (box.y + box.boundaryHeight >= boundaryHeight) {
                box.yAxis = false;
            }
            if (box.y <= 0) {
                box.yAxis = true;
            }
        };

        this.collidewithBalls = function (box) {
            var currentIndex = boxes.indexOf(box);

            for (var i = 0; i < boxes.length; i++) {
                if (i != currentIndex) {
                    if (box.x < boxes[i].x+ boxes[i].boundaryWidth &&
                        box.x + box.boundaryWidth > boxes[i].x &&
                        box.y < boxes[i].y + boxes[i].boundaryHeight &&
                        box.y + boxes[i].boundaryHeight > boxes[i].y) {
                        if (box.x > boxes[i].x) {
                            box.xAxis = true;
                            boxes[i].xAxis = false;
                        }
                        else {
                            box.xAxis = false;
                            boxes[i].xAxis = true;
                        }

                        if (box.y > boxes[i].y) {
                            box.yAxis = true;
                            boxes[i].yAxis = false;
                        }
                        else {
                            box.yAxis = false;
                            boxes[i].yAxis = true;
                        }
                    }
                }
            }
        };
    }

    

    
    var ballx = new ballCollision();


    ballx.init();
