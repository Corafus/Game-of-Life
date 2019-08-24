var gliderDirection = 0;
var paused = true;
var selectedTool = 1;


class Button{
  constructor(name, x, y, toolNumber){
    this.name = name;
    this.position = createVector(x,y);
    this.toolNumber= toolNumber;
  }

  update(){
    push();
    fill("green");
    rect(this.position.x, this.position.y, 40, 20);
    fill("white");
    text(this.name, this.position.x+8, this.position.y+15);
    pop();
  }
}



function playPause(){
  if(paused==false){
    paused=true;
    buttons[0].name="play"
  } else {
    paused=false;
    buttons[0].name="pause"
  }
}

function flipState(x,y){
  if(grid[x][y].alive==0){
    grid[x][y].alive=1;
  } else {
    grid[x][y].alive=0;
  }
}

function placeGlider(x, y){
  if(gliderDirection==0){
    grid[x+1][y-1].alive=1;
    grid[x+1][y].alive=1;
    grid[x+1][y+1].alive=1;
    grid[x-1][y].alive=1;
    grid[x][y+1].alive=1;
  }
  if(gliderDirection==2){
    grid[x-1][y-1].alive=1;
    grid[x-1][y].alive=1;
    grid[x-1][y+1].alive=1;
    grid[x+1][y].alive=1;
    grid[x][y+1].alive=1;
  }
  if(gliderDirection==1){
    grid[x-1][y+1].alive=1;
    grid[x][y+1].alive=1;
    grid[x+1][y+1].alive=1;
    grid[x-1][y].alive=1;
    grid[x][y-1].alive=1;
  }
  if(gliderDirection==3){
    grid[x+1][y+1].alive=1;
    grid[x][y+1].alive=1;
    grid[x-1][y+1].alive=1;
    grid[x+1][y].alive=1;
    grid[x][y-1].alive=1;
  }
}

function placeLightWeightShip(x, y){
  grid[x-2][y-1].alive=1;
  grid[x-1][y-1].alive=1;
  grid[x][y-1].alive=1;
  grid[x+1][y-1].alive=1;
  grid[x-3][y].alive=1;
  grid[x+1][y].alive=1;
  grid[x+1][y+1].alive=1;
  grid[x][y+2].alive=1;
  grid[x-3][y+2].alive=1;
}

function placeMiddleWeightShip(x, y){
  grid[x-3][y].alive=1;
  grid[x-2][y].alive=1;
  grid[x-1][y].alive=1;
  grid[x+1][y].alive=1;
  grid[x+2][y].alive=1;
  grid[x-3][y+1].alive=1;
  grid[x-2][y+1].alive=1;
  grid[x-1][y+1].alive=1;
  grid[x][y+1].alive=1;
  grid[x+1][y+1].alive=1;
  grid[x-2][y+2].alive=1;
  grid[x-1][y+2].alive=1;
  grid[x][y+2].alive=1;

  grid[x][y-1].alive=1;
  grid[x+1][y-1].alive=1;
}

function placeHeavyWeightShip(x, y){
  grid[x-4][y].alive=1;
  grid[x-3][y].alive=1;
  grid[x-2][y].alive=1;
  grid[x-1][y].alive=1;
  grid[x+1][y].alive=1;
  grid[x+2][y].alive=1;
  grid[x-4][y+1].alive=1;
  grid[x-3][y+1].alive=1;
  grid[x-2][y+1].alive=1;
  grid[x-1][y+1].alive=1;
  grid[x][y+1].alive=1;
  grid[x+1][y+1].alive=1;
  grid[x-3][y+2].alive=1;
  grid[x-2][y+2].alive=1;
  grid[x-1][y+2].alive=1;
  grid[x][y+2].alive=1;
  grid[x][y-1].alive=1;
  grid[x+1][y-1].alive=1;
}

function eraser(x,y){
  for(var i = -5; i < 6; i++){
    for(var j = -5; j < 6; j++){
      grid[x+i][y+j].alive=0;
    }
  }
}

function clearGrid(){
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j].alive=0;
    }
  }
  console.log("tried to clear");
}
