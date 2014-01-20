function init ()
{
    console.log("init() called");
    
    var all = {};
    all.touch = {};
    all.canvas = document.getElementById("canvas");
    all.context = all.canvas.getContext("2d");
    
    all.loadedFiles = 0; // nombre de fichiers chargés (img + audio)
    all.files2Load = 0; // nombre de fichiers à charger avant de lancer la boucle run
    
    //canvas size setting
    all.canvas.width = document.width;
    all.canvas.height = document.height;

    //touch events handler
    all.canvas.addEventListener("touchstart", function (e) {
    	all.touch.id = "start";
    	all.touch.event = e;
    }, false);
    all.canvas.addEventListener("touchend", function (e) {
    	all.touch.id = "end";
    	all.touch.event = e;
    }, false);
    all.canvas.addEventListener("touchmove", function (e) {
    	all.touch.id = "move";
    	all.touch.event = e;
    }, false);

    // add eventListener for tizenhwkey
    document.addEventListener('tizenhwkey', function(e) {
        if(e.keyName == "back")
            tizen.application.getCurrentApplication().exit();
    });
    
  //fonction pour charger les images
    all.loadImage = function (sImageSrc)
    {
    	var img = new Image();
    	img.src = sImageSrc;
    	img.onload = all.isLoadedContent;
    	return img;
    }

    // fonction pour charger les sons
    all.loadAudio = function (sAudioSrc)
    {
    	var audio = new Audio();
    	audio.src = sAudioSrc;
    	audio.addEventListener("canplaythrough", all.isLoadedContent, false);
    	return audio;
    }

    // fonction pour compter les images et les sons et lancer l'init quand c'est bon
    all.isLoadedContent = function ()
    {
    	if (++all.loadedFiles >= all.files2Load)
    	{
    		all.run(all, 0); // on lance run ici
    	}
    }
}




window.onload = init;
