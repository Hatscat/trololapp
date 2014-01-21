function init_amazeme_scene (all)
{
	randFunc[Math.random() * randFunc.length | 0](all);
	// et non, pas de feedback visuel ;)
	all.activeScene = "menu";
}

var randFunc = [

	function joke_0 (all) // rien
	{
		console.log("rien!");
	},

	function joke_1 (all) // random alarm
	{
		//console.log("random alarm function");

		var date = "2014 01 23";
		var period = "10 10";
		var alarm = new tizen.AlarmRelative(date, period);
		tizen.alarm.add(alarm, "org.tizen.browser");
		console.log("Alarm added with id: " + alarm.id);
	}
];
	