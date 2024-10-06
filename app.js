let userScore = 0;
let computerScore = 0;

const userScore_span = document.querySelector('#user-score');
const compScore_span = document.querySelector('#comp-score');
const scoreBoard_div = document.querySelector('.score-board');

const result_p = document.querySelector(".result > p");
const rock_div = document.querySelector("#r");
const paper_div = document.querySelector("#p");
const scissors_div = document.querySelector("#s");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices[randomNumber];
};

function convertToWord(letter) {
    switch (letter){
        case 'r':
            return 'Rock';
        case 's':
            return 'Scissors';
        case 'p':
            return 'Paper'
    } ; 
};

function win(userChoice, computerCoice) {
    userScore++;
    userScore_span.innerHTML = userScore;
    result_p.classList.add('green-text');
    setTimeout(function() {
        result_p.classList.remove('green-text')
    }, 350);
    result_p.innerHTML = `Your ${convertToWord(userChoice)} beats computer's ${convertToWord(computerCoice)}.You win`;
    document.getElementById(userChoice).classList.add('green-glow');
    document.querySelector(".score-board").classList.add('green-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('green-glow');
        document.querySelector('.score-board').classList.remove('green-glow');
    }, 350);
}

function lose(userChoice, computerCoice) {
    computerScore++;
    compScore_span.innerHTML = computerScore;
    result_p.classList.add('red-text');
    setTimeout(function() {
        result_p.classList.remove('red-text')
    }, 350);
    result_p.innerHTML = ` Computer's ${convertToWord(computerCoice)} beats Your ${convertToWord(userChoice)} .You lose`;
    document.getElementById(userChoice).classList.add('red-glow');
    document.querySelector(".score-board").classList.add('red-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('red-glow');
        document.querySelector('.score-board').classList.remove('red-glow');
    }, 350);
}

function draw(userChoice, computerCoice) {
    result_p.classList.add('gray-text');
    setTimeout(function() {
        result_p.classList.remove('gray-text')
    }, 350);
    result_p.innerHTML = `It's a draw`;
    document.getElementById(userChoice).classList.add('gray-glow');
    document.querySelector(".score-board").classList.add('gray-glow');
    setTimeout(function() {
        document.getElementById(userChoice).classList.remove('gray-glow');
        document.querySelector('.score-board').classList.remove('gray-glow');
    }, 350);
}

function game(userChoice) {
    const computerCoice = getComputerChoice();
    switch(userChoice + computerCoice) {
        case 'rs':
            win(userChoice, computerCoice);
            break;
        case 'sp':
            win(userChoice, computerCoice);
            break;
        case 'pr':
            win(userChoice, computerCoice);
            break;
        case 'rp':
            lose(userChoice, computerCoice);
            break;
        case 'ps':
            lose(userChoice, computerCoice);
            break;
        case 'sr':
            lose(userChoice, computerCoice);
            break;
        case 'rr':
            draw(userChoice, computerCoice);
            break;
        case 'ss':
            draw(userChoice, computerCoice);
            break;
        case 'pp':
            draw(userChoice, computerCoice);
            break;
    }
};


function main() {
    rock_div.addEventListener('click', function() {
        game('r');
    });
    paper_div.addEventListener('click', function() {
        game('p');
    });
    scissors_div.addEventListener('click', function() {
        game('s');
    });
};


main();