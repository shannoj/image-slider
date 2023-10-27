rightButton = document.getElementById('move-right');
leftButton = document.getElementById('move-left');
photoContainer = document.getElementById('photo-container');
dot1 = document.getElementById('dot-1');
dot2 = document.getElementById('dot-2');
dot3 = document.getElementById('dot-3');
img1 = document.getElementById('img-1');
img2 = document.getElementById('img-2');
img3 = document.getElementById('img-3');

// Function to update the image slider styling
function updateImageSlider() {
    if (positionCounter == 1) {
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'grey';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        img3.style.display = 'none';
    } else if (positionCounter == 2) {
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'grey';
        img1.style.display = 'none';
        img2.style.display = 'flex';
        img3.style.display = 'none';
    } else if (positionCounter == 3) {
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'white';
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'flex';
    }
}

// Function to move to the next image
function moveToNextImage() {
    x += 1;
    positionCounter = mod(x, 4);

    if (positionCounter == 0) {
        x += 1;
        positionCounter = mod(x, 4);
    }

    // Update the styling
    updateImageSlider();
}

// Function to start the auto slide
function startAutoSlide() {
    autoSlideInterval = setInterval(moveToNextImage, 5000); // 5000 milliseconds (5 seconds)
}

// Function to stop the auto slide
function stopAutoSlide() {
    clearInterval(autoSlideInterval);
}


function mod(n, m) {
    return ((n % m) + m) % m;
  }

let x = 1;
let positionCounter = mod(x, 4);
dot1.style.backgroundColor = 'white';
dot2.style.backgroundColor = 'grey';
dot3.style.backgroundColor = 'grey';
img1.style.display = 'flex';
img2.style.display = 'none';
img3.style.display = 'none';

rightButton.addEventListener('click', function(){
    stopAutoSlide();
    x += 1;
    positionCounter = mod(x, 4);
    if (positionCounter == 0){
        x +=1;
        positionCounter = mod(x, 4);
    }
    console.log(positionCounter);
    if (positionCounter == 1){
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'grey';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        img3.style.display = 'none';
    } else if (positionCounter == 2){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'grey';
        img1.style.display = 'none';
        img2.style.display = 'flex';
        img3.style.display = 'none';
    } else if (positionCounter == 3){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'white';
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'flex';
    }
    startAutoSlide();
})

leftButton.addEventListener('click', function(){
    stopAutoSlide();
    x -= 1;
    positionCounter = mod(x, 4);
    if (positionCounter == 0){
        x -=1;
        positionCounter = mod(x,4);
    }
    console.log(positionCounter);
    if (positionCounter == 1){
        dot1.style.backgroundColor = 'white';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'grey';
        img1.style.display = 'flex';
        img2.style.display = 'none';
        img3.style.display = 'none';
    } else if (positionCounter == 2){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'grey';
        img1.style.display = 'none';
        img2.style.display = 'flex';
        img3.style.display = 'none';
    } else if (positionCounter == 3){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'white';
        img1.style.display = 'none';
        img2.style.display = 'none';
        img3.style.display = 'flex';
    }
    startAutoSlide();
})

startAutoSlide();
