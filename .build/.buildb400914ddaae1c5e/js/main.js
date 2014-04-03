function init ()
{
    console.log("init() called");
    
    var all = {};
    all.touch = {};
    all.images = {};
    all.canvas = document.getElementById("canvas");
    all.context = all.canvas.getContext("2d");
    
    var images_uri = [
                  "images/tizen_32.png"
                  ];
    
    all.loadedFiles = 0; // nombre de fichiers chargés (img + audio)
    all.files2Load = images_uri.length; // nombre de fichiers à charger avant de lancer la boucle run
    
    all.activeScene = "menu";
    all.score = 0;
    all.nbJoke = 1;
    
    //canvas size setting
    all.canvas.width = document.width;
    all.canvas.height = document.height;

    //touch events handler
    all.canvas.addEventListener("touchstart", function (e) {
    	all.touch.id = "start";
    	all.touch.event = e.changedTouches[0];
    }, false);
    all.canvas.addEventListener("touchend", function (e) {
    	all.touch.id = "end";
    	all.touch.event = e.changedTouches[0];
    }, false);
    all.canvas.addEventListener("touchmove", function (e) {
    	all.touch.id = "move";
    	all.touch.event = e.changedTouches[0];
    }, false);

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
    
    // fonction pour compter les images et les sons et lancer l'init quand c'est bon
    all.isLoadedContent = function ()
    {
    	if (++all.loadedFiles >= all.files2Load)
    	{
    		run(all, 0); // on lance run ici
    	}
    }
    
    // fonction pour charger les images
    all.loadImage = function (imagesSrc)
    {
    	for (var i = imagesSrc.length; i--;)
    	{
	    	var img = imagesSrc[i].substring(imagesSrc[i].lastIndexOf('/') + 1, imagesSrc[i].lastIndexOf('.'));
	    	all.images[img] = new Image();
	    	all.images[img].src = imagesSrc[i];
	    	all.images[img].onload = all.isLoadedContent;
    	}
    }

    // fonction pour charger les sons
    all.loadAudio = function (sAudioSrc)
    {
    	var audio = new Audio();
    	audio.src = sAudioSrc;
    	audio.addEventListener("canplaythrough", all.isLoadedContent, false);
    	return audio;
    }
    
    // fonction pour detecter un click sur un bouton (tableau)
    all.isButtonClicked = function (xywh)
	{
		if ((!!all.touch.id && all.touch.event.pageX >= xywh[0] && all.touch.event.pageX < xywh[0] + xywh[2])
		&& (all.touch.event.pageY >= xywh[1] && all.touch.event.pageY < xywh[1] + xywh[3]))
		{
			return true;
		}	
		else
		{
			return false;
		}
	}
    
    all.loadImage(images_uri);
}

window.onload = init;
