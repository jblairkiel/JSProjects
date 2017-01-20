var s;
var scl = 20;
var prevPress = "RIGHT";

var food;

function setup(){
	createCanvas(600, 600);
	s = new Snake();
	frameRate(10);
	pickLocation();
}

function pickLocation() {
	var cols = floor(width/scl);
	var rows = floor(height/scl);
	food = createVector(floor(random(cols)), floor(random(rows)));
	food.mult(scl);
}

function draw(){
	background(51);
	fill(255);
	text("Snake Points: " + s.total,10,10,100,70);
	if(s.death()){
		showScore();	
	}
	s.update();
	s.show();
	if(s.eat(food)){
		pickLocation();
	}

	fill(255, 0, 100);
	rect(food.x, food.y, scl, scl);
}

function keyPressed(){
	if(keyCode == UP_ARROW && prevPress != "DOWN"){
		s.dir(0,-1);
		prevPress = "UP";
	}
	else if(keyCode == DOWN_ARROW && prevPress != "UP"){
		s.dir(0,1);
		prevPress = "DOWN";
	}
	else if(keyCode == LEFT_ARROW && prevPress != "RIGHT"){
		s.dir(-1,0);
		prevPress = "LEFT";
	}
	else if(keyCode == RIGHT_ARROW && prevPress != "LEFT"){
		s.dir(1,0);
		prevPress = "RIGHT";
	}
}

function mousePressed(){

	/* Testing the growth of the snake on mousepress
	 * 	s.total++;
	 * 		*/
	s.total++;
}

function showScore(){
	s.dir(0,0);
	$("#highScoreDialog").dialog({
		dialogClass: "no-close",
		modal: true,
		buttons: [
			{
			text: "Save",
			click: function(){
				$(this).dialog("close");
				
				}
			},
			{
			text: "Cancel",
			click: function(){
				$(this).dialog("close");
				}
			}
		]
	});
}

