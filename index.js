

const boardItems = new Array(8).fill(null);
var isXTurn = true;

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
    
    for ()


}

function buttonClick(e){
    console.log("button is clicked" ,e);

    const value = document.getElementById(e).innerHTML;
    console.log("E",e,"value",value);
    console.log("Array",boardItems)

    if(value){
        return
    }
    boardItems[e] = isXTurn ? "X" : "O" ;

    isXTurn ? document.getElementById(e).innerHTML="X" : document.getElementById(e).innerHTML="0";
    isXTurn ? document.querySelector(".playerTurn").innerHTML="X" :  document.querySelector(".playerTurn").innerHTML="O";
    isXTurn= (!isXTurn);

}