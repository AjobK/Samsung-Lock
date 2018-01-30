class LockCircles {
	constructor() {
		this.circleSize = window.innerWidth < window.innerHeight ? window.innerWidth / 25 : window.innerHeight / 25;
		this.circleArea = [];
		
		this.setCircleAreas();
	}
	
	setCircleSize() {
		this.circleSize = window.innerWidth < window.innerHeight ? window.innerWidth / 25 : window.innerHeight / 25;
	}
	
	getCircleSize() {
		return this.circleSize;
	}
	
	setCircleAreas() {
		this.circleArea = [];
		
		var xPos = window.innerWidth / 2 - this.circleSize * 4,
			yPos = window.innerHeight / 2 - this.circleSize * 4,
			up, down, left, right;
		
		for (var y = 0; y < 3; y++) {
			this.circleArea.push([],[],[]);
			for (var x = 0; x < 3; x++) {
				// Left
				left = xPos - this.circleSize;
				// Right
				right = xPos + this.circleSize;
				// Up
				up = yPos - this.circleSize;
				// Down
				down = yPos + this.circleSize;
				
				this.circleArea[y].push([left, right, up, down]);
				
				xPos += this.circleSize * 4;
			}
			xPos = window.innerWidth / 2 - this.circleSize * 4;
			yPos += this.circleSize * 4;
		}
	}
	
	checkIfOnCircleArea(mouseX, mouseY) {
		for (var y = 0; y < 3; y++) {
			for (var x = 0; x < 3; x++) {
				if (mouseX > this.circleArea[y][x][0] && mouseX < this.circleArea[y][x][1] && mouseY > this.circleArea[y][x][2] && mouseY < this.circleArea[y][x][3]) {
					//console.log("You are on " + x + "," + y);
					return [this.circleArea[y][x][0] + this.circleSize, this.circleArea[y][x][2] + this.circleSize, x, y];
				}
			}
		}
		return false;
	}
	
	getCurrentCircleArea(mouseX, mouseY) {
		for (var y = 0; y < 3; y++) {
			for (var x = 0; x < 3; x++) {
				if (mouseX > this.circleArea[y][x][0] && mouseX < this.circleArea[y][x][1] && mouseY > this.circleArea[y][x][2] && mouseY < this.circleArea[y][x][3]) {
					return [x, y];
				}
			}
		}
		return false;
	}
}