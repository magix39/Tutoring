
		var canvas = document.getElementById("gamezone");
		canvas.addEventListener('keydown', doKeyDown, true);

		canvas_context = canvas.getContext("2d");
		canvas_context.fillRect(100, 100, 50, 30);

		var x = 100;
		var y = 100;

		function doKeyDown(e){

			//====================
			//	THE W KEY
			//====================
			if (e.keyCode == 87) {
				clearCanvas();
				y = y - 10;
				canvas_context.fillRect(x, y, 50, 30);
			}

			//====================
			//	THE S KEY
			//====================
			if (e.keyCode == 83) {
				clearCanvas();
				y = y + 10;
				canvas_context.fillRect(x, y, 50, 30);
			}

			//====================
			//	THE A KEY
			//====================
			if (e.keyCode == 65) {
				clearCanvas();
				x = x - 10;
				canvas_context.fillRect(x, y, 50, 30);
			}

			//====================
			//	THE D KEY
			//====================
			if (e.keyCode == 68) {
				clearCanvas();
				x = x + 10;
				canvas_context.fillRect(x, y, 50, 30);
			}

		}

		function clearCanvas() {
			canvas.width = canvas.width;
		}