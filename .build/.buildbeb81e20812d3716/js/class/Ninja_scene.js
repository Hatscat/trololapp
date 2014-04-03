//class de la mini-app "ninja flex"
function Ninja_scene (all)
{
	all.activeScene = "ninja";
}
Ninja_scene.prototype.constructor = Ninja_scene;
Ninja_scene.prototype.update = function (all)
{
	console.log("ninja");
}
