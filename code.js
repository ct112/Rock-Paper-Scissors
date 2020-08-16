let player = { choice: ""}
    const whoWinsDict = { 'rockPaper':'playerWins',
                          'rockScissors':'computerWins',
                          'paperRock':'playerWins',
                          'paperScissors':'computerWins',
                          'scissorsPaper':'playerWins',
                          'scissorsRock':'computerWins'
    };
    let messages ={ playerWins:"You win!",
                    computerWins:"You lose!",
                    tie:"You Tie!"
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
            computer.choice = computer.selection()
            if (computer.choice.toLowerCase() === player.choice){
                alert(messages.tie);
            }else {
            let winner = whoWinsDict[player.choice+computer.choice];
                alert(messages[winner]);
    }
        })};