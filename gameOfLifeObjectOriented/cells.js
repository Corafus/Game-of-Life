class Cell{
  constructor(alive, x,y){
    this.position = createVector(x,y);
    this.alive = alive;
    this.color = createVector(floor(random(255)), floor(random(255)), floor(random(255)));

  }

  display(){
    push();
    fill(this.color.x, this.color.y, this.color.z);
    if(this.alive){
      rect(this.position.x, this.position.y, resolution, resolution);
    }
    pop();
  }
}
