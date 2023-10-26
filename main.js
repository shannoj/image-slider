rightButton = document.getElementById('move-right');
leftButton = document.getElementById('left-button');
photoContainer = document.getElementById('photo-container');
dot1 = document.getElementById('dot-1');
dot2 = document.getElementById('dot-2');
dot3 = document.getElementById('dot-3');

let x = 1;
let positionCounter = (x % 4);

rightButton.addEventListener('click', function(){
    console.log(positionCounter);
    console.log(x);
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
    x += 1;
    positionCounter = (x % 4);
    if (positionCounter == 0){
        positionCounter += 1;
        x +=1;
    }
})

leftButton.addEventListener('click', function(){

})
