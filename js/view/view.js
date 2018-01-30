class View {
	constructor() {
		this.canvas = document.getElementsByTagName("canvas")[0];
		this.ctx = this.canvas.getContext("2d");
	}
	
	showGrid(grid, circleSize) {
		var xPos = window.innerWidth / 2 - circleSize * 4;
		var yPos = window.innerHeight / 2 - circleSize * 4;
		
		for (var y = 0; y < grid.length; y++) {
			for (var x = 0; x < grid[0].length; x++) {
				this.ctx.beginPath();
				this.ctx.arc(xPos, yPos, circleSize, 0, 2 * Math.PI, false);
				this.ctx.shadowColor = "rgba(0,0,0,0.4)";
				this.ctx.shadowBlur = 30;
				this.ctx.fillStyle = "white";
				this.ctx.fill();
				this.ctx.closePath();
				
				this.ctx.beginPath();
				this.ctx.arc(xPos, yPos, circleSize * 0.3, 0, 2 * Math.PI, false);
				this.ctx.fillStyle = "#ADD8E6";
				this.ctx.shadowBlur = 0;
				this.ctx.fill();
				this.ctx.closePath();
				
				// Next
				xPos += circleSize * 4;
			}
			xPos = window.innerWidth / 2 - circleSize * 4;
			yPos += circleSize * 4;
		}
	}
	
	showClaimedGrid(grid, claimedCount, circleSize) {
		
		var xPos, yPos;
		
		if (claimedCount > 0) {
			this.ctx.beginPath();
			this.ctx.strokeStyle = "#222";
			this.ctx.lineWidth = circleSize * 0.4;
			this.ctx.lineCap = "round";
			
			for (var i = 1; i <= claimedCount; i++) {
				xPos = window.innerWidth / 2 - circleSize * 4;
				yPos = window.innerHeight / 2 - circleSize * 4;
				for (var y = 0; y < 3; y++) {
					for (var x = 0; x < 3; x++) {
						if (grid[y][x] == 1 && i == 1) {
							this.ctx.moveTo(xPos, yPos);
						} else if (grid[y][x] == i) {
							this.ctx.lineTo(xPos, yPos);
							this.ctx.stroke();
							this.ctx.moveTo(xPos, yPos);
						}
						// Next
						xPos += circleSize * 4;
					}
					xPos = window.innerWidth / 2 - circleSize * 4;
					yPos += circleSize * 4;
				}
			}
		}
	}

	setClaimedDots(grid, circleSize) {
		var xPos, yPos;
		yPos = window.innerHeight / 2 - circleSize * 4;
		
		for (var y = 0; y < 3; y++) {
			xPos = window.innerWidth / 2 - circleSize * 4;
			for (var x = 0; x < 3; x++) {
				if (grid[y][x] > 0) {
					this.ctx.beginPath();
					this.ctx.arc(xPos, yPos, circleSize * 0.6, 0, 2 * Math.PI, false);
					this.ctx.fillStyle = "#444";
					this.ctx.fill();
					this.ctx.closePath();
				}
				// Next
				xPos += circleSize * 4;
			}
			xPos = window.innerWidth / 2 - circleSize * 4;
			yPos += circleSize * 4;
		}
	}
	
	drawLine(positionBundle, mouseX, mouseY, circleSize) {
		var xPos = window.innerWidth / 2 - circleSize * 4;
		var yPos = window.innerHeight / 2 - circleSize * 4;
		
		this.ctx.beginPath();
		this.ctx.strokeStyle = "#222";
		this.ctx.lineWidth = circleSize * 0.4;
		this.ctx.lineCap = "round";
		this.ctx.moveTo(xPos + (circleSize * 4 * positionBundle[0]), yPos + (circleSize * 4 * positionBundle[1]));
		this.ctx.lineTo(mouseX, mouseY);
		this.ctx.stroke();
		this.ctx.closePath();
	}

	setCanvasResolution() {
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	clearCanvas() {
		this.ctx.beginPath();
		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
		this.ctx.closePath();
	}
}