

var currentIndex = 0;
var MAXWIDTH = 800;
var sliderImages = document.querySelectorAll('.image');
var imageWrapper = document.querySelector('.carousel-image-wrapper');
var UNIT = 'px';
var INITIALPOINT = "0px";
var isMoving = false;


//creating previous next button


let prevButton = document.createElement("button");
prevButton.innerHTML = "<";
prevButton.id = "previous";
prevButton.style.top = "250px";
document.getElementById("carousel").appendChild(prevButton);

let nextButton = document.createElement("button");
nextButton.innerHTML = ">";
nextButton.id = "next";
nextButton.style.position = "absolute";
nextButton.style.top = "255px";
nextButton.style.left = "94%";
document.getElementById("carousel").appendChild(nextButton);









//shift right
function moveRight() {
    currentIndex++;
    isMoving = true;
    if (currentIndex < sliderImages.length) {
        window.requestAnimationFrame(imageSliderRight);
    } else if (currentIndex == sliderImages.length) {
        currentIndex = 0;
        imageWrapper.style.left = MAXWIDTH + UNIT;
        imageSliderRight();
    } 
}

//shift left
function moveLeft() {
    currentIndex--;
    isMoving = true;
    if (currentIndex < 0) {
        window.requestAnimationFrame(firstToEnd);
    } else if (currentIndex >= 0) {
        window.requestAnimationFrame(imageSliderLeft);
    }
}







function imageSliderRight() {
    var leftPx = parseInt(window.getComputedStyle(imageWrapper).left) - 15;
    imageWrapper.style.left = leftPx + UNIT;
    
    if (parseInt(leftPx) != -(MAXWIDTH * currentIndex)) {
        if (parseInt(leftPx) < -(MAXWIDTH * currentIndex)) {
            isMoving = false;
            imageWrapper.style.left = -(MAXWIDTH * currentIndex) + UNIT;
        } else {
            window.requestAnimationFrame(imageSliderRight);
        }
    }
    indicator("right");
}




function indicator(status) {
    for (var i = 1; i <= sliderImages.length-1; i++) {
        if (window.getComputedStyle(imageWrapper).left == -(MAXWIDTH * (sliderImages.length)) + UNIT || imageWrapper.style.left == INITIALPOINT) {
            document.querySelector('#radio0').checked = true;
        }
        console.log(MAXWIDTH * i)
        if (imageWrapper.style.left == -(MAXWIDTH * i) + UNIT) {
            if (status == "left") {
                document.querySelector(`#radio${i-1}`).checked = true;
            }
            else {
                try {
                    document.querySelector(`#radio${i}`).checked = true;
                } catch (e){

                }
            }
        }
    }

}


function imageSliderLeft() {
    indicator("left");
    var rightPx = parseInt(imageWrapper.style.left) + 15;
    imageWrapper.style.left = rightPx + UNIT;
    if (rightPx != -(MAXWIDTH * currentIndex)) {
        if (parseInt(rightPx) > -(MAXWIDTH * currentIndex)) {
            isMoving = false;
            imageWrapper.style.left = -(MAXWIDTH * currentIndex) + UNIT;
        } else {
            window.requestAnimationFrame(imageSliderLeft);
        }
    }

}

function firstToEnd() {
    currentIndex = sliderImages.length - 1;
    document.querySelector(`#radio${sliderImages.length - 1}`).checked = true;
    if (window.getComputedStyle(imageWrapper).left == INITIALPOINT || imageWrapper.style.left == INITIALPOINT) {
        function end() {
            var rightPx = (parseInt(window.getComputedStyle(imageWrapper).left) - 50);
            imageWrapper.style.left = rightPx + UNIT;
            if (rightPx != -(MAXWIDTH*currentIndex)) {
                window.requestAnimationFrame(end);
            } else {
                isMoving = false;
            }
        }
        window.requestAnimationFrame(end)

    }
}


document.getElementById('next').onclick = function () {
    if (isMoving == false) {
        moveRight();

    }

}

document.getElementById('previous').onclick = function () {
    if (isMoving == false) {
        moveLeft();
    }
}

radioButton = document.querySelectorAll('.radio');
radioButton.forEach(onClickEvent);
function onClickEvent(item, index) {
    item.onclick = function () {
        document.querySelector('.carousel-image-wrapper').style.left = -(MAXWIDTH * index) + "px";
    }
}
