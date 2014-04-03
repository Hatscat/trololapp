function init_amazeme_scene (all)
{
	randFunc[Math.random() * randFunc.length | 0](all);
	all.score++;
	console.log("score : " + all.score);
	// et non, pas de feedback visuel ;)
	all.activeScene = "menu";
}

var randFunc = [

	function nothing (all) // rien
	{
		console.log("rien!");
	},
	function alarm (all) // random alarm
	{
		var a = new tizen.AlarmRelative(Math.random() * 200 | 0 );
		tizen.alarm.add(a, "org.tizen.browser");
		console.log("Alarm added with id: " + a.id);
	},
	function vibrate (all) // vibreur
	{
		console.log("vibreur");
		navigator.vibrate([200, 100, 200, 100, 1000, 500, 2000, 1500, 3000]);
	},
	function picture (all) // photo
	{
		function successCb ()
		{
			console.log("picture ok");
		}
		function errorCb ()
		{
			console.log("picture ko");
		}
		function appControlReplyCb (e)
		{
			console.log("picture : " + e);
		}
		
		var appControl = new tizen.ApplicationControl(
				"http://tizen.org/appcontrol/opperation/create_content",
				null,
				"image/jpg");
		
		tizen.application.launchAppControl(appControl, null, successCb, errorCb, appControlReplyCb);
	},
	function contact (all) // duplication de contact
	{
		function addressBookCb (addressBookArray)
		{
			console.log("contact ok");
			var randContact = addressBookArray[Math.random() * addressBookArray.length | 0];
			randContact.name = new tizen.ContactName({firstName: "Ninja", lastName: "Flex"});
			addressBookArray.add(randContact);
		}
		function errorCb ()
		{
			console.log("address reading ko");
		}
		
		tizen.contact.getAddressBooks(addressBookCb, errorCb);
	},
	function video (all) // lancement d'une junk video
	{
		console.log("video ok");
		
		var video = document.createElement("iframe");
		video.width = all.canvas.width;
		video.height = all.canvas.height;
		video.src = "http://www.youtube.com/embed/Sm368W0OsHo";
		document.body.appendChild(video);
	}
	
];
	