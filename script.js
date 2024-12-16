const boxes = document.querySelectorAll(".ticTacGrid div")

let currentPlayer = "X";
let nextPlayer = "O";
let gameOver = false;



    const board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

  



    // Checks Rows
    function checkWinner(){
        console.log("check");
    


    for (let i = 0; i < 3; i++)
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                triggerConfetti();
                return board[i][0];
        }


    //Checks Columns

    for (let i = 0; i < 3; i++)
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]){; 
                triggerConfetti();
                return board[0][i];

        }

        
    // Check Diagnols

    if ((board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) || 
        (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0])) {
            triggerConfetti();
            return board[0][0];
    }
        return null;
}



boxes.forEach(box =>{
    box.addEventListener("click", function(click){
        const clickedBox = click.target;

        if (clickedBox.classList.contains("box1") ||
        clickedBox.classList.contains("box2") ||
        clickedBox.classList.contains("box3") ||
        clickedBox.classList.contains("box4") ||
        clickedBox.classList.contains("box5") ||
        clickedBox.classList.contains("box6") ||
        clickedBox.classList.contains("box7") ||
        clickedBox.classList.contains("box8") ||
        clickedBox.classList.contains("box9")) {

    if(!clickedBox.textContent){
        clickedBox.textContent = currentPlayer 
        clickedBox.style.backgroundColor = "whitesmoke"

        let playerMove = currentPlayer;
            currentPlayer = nextPlayer;
            nextPlayer = playerMove;

        const boxIndex = Array.from(boxes).indexOf(clickedBox)
        const row = Math.floor(boxIndex / 3);
        const column = boxIndex % 3;
        board[row][column] = currentPlayer;



    

            const winner = checkWinner();
                if(winner){
                    triggerConfetti();
                    alert("You Won!")
                    gameOver = true;
                }

           
    }
    }
    })
})
        //Reset Button

const resetButton = document.getElementById('resetBtn');
    resetButton.addEventListener('click', function(){
        boxes.forEach(box=>{
            box.textContent = "";
            box.style.backgroundColor = "";
        });
        
        board.forEach(row => row.fill(""))
        currentPlayer = "X";
        nextPlayer = "O";
        gameOver = false;
    });


        // Confetti Effect for Win!


    document.addEventListener("DOMContentLoaded", function(){
        var confetti = document.createElement("div");
        confetti.className = "confettiDiv";
        document.body.appendChild(confetti);
    })

    function triggerConfetti(){

        const confettiDiv = document.querySelector(".confettiDiv");
    
       
        if (!confettiDiv) {
            confettiDiv = document.createElement("div");
            confettiDiv.className = "confettiDiv"; 
            document.body.appendChild(confettiDiv); 
        }

        const confettiAmount = 400;

        for(let i = 0; i < confettiAmount; i++){
            const confettiPiece = document.createElement("div");
            confettiPiece.classList.add("confetti-Piece");
            const colors = ['#ff0', '#f00', '#00f', '#0f0', '#ff00ff'];

            confettiPiece.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            confettiPiece.style.left = `${Math.random() * 100}%`;
            const randomHorizontalMovement = Math.random() * 100 - 50;
            confettiPiece.style.transform = `translateX(${randomHorizontalMovement}px)`;
            confettiPiece.style.animationDuration = `${Math.random() * 8 + 12}s`;
            confettiPiece.style.animationDelay = `${Math.random() * 2}s`;

            confettiDiv.appendChild(confettiPiece);

            setTimeout(() => {
                confettiPiece.remove();
            }, 3000);
    }

}

