const boxes = document.querySelectorAll(".ticTacGrid div")

let currentPlayer = "X";
let nextPlayer = "O"

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

           
    }
    }
    })
})


const resetButton = document.querySelector('button');
    resetButton.addEventListener('click', function(){
        boxes.forEach(box=>{
            box.textContent = "";
            box.style.backgroundColor = ""
        })
    })


