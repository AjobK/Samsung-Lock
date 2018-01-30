class Controller {
	constructor() {
		this.view = new View();
		this.lockField = new LockField();
		this.lockCircles = new LockCircles();
		
		this.confirmedMovement = false;
		
		// First entrance
		this.lockCircles.setCircleSize();
		this.lockCircles.setCircleAreas();
		this.view.setCanvasResolution();
		this.showAllOnCanvas();
		
		// Show grid on resize
		window.addEventListener("resize", function(e) {
			controller.lockCircles.setCircleSize();
			controller.lockCircles.setCircleAreas();
			controller.view.setCanvasResolution();
			controller.showAllOnCanvas();
		});
		
		// Check if on circle
		window.addEventListener("mousedown", function(e) {
			var circleCheck = controller.lockCircles.checkIfOnCircleArea(e.x, e.y),
				lockCheck = controller.lockField.getHighestPosition(),
				claimedCount = 1;
			
			var checkCurrentCircleArea = controller.lockCircles.getCurrentCircleArea(e.x, e.y);
			
			if (checkCurrentCircleArea != false) {
				controller.lockField.setFieldShelf(checkCurrentCircleArea[0],checkCurrentCircleArea[1], 1);
			}
			
			controller.confirmedMovement = true;
			
			window.addEventListener("mousemove", function(e) {
				if (controller.confirmedMovement) {
					controller.lockField.logField();
					lockCheck = controller.lockField.getHighestPosition();
					controller.showAllOnCanvas();
					
					checkCurrentCircleArea = controller.lockCircles.getCurrentCircleArea(e.x, e.y);
					
					controller.view.drawLine(lockCheck, e.x, e.y, controller.lockCircles.getCircleSize());
					controller.view.setClaimedDots(controller.lockField.getField(), controller.lockCircles.getCircleSize());
					
					//controller.lockField.logField();
					if (checkCurrentCircleArea != false && controller.lockField.getField()[checkCurrentCircleArea[1]][checkCurrentCircleArea[0]] == 0) {
						claimedCount++;
						controller.lockField.setFieldShelf(checkCurrentCircleArea[0],checkCurrentCircleArea[1], claimedCount);
					}
				}
				
				
			});
			
			// End stroke
			window.addEventListener("mouseup", function(e) {
				controller.confirmedMovement = false;
				controller.lockField.resetField();
				controller.showAllOnCanvas();
				claimedCount = 1;
			});
		});
	}
	
	showAllOnCanvas() {
		this.view.clearCanvas();
		this.view.showGrid(this.lockField.getField(), this.lockCircles.getCircleSize());
		this.view.showClaimedGrid(this.lockField.getField(), 9, this.lockCircles.getCircleSize());
		this.view.setClaimedDots(this.lockField.getField(), this.lockCircles.getCircleSize());
	}
}