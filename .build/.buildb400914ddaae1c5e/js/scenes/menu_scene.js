function menu_scene (all)
{
	/* --- BG --- */
	
	var gradient = all.context.createRadialGradient(all.canvas.width / 3, all.canvas.height / 3, all.canvas.width / 4,
					all.canvas.width / 2, all.canvas.height / 2, all.canvas.width);
	
	gradient.addColorStop(0, "#045");
	gradient.addColorStop(1, "#015");
	
	all.context.fillStyle = gradient;
	all.context.fillRect(0, 0, all.canvas.width, all.canvas.height);
	
	/* --- TITRE --- */
	
	all.context.font = "small-caps bold 60px Verdana";
	all.context.fillStyle = "#fff";
	all.context.globalAlpha = 1;
	all.context.fillText("Trololapp", 50, 100);
	
	/* --- BT --- */
	
	var alignX = 75;
	var originY = 180;
	var gapY = 100;
	var btWidth = 200;
	var btHeight = 50;
	
	var buttons = [
				new Button(all, "amazeme", "Amaze Me !", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 0, btWidth, btHeight),
				new Button(all, "achiev", "Achievements", "#fff", 20, "Verdana", 38, 30, "#460", alignX, originY + gapY * 1, btWidth, btHeight),
				new Button(all, "credits", "Credits", "#fff", 20, "Verdana", 68, 30, "#064", alignX, originY + gapY * 2, btWidth, btHeight),
				new Button(all, "exit", "Exit", "#fff", 20, "Verdana", 85, 30, "#440", alignX, originY + gapY * 3, btWidth, btHeight)
			];
	
	for (var i= buttons.length; i--;)
	{
		buttons[i].fillRect();
		buttons[i].fillText();
		
		if (buttons[i].isClicked(all))
		{
			all.activeScene = buttons[i].id;
		}
	}
	
	
	
}
