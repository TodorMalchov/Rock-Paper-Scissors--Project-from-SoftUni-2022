function rockPaperScissors(playerChoice){
    const rock = 'Rock'
    const paper = 'Paper'
    const scissors = 'Scissors'


        if(playerChoice == 'r' || playerChoice == 'Rock'){
            playerChoice = rock
        }else if (playerChoice == 'p' || playerChoice == 'Paper'){
            playerChoice = paper
        }else if (playerChoice == 's' || playerChoice == 'Scissors'){
            playerChoice = scissors
        }else {
            console.log('Invalid Input. Try Again...')
            return
        }
    console.log(`You choose ${playerChoice}`)

    //Computer Choice

    let randomNumber = Math.floor(Math.random() * 3) + 1
    let computerChoice = ''

    switch (randomNumber){
        case 1 : computerChoice = 'Rock' 
        break
        case 2 : computerChoice = 'Paper'
        break
        case 3 : computerChoice = 'Scissors'
        break
    }   
        console.log(`The computer chose ${computerChoice}.`)

        //Win or Lose
    
    if((playerChoice == rock && computerChoice == 'Scissors') 
    || (playerChoice == paper && computerChoice == 'Rock') 
    || (playerChoice == scissors && computerChoice == 'Paper')){
        console.log('You Win!')
    }else if((playerChoice == rock && computerChoice == 'Paper')
    || (playerChoice == paper && computerChoice == 'Scissors') 
    || (playerChoice == scissors && computerChoice == 'Rock')){
        console.log('You Lose!')
    }else{
        console.log('This game was a draw!')
    }
}
rockPaperScissors('r')