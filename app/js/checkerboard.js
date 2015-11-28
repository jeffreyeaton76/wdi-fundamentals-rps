var checkerboard = [[null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null],
                    [null,null,null,null,null,null,null,null]];

function setSquare(player, row, col) {
    checkerboard[row][col] = player
    }

function getPieceAt(row, col) {
    return checkerboard[row][col];
    }

function clearBoard() {
    for (i = 0; i < checkerboard.length; i++) {
        for (j = 0; j < checkerboard[i].length; j++) {
            checkerboard[i][j] = null;
        }
    }
}

function setUpRed() {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < checkerboard[i].length; j++) {
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                checkerboard[i][j] = 'R';
            }
        }
    }
}

function setUpBlack() {
    for (i = 5; i < checkerboard.length; i++) {
        for (j = 0; j < checkerboard[i].length; j++) {
            if ((i % 2 == 0 && j % 2 == 0) || (i % 2 != 0 && j % 2 != 0)) {
                checkerboard[i][j] = 'B';
            }
        }
    }
}
            
setUpRed();
setUpBlack();

var pieces = {'red':[], 'black':[]}

function piecesArray() {
    for (i = 0; i < checkerboard.length; i++) {
        for (j = 0; j < checkerboard[i].length; j ++) {
            if (checkerboard[i][j] == 'R') {
                pieces.red.push([i,j]);
            }
            else if (checkerboard[i][j] == 'B') {
                pieces.black.push([i,j]);
            }
        }
    }
}
console.log(checkerboard);
piecesArray();
console.log(pieces);

  pieces['red'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'R';
    });

  pieces['black'].map(function(piece){
      var row = piece[0];
      var col = piece[1];
      return checkerboard[row][col] === 'B';
    });
    
    

