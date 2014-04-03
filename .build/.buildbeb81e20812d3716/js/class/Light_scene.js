//class de la mini-app "lampe torche"
function Light_scene (all)
{
	all.activeScene = "clown";
}
Light_scene.prototype.constructor = Light_scene;
Light_scene.prototype.update = function (all)
{
	console.log("light");
}
