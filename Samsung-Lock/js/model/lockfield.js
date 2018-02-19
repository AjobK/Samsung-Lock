class LockField {
	constructor() {
		this.field = [
			[0,0,0],
			[0,0,0],
			[0,0,0]
		];
		
		this.fieldGoal = [
			[1,2,0],
			[0,3,5],
			[0,0,4]
		];
	}
	
	setFieldShelf(x,y,fillcontent) {
		this.field[y][x] = fillcontent;
	}
	
	getFieldShelf(x,y) {
		return this.field[y][x];
	}
	
	getHighestFieldNumber() {
		var highestNumber = 0;
		for (var y = 0; y < 3; y++) {
			for (var x = 0; x < 3; x++) {
				if (this.field[y][x] >= highestNumber) highestNumber = this.field[y][x];
			}
		}
		return highestNumber;
	}
	
	getHighestPosition() {
		var highestNumber,
			highestPosition = [];
			
		highestNumber = 0;
		for (var y = 0; y < 3; y++) {
			for (var x = 0; x < 3; x++) {
				if (this.field[y][x] >= highestNumber) {
					highestNumber = this.field[y][x];
					highestPosition = [x, y];
				}
			}
		}
		return highestPosition;
	}
	
	logField() {
		for (var y = 0; y < 3; y++) {
			console.log(this.field[y]);
		}
	}
	
	resetField() {
		this.field = [];
		
		for (var y = 0; y < 3; y++) {
			this.field.push([0,0,0]);
		}
	}
	
	getField() {
		return this.field;
	}
	
	getFieldGoal() {
		return this.fieldGoal;
	}
}