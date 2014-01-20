function menu_scene (all)
{
	//console.log("menu scene !");
	
	var buttons = [
				new Button(all, "amazeme", "Amaze Me !", "#fff", 20, "verdana", 5, 20, "#a50", 50, 50, 300, 100),
				new Button(all, "achiev", "Achievements", "#fff", 20, "verdana", 5, 20, "#a50", 50, 150, 300, 100)
			];
	
	for (var i= buttons.length; i--;)
	{
		buttons[i].fillRect();
		buttons[i].fillText();
	}
}
