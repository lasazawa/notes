
//Creating click handler for a div.tile
var any_tile = document.querySelectorAll(".tile");
var notification = document.querySelector("h4");

var flipTile = function() {
    for (var i = any_tile.length - 1; i >= 0; i--) {
        any_tile[i].addEventListener("click", addSelected);
    }
};

var winCombos = [["tile1","tile2","tile3"], ["tile4","tile5","tile6"],
                ["tile7","tile8","tile9"], ["tile1","tile4","tile7"],
                ["tile2","tile5","tile8"], ["tile3","tile6","tile9"],
                ["tile1","tile5","tile9"], ["tile3","tile5","tile7"]];

// // var winCombos = [[0,1,2], [3,4,5], [6,7,8], [0,3,6],
//                 [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
// var winCombos = ["tile1", "tile2", "tile3"];


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
    console.log(fireClicked);
    console.log(tintClicked);

    var winFound = function() {
        // if ((fireClicked.length >= 3)) {
        var matchCountFire = 0;
        var matchCountTint = 0;
        for (var i = winCombos.length - 1; i >= 0; i--) {
            // for (var j = winCombos[i].length - 1; j >= 0; j--) {
            //     Things[i]
            // };
            for (var f = fireClicked.length - 1; f >= 0; f--) {
                if (fireClicked[f] === winCombos[i]){
                    matchCountFire++;
                    console.log("FIRE count", matchCountFire);
                }
            }
            for (var t = tintClicked.length - 1; t >= 0; t--) {
                if (tintClicked[t] === winCombos[i]){
                    matchCountTint++;
                    console.log("TINT count", matchCountTint);
                }
            }
        }
        // } if statement makring at least 3
        if (matchCountFire === 3) {
            winFound = true;
            console.log("WIN FOUND!");
            notification.innerHTML = "Fire wins!!";
        }
        if (matchCountTint === 3) {
            winFound = true;
            console.log("TINT WINS!!");
            notification.innerHTML = "Water Wins!!";
        }
    };
    winFound();
};

    // console.log(any_tile.classList.contains("tint"));

    // RUN COMPARE
    // var fireWins = function() {
    //     fireClicked.sort();
    //     if ((fireClicked[0] === winCombos[0]) ||
    //         (fireClicked[0] === winCombos[1]) ||
    //         (fireClicked[0] === winCombos[2])) {
    //         console.log("MATCH 1");
    //     }
    //     else {
    //        console.log("NO MATCH");
    //     }
    // };
    // fireWins();



// for (var i = 0; i < winCombos.length; i++) {
//     for (var j = 0; j < winCombos[i].length; j++) {
//         console.log(winCombos[0]);
//         }
//         if (compare.indexOf(winCombos[i][j]) {
        //     //compare has a number from the current array! main[i][j] exists in compare!
        // };
    // }




//RESET BUTTON
var resetButtonHandler = function() {
    for (var i = any_tile.length - 1; i >= 0; i--) {
        any_tile[i].classList.remove("fire", "tint");
    var child = document.querySelectorAll("span");
    for (var n = child.length - 1; n >= 0; n--) {
        child[n].classList.remove("glyphicon-fire","glyphicon-tint");
    }
    }
};

//initialize function
var initialize = function() {
    console.log("Tic Tac Toe is loaded!");
    flipTile();
    document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload = initialize;


