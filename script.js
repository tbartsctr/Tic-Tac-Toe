const boxes = document.querySelectorAll(".ticTacGrid div")

let currentPlayer = "X";
let nextPlayer = "O";
let gameOver = "false";



    const board = [
        ["", "", ""],
        ["", "", ""],
        ["", "", ""]
    ];

  



    // Checks Rows
    function checkWinner(){
    


    for (let i = 0; i < 3; i++)
        if (board[i][0] && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {

                return `${board[i][0]} Won!`;
        }


    //Checks Columns

    for (let i = 0; i < 3; i++)
        if (board[0][i] && board[0][i] === board[1][i] && board[0][i] === board[2][i]){; 

                return `${board[0][i]} Won!`;

        }

        
    // Check Diagnols

    if ((board[0][0] && board[0][0] === board[1][1] && board[0][0] === board[2][2]) || 
        (board[0][2] && board[0][2] === board[1][1] && board[0][2] === board[2][0])) {
    
            return `${board[0][0]} Won!`;
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
                    alert("You Won!")
                    gameOver = true;
                }

           
    }
    }
    })
})


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

   

