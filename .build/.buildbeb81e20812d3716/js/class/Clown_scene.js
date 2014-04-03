//class de la mini-app "click le clown"
function Clown_scene (all)
{
	all.activeScene = "clown";
}
Clown_scene.prototype.constructor = Clown_scene;
Clown_scene.prototype.update = function (all)
{
	console.log("clown");
}
