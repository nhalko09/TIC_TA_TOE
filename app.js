/*-------------------------------- Constants --------------------------------*/
const squareEls = document.querySelectorAll(".sqr");
const messageEl = document.getElementById("message");

let board;
let turn;
let winner;
let tie;

const winningCombos = [
    [0, 1, 2], 
    [3, 4, 5], 
    [6, 7, 8], 
    [0, 3, 6], 
    [1, 4, 7], 
    [2, 5, 8], 
    [0, 4, 8], 
    [2, 4, 6]  
  ];

/*---------------------------- Variables (state) ----------------------------*/



/*------------------------ Cached Element References ------------------------*/



/*-------------------------------- Functions --------------------------------*/
function init() {
    board = ["", "", "", "", "", "", "", "", ""];
    turn = "X";
    winner = false;
    tie = false;
    render();
}
init();
function render() {
    updateBoard();
  updateMessage();
}

function updateBoard() {
    board.forEach((value, index) => {
        const square = squareEls[index];
        square.textContent = value;
    });
}

function updateMessage() {
    if (!winner && !tie) {
        messageEl.textContent = `${turn}'s turn`;
    } else if (!winner && tie) {
        messageEl.textContent = "It's a tie";
    } else {
        messageEl.textContent = `Congratulations, ${turn} wins!`;
      }
    }
    

 function handleClick(event) {
    const squareIndex = parseInt(event.target.id, 10);
        if ( board[squareIndex] !== "" || winner) {
            return; 
  }
   placePiece(squareIndex);
   checkForWinner();
   checkForTie();
   render();
   switchPlayerTurn();
    };


 squareEls.forEach((square) => {
    square.addEventListener('click', handleClick); 
  });


function placePiece(index) {
    board[index] = turn;
}


function checkForWinner() {
    for (let i = 0; i < winningCombos.length; i++) {
        const [a, b, c] = winningCombos[i];
        if (board[a] !== '' && board[a] === board[b] && board[a] === board[c]) {
            winner = true;
          }
        }};




function checkForTie() {
    if (winner) return;
    if (board.includes('')) {
        tie = false; 
      } else {
        tie = true; 
      }}
    


function switchPlayerTurn() {
    if (winner) return;
    if (turn === 'X') {
        turn = 'O';
    } else {
        turn = 'X';
    }}
    
    init();
//  /*----------------------------- Event Listeners -----------------------------*/
