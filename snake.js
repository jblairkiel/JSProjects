function Snake() {
	
	this.x = 0;
	this.y = 0;
	this.xspeed = 1;
	this.yspeed = 0;
	this.total = 0;
	this.tail = [];
	this.justDied = false;

	this.dir = function(x, y){
		this.xspeed = x;
		this.yspeed = y;
	}

	this.update = function(){

		if (this.total === this.tail.length){
			for (var i = 0; i< this.total-1; i++){
				this.tail[i] = this.tail[i+1];
			}
		}

		this.tail[this.total-1] = createVector(this.x, this.y);

		this.x = this.x + this.xspeed *scl;
		this.y = this.y + this.yspeed *scl;

		if(this.justDied){
			this.x = constrain(this.x, 0, width-scl);
			this.y = constrain(this.y, 0, height-scl);
			this.justDied = false;
		}

	}

	this.show = function(){
		fill(255);
		for (var i = 0; i< this.tail.length; i++){
			rect(this.tail[i].x, this.tail[i].y, scl, scl);
		}
		rect(this.x, this.y, scl, scl);
	}

	this.eat = function(pos){
		var d = dist(this.x, this.y, pos.x, pos.y);
		if(d < 1){
			this.total++;
			return true;
		}		
		else{
			return false;
		}
	}

	this.death = function(){
		if(this.tail.length < 0){
			for (var i=0; i< this.tail.length; i++){
				var pos = this.tail[i];
				var d = dist(this.x, this.y, pos.x, pos.y);
				if (d<1 || (this.x < 0) || (this.x > width-scl) || (this.y < 0) || (this.x > height-scl)){
					//High score
					this.dir(1,0);
					this.x = 0;
					this.y = 0;
					this.total = 0;
					this.tail = [];
					this.justDied = true;
					return true;
				}

			}
			return false;
		}
		else{
			if ((this.x < 0) || (this.x > width-scl) || (this.y < 0) || (this.x > height-scl)){
				//High score
				this.dir(1,0);
				this.x = 0;
				this.y = 0;
				this.total = 0;
				this.tail = [];
				this.justDied = true;
				return true;
			}
			else{
				return false;
			}
		}
	
	}
}
