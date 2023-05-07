const boardItems = new Array(9).fill(null);
var isXTurn = true;
let Winner;
let isDraw;

isXTurn ? document.querySelector(".playerTurn").classList.add("playerXTurn") : document.querySelector(".playerTurn").classList.add("playerOTurn").remove("playerXTurn")


function winnerDeclaration() {
    const winnerIs = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    for (let logic of winnerIs){
        const [a, b, c] = logic;

        if((boardItems[a] !== null) && (boardItems[a] == boardItems[b] && boardItems[a] == boardItems[c]))
        {
            document.getElementById("PlayerTurned").style.display = "none";
            console.log("win")
            return boardItems[a];
        }
    }
}

function resetGame(){
    closeNav();

    boardItems.fill(null);

    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML="";
        document.getElementById(i).classList.remove("playerXTurn","playerOTurn")
    }
    document.getElementById("PlayerTurned").style.display = "block";
    document.getElementById("winnerIs").innerHTML="";
    Winner= false;
    
    document.querySelector(".playerTurn").innerHTML="X";
    document.querySelector(".playerTurn").classList.add("playerXTurn")
    document.querySelector(".playerTurn").classList.remove("playerOTurn")

    isXTurn=true;

}

function isMatchedDraw() {

    let draw = boardItems.includes(null);
    if(!draw && !Winner){
        document.getElementById("PlayerTurned").style.display = "none";
        document.getElementById("winnerIs").innerHTML = `Matched is Draw`;
        console.log("draw")
    }
}

function buttonClick(e){

    const value = document.getElementById(e).innerHTML;

    if(value || Winner || isDraw){
        console.log("returning")
        return
    }

    boardItems[e] = isXTurn ? "X" : "O" ;

    if(isXTurn){
        document.getElementById(e).innerHTML="X";
        document.getElementById(e).classList.add("playerXTurn")
        document.querySelector(".playerTurn").innerHTML="O";
        document.querySelector(".playerTurn").classList.add("playerOTurn");
        document.querySelector(".playerTurn").classList.remove("playerXTurn");

    }else{
        document.getElementById(e).innerHTML="0";
        document.getElementById(e).classList.add("playerOTurn");
        document.querySelector(".playerTurn").innerHTML="X";
        document.querySelector(".playerTurn").classList.add("playerXTurn")
        document.querySelector(".playerTurn").classList.remove("playerOTurn")

    }
    
    isXTurn= (!isXTurn);


    //To check for Winner

    Winner = winnerDeclaration(e);
    console.log(Winner)
    if(Winner){
        document.getElementById("winnerIs").innerHTML = `Player <span id="winnerName">${Winner}</span> is Winner`;
        (Winner==="X")? document.getElementById("winnerName").classList.add("playerXTurn") : (document.getElementById("winnerName").classList.add("playerOTurn"))
        document.getElementById("win").innerHTML=Winner;
        openNav();
    }

    //Checking for Draw
    isDraw = isMatchedDraw();
    
}

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}
  
function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}