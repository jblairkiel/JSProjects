var s;

function setup(){
	createCanvas(600, 600);
	s = new Spinner();

	//$("#highScoreDialog").dialog({autoOpen: true});
	$("#spinButton").button("option", "clases.ui-button", "highlight").click(s.spin());
}

function draw(){
	background(51);
	fill(255);
	//s.update();
	s.show();
}
