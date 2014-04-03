//class de la mini-app "verre à bière"
function Beer_scene (all)
{
	all.activeScene = "beer";
}
Beer_scene.prototype.constructor = Beer_scene;
Beer_scene.prototype.update = function (all)
{
	console.log("beer");
}
