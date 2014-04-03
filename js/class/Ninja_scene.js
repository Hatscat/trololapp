//class de la mini-app "ninja flex"
function Ninja_scene (all)
{
	all.buttons = [];
	//all, id, text, textColor, textSize, textFont, text_offsetX, text_offsetY, bgColor, x, y, w, h
	all.buttons.push(new Button(all, "menu", "retour", "#fff", 20, "Verdana", 30, 30, "#500", 100, 70, 100, 40));
	all.buttons.push(new Button(all, "meuh", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 1, btWidth, btHeight));
	all.buttons.push(new Button(all, "fartsim", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 2, btWidth, btHeight));
	all.buttons.push(new Button(all, "clown", "", "#fff", 20, "Verdana", 48, 30, "#640", alignX, originY + gapY * 3, btWidth, btHeight));
	
	this.fart1 = document.getElementById("fart1");
	this.fart1.currentTime = 0;
	this.fart1.volume=1;
	this.fart2 = document.getElementById("fart2");
	this.fart2.currentTime = 0;
	this.fart2.volume=1;
	
	all.activeScene = "ninja";
}
Ninja_scene.prototype.constructor = Ninja_scene;
Ninja_scene.prototype.update = function (all)
{
	var gradient = all.context.createRadialGradient(all.canvas.width / 3, all.canvas.height / 3, all.canvas.width / 4,
			all.canvas.width / 2, all.canvas.height / 2, all.canvas.width);

	gradient.addColorStop(0, "#e83");
	gradient.addColorStop(1, "#950");
	
	all.context.fillStyle = gradient;
	all.context.fillRect(0, 0, all.canvas.width, all.canvas.height);
	
	
	for (var i= all.buttons.length; i--;)
	{
		if (all.buttons[i].id != "menu")
		{
			all.buttons[i].drawImage(all.buttons[i].id + "Idle");
			if(all.isButtonClicked([all.buttons[i].x, all.buttons[i].y, all.buttons[i].w, all.buttons[i].h]))
			{
				all.buttons[i].drawImage(all.buttons[i].id + "Hit");
				this["fart" + parseInt(Math.floor(Math.random()*3)+1)].play();
				
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
				
			}
				
			
			else
				eval("init_" + all.buttons[i].id + "_scene(all);");

		}
	}
	
	/* --- TITRE --- */
	
	all.context.font = "small-caps bold 45px Verdana";
	all.context.fillStyle = "#fff";
	all.context.globalAlpha = 1;
	all.context.fillText("Achievements", 60, 30);
}
