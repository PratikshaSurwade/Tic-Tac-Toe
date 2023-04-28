

const boardItems = new Array(9).fill(null);
var isXTurn = true;
let Winner;

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
        
        // console.log(boardItems[a],boardItems[b],boardItems[c],a,b,c);
        // console.log(boardItems)
        // console.log(boardItems[a] !== null);
        // console.log( (boardItems[a] !== null) && (boardItems[a] == boardItems[b] && boardItems[a] == boardItems[c]))
        // console.log((boardItems[a] !== null) && (boardItems[a] === boardItems[b] === boardItems[c]))
        if((boardItems[a] !== null) && (boardItems[a] == boardItems[b] && boardItems[a] == boardItems[c]))
        {
            document.getElementById("PlayerTurned").style.display = "none";
            return boardItems[a];
        }
    }


}

function resetGame(){
    boardItems.fill(null);
    console.log(boardItems);
    for (let i = 0; i < 9; i++) {
        document.getElementById(i).innerHTML="";
        document.getElementById(i).classList.remove("playerXTurn","playerOTurn")

    }
    document.getElementById("PlayerTurned").style.display = "block";
    document.getElementById("winnerIs").innerHTML="";
    isXTurn=true;
}

function buttonClick(e){
    console.log("button is clicked" ,e);

    const value = document.getElementById(e).innerHTML;
    console.log("E",e,"value",value);

    if(value || Winner){
        return
    }

    boardItems[e] = isXTurn ? "X" : "O" ;

    if(isXTurn){
        document.getElementById(e).innerHTML="X";
        document.getElementById(e).classList.add("playerXTurn")
        document.querySelector(".playerTurn").innerHTML="X"
    }else{
        document.getElementById(e).innerHTML="0";
        document.getElementById(e).classList.add("playerOTurn");
        document.querySelector(".playerTurn").innerHTML="O";
    }
    // isXTurn ? document.getElementById(e).innerHTML="X" : document.getElementById(e).innerHTML="0";
    // isXTurn ? document.querySelector(".playerTurn").innerHTML="X" :  document.querySelector(".playerTurn").innerHTML="O";
    isXTurn= (!isXTurn);
boardItems.map((steps)=> (
    console.log(steps)
))
    Winner = winnerDeclaration(e);
    if(Winner){
        // document.getElementById("winnerIs").innerHTML = `Player <span class=(${Winner}="X")?"playerXTurn":"playerOTurn">${Winner}</span> is Winner`;
        document.getElementById("winnerIs").innerHTML = `Player <span id="winnerName">${Winner}</span> is Winner`;
        (Winner==="X")? document.getElementById("winnerName").classList.add("playerXTurn") : (document.getElementById("winnerName").classList.add("playerOTurn"))
    }
}