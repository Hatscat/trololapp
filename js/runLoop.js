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

	switch (all.iActiveScene)
	{
		case all.MENU_SCENE:

		break;
		case all.OPTIONS_SCENE:
			
		break;
		case all.CONTROLS_SCENE:
			
		break;
		case all.HIGHSCORES_SCENE:
			
		break;
		case all.CREDITS_SCENE:
			
		break;
		case all.PLAY_SCENE:

		break;
		case all.PAUSE_SCENE:

		break;
	}
}
