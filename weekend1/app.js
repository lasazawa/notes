
//Creating click handler for a div.tile
var any_tile = document.querySelectorAll(".tile");
var notification = document.querySelector("h4");

var flipTile = function() {
    for (var i = any_tile.length - 1; i >= 0; i--) {
        any_tile[i].addEventListener("click", addSelected);
    }
};

var allWinCombos = [["tile1","tile2","tile3"], ["tile4","tile5","tile6"],
                ["tile7","tile8","tile9"], ["tile1","tile4","tile7"],
                ["tile2","tile5","tile8"], ["tile3","tile6","tile9"],
                ["tile1","tile5","tile9"], ["tile3","tile5","tile7"]];

var fireClicked = [];
var tintClicked = [];

var myTurn = true;
var addSelected = function(event) {
    console.log("CLICK! turn:" + myTurn);
    //FLIP TILE ACCORDING TO WHO'S TURN
    var child = this.querySelector("span");
    if ( this.classList.contains("tint") ||
        this.classList.contains("fire")) {
        return;
    }
    if (myTurn === true) {
            this.classList.add("fire");
            child.classList.add("glyphicon-fire");
            fireClicked.push(this.getAttribute("id"));
            notification.innerHTML = "Next up: Water";
            myTurn = false;
            console.log(myTurn);
    } else {
            this.classList.add("tint");
            child.classList.add("glyphicon-tint");
            tintClicked.push(this.getAttribute("id"));
            notification.innerHTML = "Next up: Fire";
            myTurn = true;
    }
    console.log(fireClicked);
    console.log(tintClicked);

    var winFound = function() {
        var winComboFire = [];
        var winComboTint = [];
        for (var i = allWinCombos.length - 1; i >= 0; i--) {
            for (var j = allWinCombos[i].length - 1; j >= 0; j--) {
                for (var f = fireClicked.length - 1; f >= 0; f--) {
                    if (fireClicked[f] === allWinCombos[i][j]) {
                        console.log("Fire clicked: " + fireClicked[f]);
                        winComboFire.push(i);
                    }
                    var fireCounter = {};
                    for (var n = winComboFire.length - 1; n >= 0; n--) {
                        if (fireCounter[winComboFire[n]]) {
                            fireCounter[winComboFire[n]]++;
                        }
                        else {
                            fireCounter[winComboFire[n]] = 1;
                        }
                    }
                    console.log(fireCounter);
                    for (var x in fireCounter) {
                        if (fireCounter[x] === 3) {
                            // console.log("FIRE WINSSSS!!!");
                            notification.innerHTML = "Fire beats water!!";
                            addSelected = false;
                        }
                    }
                }
            }
        }
        for (var h = allWinCombos.length - 1; h >= 0; h--) {
            for (var k = allWinCombos[h].length - 1; k >= 0; k--) {
                for (var t = tintClicked.length - 1; t >= 0; t--) {
                    if (tintClicked[t] === allWinCombos[h][k]) {
                        console.log("Tint clicked: " + tintClicked[t]);
                        winComboTint.push(h);
                    }
                    var tintCounter = {};
                    for (var m = winComboTint.length - 1; m >= 0; m--) {
                        if (tintCounter[winComboTint[m]]) {
                            tintCounter[winComboTint[m]]++;
                        }
                        else {
                            tintCounter[winComboTint[m]] = 1;
                        }
                    }
                    console.log(tintCounter);
                    for (var y in tintCounter) {
                        if (tintCounter[y] === 3) {
                            // console.log("WATER WINSSSS!!!");
                            notification.innerHTML = "Water beats fire!!";
                            addSelected = false;
                        }
                    }
                }
            }
        }
};
    winFound();
};

//RESET BUTTON
var resetButtonHandler = function() {
    for (var i = any_tile.length - 1; i >= 0; i--) {
        any_tile[i].classList.remove("fire", "tint");
    var child = document.querySelectorAll("span");
    for (var n = child.length - 1; n >= 0; n--) {
        child[n].classList.remove("glyphicon-fire","glyphicon-tint");
    }
    notification.innerHTML = "Fire, you're up first!";
    myTurn = true;
    }

};

//initialize function
var initialize = function() {
    console.log("Tic Tac Toe is loaded!");
    flipTile();
    document.querySelector("#reset").addEventListener("click",resetButtonHandler);
};

window.onload = initialize;


