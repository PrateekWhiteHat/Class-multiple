var box1,box2,box3,box4;
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,30,30,1,3);
  box2 = new Box(200,200,30,30,1,3);
  box3 = new Box(200,200,30,30,1,2);
  box4 = new Box(200,200,30,30,1,2);
}

function draw() 
{
  background(220);
  box1.show();
  box1.move_right();
  box1.move_down();
  box2.show();
  box2.move_left();
  box2.move_down();
  box3.show();
  box3.move_right();
  box3.move_up();
  box4.show();
  box4.move_left();
  box4.move_up();
}

