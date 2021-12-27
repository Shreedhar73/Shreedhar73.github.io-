



   var viewport = document.getElementById('viewport');
    



   //generates random Values including min and max values
   
    function getRandomValues(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

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
    
    function Box(x, y, viewport) {
        this.x = x;
        this.y = y;

        //boundary for balls.
        this.boundaryWidth = 35;
        this.boundaryHeight =30 ;

        this.speed = 5;

        //direction 
        this.xAxis = true;
        
        this.yAxis = true;


        
            
         
        this.init = function () {

            this.balls = document.createElement('div');
            
            this.balls.style.background = colors[getRandomValues(0,7)];
            this.radius = getRandomValues(5,10);
            
            this.balls.style.height = this.radius*4+"px";
            this.balls.style.width = this.radius*4+"px";
            this.balls.style.borderRadius = '50%';
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
        ballNumbers = getRandomValues(25,50);
        

        this.init = function () {
            var boundaryHeight = 600;
            var boundaryWidth = 800;
            

            for (var i = 0; i < ballNumbers; i++) {
                
                var x = getRandomValues(0, boundaryWidth-5);
                var y = getRandomValues(0, boundaryHeight - 5);

                //instance of Box
                
                var box = new Box(x, y,viewport);
                box.init();
                box.draw();
                boxes.push(box);
            }
            window.requestAnimationFrame(this.animate.bind(this));
        };

        this.animate = function () {
            
                var boundaryHeight =600;
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
