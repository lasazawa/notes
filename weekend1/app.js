
//Creating click handler for a div.tile
var flipTile = function() {
    var any_tile = document.querySelectorAll(".tile");
    for (var i = any_tile.length - 1; i >= 0; i--) {
        any_tile[i].addEventListener("click", addSelected);
    }
};

var winCombos = [["tile1","tile2","tile3"], ["tile4","tile5","tile6"],
                ["tile7","tile8","tile9"], ["tile1","tile4","tile7"],
                ["tile2","tile5","tile8"], ["tile3","tile6","tile9"],
                ["tile1","tile5","tile9"], ["tile3","tile5","tile7"]];

var eachCombo = {};
var eachToObj = function() {
    for (var i = winCombos.length - 1; i >= 0; i--) {
        eachCombo.push(winCombos["combo-number": i]);
    }
};
console.log(eachCombo);

var fireClicked = [];
// var fireClickedSort = fireClicked.sort();
var tintClicked = [];
// var tintClickedSort = tintClicked.sort();

//FLIP TILE ACCORDING TO WHO'S TURN
var myTurn = true;
var addSelected = function(event) {
    console.log("CLICK! turn:" + myTurn);
    var child = this.querySelector("span");
    if ( this.classList.contains("tint") ||
        this.classList.contains("fire")) {
        return;
    }
    if (myTurn === true) {
            this.classList.add("fire");
            child.classList.add("glyphicon-fire");
            fireClicked.push(this.getAttribute("id"));
            myTurn = false;
    } else {
            this.classList.add("tint");
            child.classList.add("glyphicon-tint");
            tintClicked.push(this.getAttribute("id"));
            myTurn = true;
    }
    //RUN COMPARE
    var fireWins = function() {
        fireClicked.sort();
        if ((fireClicked[0] === winCombos[0]) ||
            (fireClicked[0] === winCombos[1]) ||
            (fireClicked[0] === winCombos[2])) {
            console.log("MATCH 1");
        }
        else {
           console.log("NO MATCH");
        }
    };
    fireWins();
};


//check if all items in fireClicked match any of the sub-arrays in winCombos[i]
// var test = function() {
//     var eachWinCombo = winCombos[i];
//     for (var a in eachWinCombo) {
//         if (fireClicked[0] === eachWinCombo[0] ||
//             fireClicked[1] === eachWinCombo[1] ||
//             fireClicked[2] === eachWinCombo[2]);
//     }
//     if (fireClicked[0] === winCombos[0[0]]);
//     console.log(fireClicked, winCombos[0]);
//     test = true;
// };

// var win = function() {
//     fireClicked.sort();
//     if (fireClicked[0] === winCombos[0] {
//         // fireClickedSort[0] === winCombos[1] ||
//         // fireClickedSort[0] === winCombos[2] ) {
//         console.log("YES ITS TRUE");
//     }
//     else {
//         console.log("NO ITS FALSE");
//     }
// };



//RESET BUTTON
var resetButtonHandler = function() {
    var any_tile = document.querySelectorAll(".tile");
    for (var i = any_tile.length - 1; i >= 0; i--) {
        any_tile[i].classList.remove("fire", "tint");
    var child = document.querySelectorAll("span");
    for (var n = child.length - 1; n >= 0; n--) {
        child[n].classList.remove("glyphicon-fire","glyphicon-tint");
    }
    }
};

//initualize function
var initialize = function() {
    console.log("Tic Tac Toe is loaded!");
    flipTile();
    document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload = initialize;


