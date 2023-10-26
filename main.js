rightButton = document.getElementById('move-right');
leftButton = document.getElementById('move-left');
photoContainer = document.getElementById('photo-container');
dot1 = document.getElementById('dot-1');
dot2 = document.getElementById('dot-2');
dot3 = document.getElementById('dot-3');

function mod(n, m) {
    return ((n % m) + m) % m;
  }

let x = 1;
let positionCounter = mod(x, 4);
dot1.style.backgroundColor = 'white';
dot2.style.backgroundColor = 'grey';
dot3.style.backgroundColor = 'grey';

rightButton.addEventListener('click', function(){
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
    } else if (positionCounter == 2){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'grey';
    } else if (positionCounter == 3){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'white';
    }
})

leftButton.addEventListener('click', function(){
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
    } else if (positionCounter == 2){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'white';
        dot3.style.backgroundColor = 'grey';
    } else if (positionCounter == 3){
        dot1.style.backgroundColor = 'grey';
        dot2.style.backgroundColor = 'grey';
        dot3.style.backgroundColor = 'white';
    }
})
