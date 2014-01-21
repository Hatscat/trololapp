function menu_scene (all)
{
	/* --- BG --- */
	var gradient = all.context.createRadialGradient(all.canvas.width / 3, all.canvas.height / 3, all.canvas.width / 5,
					all.canvas.width / 2, all.canvas.height / 2, all.canvas.width);
	
	gradient.addColorStop(0, "#045");
	gradient.addColorStop(1, "#028");
	
	all.context.fillStyle = gradient;
	all.context.fillRect(0, 0, all.canvas.width, all.canvas.height);
	
	/* --- BT --- */
	var buttons = [
				new Button(all, "amazeme", "Amaze Me !", "#fff", 20, "verdana", 40, 30, "#a30", 50, 50, 200, 50),
				new Button(all, "achiev", "Achievements", "#fff", 20, "verdana", 40, 30, "#a30", 50, 200, 200, 50)
			];
	
	for (var i= buttons.length; i--;)
	{
		buttons[i].fillRect();
		buttons[i].fillText();
		
		if (buttons[i].isClicked(all))
		{
			console.log(buttons[i].id)
			all.activeScene = buttons[i].id;
		}
	}
	
	
	
}
