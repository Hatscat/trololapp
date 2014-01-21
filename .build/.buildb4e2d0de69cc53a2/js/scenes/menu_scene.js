function init_menu_scene (all)
{
	/* --- BT --- */
	
	var alignX = all.canvas.width / 2;
	var originY = 170;
	var gapY = 70;
	var btWidth = 320;
	var btHeight = 90;
	
	var btIdTextAndColor = ["amazeme", "Amaze Me !", "#640", "achiev", "Achievements", "#460", "credits", "Credits", "#064", "exit", "Exit", "#440"];
	
	all.buttons = [];
	
	for (var i = 0, c = btIdTextAndColor.length; i < c; i += 3)
	{
		var textHeight = 32-i;
		all.context.font = textHeight + "px Verdana";
		var textWidth = all.context.measureText(btIdTextAndColor[i+1]).width;
		var btW = btWidth * ((btIdTextAndColor.length - i) / btIdTextAndColor.length);
		var btH = btHeight * ((btIdTextAndColor.length - i/1.5) / btIdTextAndColor.length);
		
		all.buttons.push(new Button(all, btIdTextAndColor[i], btIdTextAndColor[i+1], "#fff", textHeight, "Verdana",
				btW / 2 - textWidth / 2, btH / 2 + textHeight / 4, btIdTextAndColor[i+2], alignX - btW / 2, originY + (btH + gapY) * (i/3), btW, btH));
	}

	all.activeScene = "menu";
}

function update_menu_scene (all)
{
	/* --- BG --- */
	
	var gradient = all.context.createRadialGradient(all.canvas.width / 3, all.canvas.height / 3, all.canvas.width / 4,
					all.canvas.width / 2, all.canvas.height / 2, all.canvas.width);
	
	gradient.addColorStop(0, "#145");
	gradient.addColorStop(1, "#015");
	
	all.context.fillStyle = gradient;
	all.context.fillRect(0, 0, all.canvas.width, all.canvas.height);
	
	/* --- TITRE --- */
	
	all.context.font = "small-caps bold 60px Verdana";
	all.context.fillStyle = "#fff";
	all.context.globalAlpha = 1;
	all.context.fillText("Trololapp", all.canvas.width / 2 - all.context.measureText("Trololapp").width / 2, 100);

	/* --- BT --- */

	for (var i = all.buttons.length; i--;)
	{
		all.buttons[i].fillRect();
		all.buttons[i].fillText();
		
		if (all.buttons[i].isClicked(all))
		{
			eval("init_" + all.buttons[i].id + "_scene(all);");
		}
	}
}
