// class de la mini-app "coussin peteur"
function Fartsim_scene (all)
{
	all.activeScene = "fartsim";

	all.context.drawImage(all.images.fartIconIdle, 0, 0, all.canvas.width, all.canvas.height);
	all.buttons = [];
	//all, id, text, textColor, textSize, textFont, text_offsetX, text_offsetY, bgColor, x, y, w, h
	all.buttons.push(new Button(all, "menu", "retour", "#fff", 20, "Verdana", 30, 30, "#500", 100, 70, 100, 40));
	all.context.font = "small-caps bold 45px Verdana";
	all.context.fillStyle = "#fff";
	all.context.globalAlpha = 1;
	all.context.fillText("FART SIM", 60, 30);
	
	this.fart1 = document.getElementById("fart1");
	this.fart1.currentTime = 0;
	this.fart1.volume=1;
	this.fart2 = document.getElementById("fart2");
	this.fart2.currentTime = 0;
	this.fart2.volume=1;
	this.fart3 = document.getElementById("fart3");
	this.fart3.currentTime = 0;
	this.fart3.volume=1;
	this.fart4 = document.getElementById("fart4");
	this.fart4.currentTime = 0;
	this.fart4.volume=1;
	

	
	var audioElem = document.getElementById("audio_re");
	all.bas = true;
}
Fartsim_scene.prototype.constructor = Fartsim_scene;
Fartsim_scene.prototype.update = function (all)
{
	for (var i= all.buttons.length; i--;)
	{
		all.buttons[i].fillRect();
		all.buttons[i].fillText();
		
		if (all.buttons[i].isClicked(all))
				eval("init_" + all.buttons[i].id + "_scene(all);");
		
		else if(all.isButtonClicked([0,0, all.canvas.width, all.canvas.height]))
		{
			all.context.drawImage(all.images.fartIconHit, 0, 0, all.canvas.width, all.canvas.height);
			this["fart" + parseInt(Math.floor(Math.random()*3)+1)].play();
			
			if (!!all.touch.id && all.touch.id == "end")
				all.touch = {};
		}
		
		else
			all.context.drawImage(all.images.fartIconIdle, 0, 0, all.canvas.width, all.canvas.height);

	}
	
	
}
