let player = { choice: ""}
const whoWinsDict = { 'rockPaper':'computerWins',
                      'rockScissors':'playerWins',
                      'paperRock':'playerWins',
                      'paperScissors':'computerWins',
                      'scissorsPaper':'playerWins',
                      'scissorsRock':'computerWins'
};
let messages ={ playerWins:"You win!",
                computerWins:"You lose!",
                tie:"You Tie!",
                playAgain:" Press any key to play again:"
};
let computer = {choice:"",
    selection: function(){
    let rockPaperScissorsDict = {0: "Rock",
                                 1: "Paper",
                                 2: "Scissors"
    }
    let generateSelection = Math.floor((Math.random() * 3));
    return rockPaperScissorsDict[generateSelection];
}};
let buttonNodeList = document.querySelectorAll("button");
for (let i = 0; i < buttonNodeList.length; i++){
    buttonNodeList[i].addEventListener('click',event=>{
        player.choice = event.target.id;
        computer.choice = computer.selection();
        displayWinner();
    })}
function displayWinner(){
    const img = document.getElementById("computerThrows");
    switch(computer.choice){
        case "Rock":
            img.setAttribute('src',"rock.png");
            break;
        case "Paper":
            img.setAttribute('src',"paper.png");
            break;
        case "Scissors":
            img.setAttribute('src',"scissors.png");
            break;
    }
    let winner = whoWinsDict[player.choice+computer.choice];
    let winnerMessage = (computer.choice.toLowerCase() === player.choice) ? messages.tie : messages[winner];

    let canvas = document.getElementById("canvas");
    let ctx  = canvas.getContext("2d");
    ctx.font = "30px Arial";
    window.requestAnimationFrame(moveText);
    let xCoordinate = 0;

    function moveText(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        xCoordinate+= 1;
        ctx.fillText(winnerMessage, xCoordinate, canvas.height/2)
        window.requestAnimationFrame(moveText);
    }
}