


//board 
let board;
let boardWidth = 360;
let boardHeight = 640;
let context;

//bird
let birdHeight = 24;
let birdWidth = 35;
let birdX = boardWidth/8;
let birdY = boardHeight/2;

let bird = {
    x:birdX,
    y:birdY,
    width:birdWidth,
    height:birdHeight
}


let pipeArray= [];
let pipeWidth = 70;
let pipeHeight = 430;
let pipeX = boardWidth;
let pipeY = 0;

let velocityX = -1;
let velocityY = 0;
let gravity = 0.10;


let gameOver = false;
let score = 0;

if(localStorage.getItem('scoresHistory') == null){
    let scoresHistory = [];
    localStorage.setItem('scoresHistory', JSON.stringify(scoresHistory));
}

window.onload = function (){
   
    board = document.getElementById("board");
    board.width = boardWidth;
    board.height = boardHeight;
    context = board.getContext("2d");
    

    birdImg = new Image();
    birdImg.src = "./flappybirdbird.png";
    birdImg.onload = ()=>{
        context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);
    }
    topPipeImg = new Image();
    topPipeImg.src = "./pipe.png";

    bottomPipeImg = new Image();
    bottomPipeImg.src = "./pipebottom.png";

    if(!gameOver){
        requestAnimationFrame(update);
    }
    setInterval(placePipes,1500);
    document.addEventListener("keydown",moveBird);
} 


function update(){
    const bestScores = document.getElementById('bestScores');
    const worstScores = document.getElementById('worstScores');
    if(localStorage.getItem('scoresHistory') != null){
        let scoresHistory = JSON.parse(localStorage.getItem('scoresHistory')); 
        let bestsortedScores = scoresHistory.sort((a, b) => b - a);
        bestScores.textContent = `1)${bestsortedScores[0]}  2)${bestsortedScores[1]}  3)${bestsortedScores[2]} `;
        worstScores.textContent = `1)${bestsortedScores[bestsortedScores.length - 1]}  2)${bestsortedScores[bestsortedScores.length - 2]}  3)${bestsortedScores[bestsortedScores.length - 3]} `;
    }

    requestAnimationFrame(update);
    context.clearRect(0,0, board.width, board.height);
    if(gameOver){
        return;
    }
    //bird
    velocityY += gravity;
    bird.y = Math.max(bird.y + velocityY ,0);
    context.drawImage(birdImg, bird.x, bird.y, bird.width, bird.height);

    if(bird.y > board.height){
        gameOver = true;
    }

    //pipes
     for(let i = 0; i< pipeArray.length;i++){
        let pipe = pipeArray[i];
        pipe.x += velocityX;
        context.drawImage(pipe.img,pipe.x,pipe.y,pipe.width, pipe.height);

        if(!pipe.passed && bird.x > pipe.x + pipe.width){
            score+=0.5;
            pipe.passed =true;
        }

        if(detectCollision(bird,pipe)){
            let scoresHistory = JSON.parse(localStorage.getItem('scoresHistory'));
            scoresHistory.push(score);
            localStorage.setItem('scoresHistory', JSON.stringify(scoresHistory));
            gameOver = true;
        }
     }

     context.fillStyle = "white";
     context.font = "45px sans-serif";
     context.fillText(score, 5, 50);

}


function placePipes(){

    let randomPipeY = pipeY - pipeHeight/4 - Math.random()*(pipeHeight/2);
    let openingSpace = pipeHeight/2.75;
    let topPipe= {
        img: bottomPipeImg,
        x: pipeX,
        y: randomPipeY,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }

    pipeArray.push(topPipe);
    let bottomPipe= {
        img: topPipeImg,
        x: pipeX,
        y: randomPipeY + openingSpace + pipeHeight,
        width: pipeWidth,
        height: pipeHeight,
        passed: false
    }
    
    pipeArray.push(bottomPipe);

    if(gameOver){
        return;
    }
}


function moveBird(){
    velocityY = -3.5;
}


function detectCollision(a,b){
    return  a.x < b.x + b.width && 
            a.x + a.width > b.x && 
            a.y < b.y + b.height &&
            a.y + a.height > b.y; 
}

