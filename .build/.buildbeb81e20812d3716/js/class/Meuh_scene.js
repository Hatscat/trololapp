// class de la mini-app "boite à meuh"
function Meuh_scene (all)
{
	all.activeScene = "meuh";
	all.context.drawImage(all.images.boite, 0, 0, all.canvas.width, all.canvas.height);
	all.buttons = [];
	//all, id, text, textColor, textSize, textFont, text_offsetX, text_offsetY, bgColor, x, y, w, h
	all.buttons.push(new Button(all, "menu", "retour", "#fff", 20, "Verdana", 30, 30, "#500", 100, 70, 100, 40));
	all.context.font = "small-caps bold 45px Verdana";
	all.context.fillStyle = "#fff";
	all.context.globalAlpha = 1;
	all.context.fillText("MEEEUUH", 60, 30);
	
	all.bas = true;

    window.addEventListener("deviceorientation", function(e) {
    	playSoundHandler(e);
    }, true);

    



}
Meuh_scene.prototype.constructor = Meuh_scene;
Meuh_scene.prototype.update = function (all)
{
	for (var i= all.buttons.length; i--;)
	{
		all.buttons[i].fillRect();
		all.buttons[i].fillText();
		
		if (all.buttons[i].isClicked(all))
				eval("init_" + all.buttons[i].id + "_scene(all);");

	}
}


function playSoundHandler(e) 
{
        if( ( (e.gamma <  180 && e.gamma > 130) || (e.gamma <  -180 && e.gamma > -130) || (e.beta <  180 && e.beta > 130) || (e.beta <  -180 && e.beta > -130) ) && bas == true)
        {
        		bas = false;
        		var audioElem = document.getElementById("meuh");
                audioElem.currentTime = 0;
                audioElem.volume=1;
                audioElem.play();
        }
        
        else if( ( (e.gamma <  30  && e.gamma > -30) || (e.gamma <  360 && e.gamma > 350) || (e.beta <  30 && e.beta > -30) || (e.beta <  360 && e.beta > 350) ) && bas == false)
        {
        		bas = true;
        		var audioElem = document.getElementById("meuh");
                audioElem.currentTime = 0;
                audioElem.volume=1;
                audioElem.play();
        }
}