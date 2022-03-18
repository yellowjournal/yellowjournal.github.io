const gameTiles = new Map();

gameTiles.set(0, ['42', 'left']); //all of the grid tiles and their corresponding positions within the tile
gameTiles.set(1, ['43', 'left']);
gameTiles.set(2, ['44', 'left']);
gameTiles.set(3, ['44', 'right']);
gameTiles.set(4, ['45', 'left']);
gameTiles.set(5, ['46', 'left']);
gameTiles.set(6, ['47', 'left']);
gameTiles.set(7, ['48', 'left']);
gameTiles.set(8, ['41', 'left']);
gameTiles.set(9, ['40', 'left']);
gameTiles.set(10, ['32', 'right']);
gameTiles.set(11, ['25', 'left']);
gameTiles.set(12, ['24', 'right']);
gameTiles.set(13, ['31', 'right']);
gameTiles.set(14, ['30', 'right']);
gameTiles.set(15, ['30', 'left']);
gameTiles.set(16, ['29', 'left']);
gameTiles.set(17, ['21', 'right']);
gameTiles.set(18, ['14', 'right']);
gameTiles.set(19, ['8', 'left']);
gameTiles.set(20, ['9', 'right']);
gameTiles.set(21, ['10', 'right']);
gameTiles.set(22, ['11', 'right']);
gameTiles.set(23, ['19', 'left']);
gameTiles.set(24, ['26', 'right']);
gameTiles.set(25, ['27', 'right']);
gameTiles.set(26, ['13', 'right']);
gameTiles.set(27, ['6', 'right']);


const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = "";//c;
    cell.id = c;
    container.appendChild(cell).className = "grid-item";
  }
}
makeRows(7,7);

var piece = document.createElement("img");
piece.src = "player_piece.png";
piece.setAttribute("style", "float:left");
piece.style.width = "50px";
piece.style.height = "100px";
document.getElementById("42").appendChild(piece); //generates the piece grid and places the piece at the start


var currentPosition = 0;
console.log(currentPosition);

function rollDice(){return 1 + Math.floor(Math.random()*4);} //gets a value between 1 and 4

function displayDice(){
  let num = rollDice();
  let dice = document.getElementById('dice');
  let dice_image = document.getElementById("die_image");
  dice_image.src = "dice_"+num.toString()+".jpg";
  dice.appendChild(dice_image);
  document.getElementById(gameTiles.get(currentPosition)[0]).removeChild(piece);

  if (currentPosition < 27){
    currentPosition += num;
  }
  console.log(currentPosition)
  if (currentPosition >= 27) {
    currentPosition = 27;
    piece.setAttribute("style", "float:" + gameTiles.get(27)[1]);
    piece.style.width = "50px";
    piece.style.height = "100px";
    document.getElementById(gameTiles.get(27)[0]).appendChild(piece);
  } else{
    piece.setAttribute("style", "float:" + gameTiles.get(currentPosition)[1]);
    piece.style.width = "50px";
    piece.style.height = "100px";
    document.getElementById(gameTiles.get(currentPosition)[0]).appendChild(piece);
  }
}