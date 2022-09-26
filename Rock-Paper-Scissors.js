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

    let randomNumber = Math.floor(Math.random() * 3) + 1
    let computerChoise = ''

    switch (randomNumber){
        case 1 : computerChoise = 'Rock' 
        break
        case 2 : computerChoise = 'Papper'
        break
        case 3 : computerChoise = 'Scissors'
        break
    }   
        console.log(`The computer chose ${computerChoise}.`)
    
    if((playerChoice == rock && computerChoise == 'Scissors') || (playerChoice == paper && computerChoise == 'Rock') || 
    (playerChoice == scissors && computerChoise == 'Paper')){
        console.log('You Win!')
    }else if((playerChoice == rock && computerChoise == 'Paper') || (playerChoice == paper && computerChoise == 'Scissors') ||
    (playerChoice == scissors && computerChoise == 'Rock')){
        console.log('You Lose!')
    }else{
        console.log('This game was a draw!')
    }
}
rockPaperScissors('p')