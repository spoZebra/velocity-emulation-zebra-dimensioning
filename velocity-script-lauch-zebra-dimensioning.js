
Logger.debug("ZEBRA Dimensioning - Launch");

//Create the values that will be passed to the action.
var actionName = "com.spozebra.zebradimensioningactivityforresult.MainActivity";

//Use either action, class and package, or both. Define extras with a name, value, and type.
//var intent = { action: actionName, extras: [ ] };
var intent = {
	action: 'android.intent.action.MAIN',
	package: "com.spozebra.zebradimensioningactivityforresult",
	class: "com.spozebra.zebradimensioningactivityforresult.MainActivity",
};
//Launch the action and mark the input as handled.
Action.launchForResult(intent, function (intent) {
	Logger.debug("Intent = " + JSON.stringify(intent));
	if (intent.result == -1) {
		var length = 0;
		var width = 0;
		var height = 0;

		var extras = intent.extras
		for (pos in extras) {
			Logger.debug("Extra = " + JSON.stringify(extras[pos]));
			if (extras[pos].name == "length") {
				length = extras[pos].value;
			}
			else if (extras[pos].name == "width") {
				width = extras[pos].value;
			}
			else if (extras[pos].name == "height") {
				height = extras[pos].value;
			}
		}
		Logger.debug("ZEBRA Dimensioning - Launch - Script Success");
		var volume = length * width * height;
		Device.sendKeys(volume);
	}
});

Logger.debug("ZEBRA Dimensioning - Launch Ended");

