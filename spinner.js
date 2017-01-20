function Spinner() {

	this.spinnerX = 300;
	this.spinnerY = 300;
	this.spinnerZ = 200;
	this.spinnerSpeed = 10;
	this.numSpokes = 5;
	this.spokes = [];
	
	var startRad = radians(0); 

	for (var i = 0; i < this.numSpokes; i++){
		this.spokes[i] = [random(0,255), random(0, 255), random(0,255)];
	}

	this.rotate = function(){
		startRad = startRad + radians(this.spinnerSpeed);
	}
	
	this.show = function(){
		fill(100, 100, 100);
		ellipse(this.spinnerX, this.spinnerY, this.spinnerZ, this.spinnerZ);
		var rangeRad = 360/this.numSpokes;
		for (var i=0; i<this.numSpokes; i++){
			fill(this.spokes[i][0], this.spokes[i][1], this.spokes[i][2]);
			var endRad = startRad + radians(rangeRad) 
			arc(this.spinnerX, this.spinnerY, this.spinnerZ, this.spinnerZ, startRad, endRad);
			startRad = endRad;
		}
	}

	this.spin = function(){

		window.setInterval(this.rotate(), 100);
	
	}
}
