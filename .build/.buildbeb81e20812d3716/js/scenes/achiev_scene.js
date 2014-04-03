function init_achiev_scene (all)
{
	/* --- BT --- */
	
	var alignX = 40;
	var originY = 10;
	var gapY = 140;
	var btWidth = 128;
	var btHeight = 128;
	
	all.buttons = [];
	//all, id, text, textColor, textSize, textFont, text_offsetX, text_offsetY, bgColor, x, y, w, h
	all.buttons.push(new Button(all, "menu", "retour", "#fff", 20, "Verdana", 30, 30, "#500", 100, 70, 100, 40));
	all.buttons.push(new Button(all, "meuh", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 1, btWidth, btHeight));
	all.buttons.push(new Button(all, "fartsim", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 2, btWidth, btHeight));
	all.buttons.push(new Button(all, "clown", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 3, btWidth, btHeight));
	all.buttons.push(new Button(all, "beer", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX+150, originY + gapY * 1, btWidth, btHeight));
	all.buttons.push(new Button(all, "ninja", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX+150, originY + gapY * 2, btWidth, btHeight));
	all.buttons.push(new Button(all, "light", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX+150, originY + gapY * 3, btWidth, btHeight));

	all.activeScene = "achiev";
}
function update_achiev_scene (all)
{
	/* --- BG --- */
	
	var gradient = all.context.createRadialGradient(all.canvas.width / 3, all.canvas.height / 3, all.canvas.width / 4,
					all.canvas.width / 2, all.canvas.height / 2, all.canvas.width);
	
	gradient.addColorStop(0, "#e83");
	gradient.addColorStop(1, "#950");
	
	all.context.fillStyle = gradient;
	all.context.fillRect(0, 0, all.canvas.width, all.canvas.height);
	
	/* --- TITRE --- */
	
	all.context.font = "small-caps bold 45px Verdana";
	all.context.fillStyle = "#fff";
	all.context.globalAlpha = 1;
	all.context.fillText("Achievements", 60, 30);
	
	
	/* --- BT --- */
	
/*	for (var i= all.buttons.length; i--;)
	{
		all.buttons[i].fillRect();
		all.buttons[i].fillText();
		
		if (all.buttons[i].isClicked(all))
		{
			eval("init_" + all.buttons[i].id + "_scene(all);");
		}
	}*/

	for (var i= all.buttons.length; i--;)
		{
			if (all.buttons[i].id != "menu")
			{
				all.buttons[i].drawImage(all.buttons[i].id + "Idle");
				if(all.isButtonClicked([all.buttons[i].x, all.buttons[i].y, all.buttons[i].w, all.buttons[i].h]))
				{
					all.buttons[i].drawImage(all.buttons[i].id + "Hit");
					var className = all.buttons[i].id[0].toUpperCase() + all.buttons[i].id.substring(1, all.buttons[i].id.length) + "_scene";	
				}
			}
			else
			{
				all.buttons[i].fillRect();
				all.buttons[i].fillText();
			}
			
			if (all.buttons[i].isClicked(all))
			{
				if(all.buttons[i].id != "menu")
				{
					all[all.buttons[i].id + "_scene"] = eval("new "+ className+ "(all)");
					break;
				}
					
				
				else
					eval("init_" + all.buttons[i].id + "_scene(all);");

			}
		}
}
