(function() {
    var lastTime = 0;
    var vendors = ['ms', 'moz', 'webkit', 'o'];
    for(var x = 0; x < vendors.length && !window.requestAnimationFrame; ++x) {
        window.requestAnimationFrame = window[vendors[x]+'RequestAnimationFrame'];
        window.cancelAnimationFrame = window[vendors[x]+'CancelAnimationFrame'] 
                                   || window[vendors[x]+'CancelRequestAnimationFrame'];
    }
 
    if (!window.requestAnimationFrame)
        window.requestAnimationFrame = function(callback, element) {
            var currTime = new Date().getTime();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = window.setTimeout(function() { callback(currTime + timeToCall); }, 
              timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
 
    if (!window.cancelAnimationFrame)
        window.cancelAnimationFrame = function(id) {
            clearTimeout(id);
        };
}());


function run (all, timestamp)
{
	requestAnimationFrame(function(timestamp){run(all, timestamp)});

	var timeSinceLastFrame = timestamp - all.iOldTimestamp;
	all.iOldTimestamp = timestamp;
	all.iDeltaTime = timeSinceLastFrame * 60 / 1000; // 60 fps

/* **************************************************** */
/* ****************** States Machine ****************** */
/* **************************************************** */

	switch (all.activeScene)
	{
		case "menu":
			update_menu_scene(all);
		break;
		// case "amazeme": // juste un init, pas de "run()"
		// 	update_amazeme_scene(all);
		// break;
		case "achiev":
			update_achiev_scene(all);
		break;
		case "credits":
			update_credits_scene(all);
		break;
		case "exit":
			tizen.application.getCurrentApplication().exit();
		break;
		case "meuh":
			all.meuh_scene.update(all);
		break;
		case "fartsim":
			all.fartsim_scene.update(all);
		break;
		case "clown":
			all.clown_scene.update(all);
		break;
		case "beer":
			all.beer_scene.update(all);
		break;
		case "ninja":
			all.ninja_scene.update(all);
		break;
		case "light":
			all.light_scene.update(all);
		break;
	}
}
