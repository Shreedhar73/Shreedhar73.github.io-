var loadImages = function(){
	var imgNumber = 9, loaderCount = 0;
	var onImgLoad = function(){
		loaderCount++;
		if(loaderCount == imgNumber){
			death = 1;
			dist = 0;
			birdY = (height - 112) / 2;
			birdF = 0;
			birdN = 0;
			bSpeed = 0;
			birdPos = width * 0.35;
			score = 0;
			pipeSt = 0;
			pipeNumber = 10;
			pipes = [];
			pipesDir = [];
			for(var i = 0; i < 10; ++i){
				pipes.push(Math.floor(Math.random() * (height - 300 - gap) + 10));
				pipesDir.push((Math.random() > 0.5));
			}
			drawCanvas();
		}
	}

	sky = new Image();
	sky.src = 'images/sky.png';
	sky.onload = onImgLoad;
	
	land = new Image();
	land.src = 'images/land.png';
	land.onload = onImgLoad;
	
	bird = new Image();
	bird.src = 'images/bird.png';
	bird.onload = onImgLoad;
	
	pipe = new Image();
	pipe.src = 'images/pipe.png';
	pipe.onload = onImgLoad;
	
	pipeUp = new Image();
	pipeUp.src = 'images/pipe-up.png';
	pipeUp.onload = onImgLoad;
	
	pipeDown = new Image();
	pipeDown.src = 'images/pipe-down.png';
	pipeDown.onload = onImgLoad;
	
	scoreBoard = new Image();
	scoreBoard.src = 'images/scoreboard.png';
	scoreBoard.onload = onImgLoad;
	
	ready = new Image();
	ready.src = 'images/replay.png';
	ready.onload = onImgLoad;
	
	splash = new Image();
	splash.src = 'images/splash.png';
	splash.onload = onImgLoad;
}