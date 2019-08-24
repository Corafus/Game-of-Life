var worldSize;
var margin;

var grid;
var next = [];
var resolution = 10;

var buttons = [];






//adding new buttons requires
//initializing the new button at startup
//creating a function for the button in the button.js file
//add the button to the list in useSelectedTool
//add the button to the list in performOperation

//TODO: Fix glider so it only has 2 directions

function setup() {
  worldSize = createVector(600, 400);
  margin = createVector(100, 300);
  createCanvas(worldSize.x + margin.x, worldSize.y+ margin.y);
  grid = make2DGrid(worldSize.x/resolution, worldSize.y/resolution);
  buttonSetup();
}

function draw() {

  drawingBackground();
  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      grid[i][j].display();
    }
  }
  if(paused==false){

    next = make2DGrid(worldSize.x/resolution, worldSize.y/resolution);
    commandDraw();
    grid=next;
  }


  for(var i = 0; i < buttons.length; i++){
    buttons[i].update();
  }

}

function drawingBackground(){
  push();
  fill("black");
  rect(0, 0, worldSize.x, worldSize.y);
  fill("grey");
  rect(0, worldSize.y+10, worldSize.x, margin.y);
  stroke("white");
  strokeWeight(10);
  noFill();
  rect(buttons[selectedTool].position.x - 5, buttons[selectedTool].position.y - 20, 40, 40);
  pop();
}

function commandDraw(){

  for(var i = 0; i < grid.length; i++){
    for(var j = 0; j < grid[i].length; j++){
      var sum = 0;
      sum = countNeighbors(i, j);
      applyRules(sum, i, j);
    }
  }
}

function drawTheGrid(columns, rows){
  for(var i=0; i < columns; i++){
    for(var j = 0; j < rows; j++){
      if(grid[i][j]==1){
        fill(255);
        rect(i*resolution, j*resolution, resolution-1, resolution-1);
      }
    }
  }
}

function make2DGrid(columns, rows){
  var anArray = [];
  for(var i = 0; i < columns; i++){
    anArray[i]=[];
    for(var j = 0; j < rows; j++){
      anArray[i].push(new Cell(0, i*resolution, j*resolution));
    }
  }
  return anArray;
}

function countNeighbors(x,y){
  var sum = 0;
  for(var i = -1; i < 2; i++){
    for(var j = -1; j < 2; j++){
       sum+=grid[(worldSize.x/resolution+x+i)%(worldSize.x/resolution)][(worldSize.y/resolution+y+j)%(worldSize.y/resolution)].alive;
      }
    }
  sum-=grid[x][y].alive;
  return sum;
}

function applyRules(sum, i, j){
  if(grid[i][j].alive && sum < 2){
    next[i][j].alive=0;
  }
  if(grid[i][j].alive==1 && sum == 2){
    next[i][j].alive=1;
  }
  if(grid[i][j].alive==1 && sum == 3){
    next[i][j].alive=1;
  }
  if(grid[i][j].alive==1 && sum > 3){
    next[i][j].alive=0;
  }
  if(grid[i][j].alive==0 && sum == 3){
    next[i][j].alive=1;
  }
  if(grid[i][j].alive==0 && sum < 3){
    next[i][j].alive=0;
  }
  if(grid[i][j]==0 && sum > 3){
    next[i][j].alive=0;
  }
}
