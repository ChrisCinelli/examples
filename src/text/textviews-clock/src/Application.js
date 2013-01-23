//# Text View Clock <a title="View raw file" href="https://raw.github.com/gameclosure/addon-examples/master/src/text/textviews-clock/src/Application.js"><img src="../../include/download_icon.png" class="icon"></a>
//Here we will create a completely working clock using Text Views!
//Different positioning and scaling options are presented in this example
//as well as how to update text views dynamically after creation.

import device;
import ui.TextView as TextView;

exports = Class(GC.Application, function () {
	this.initUI = function () {
		//Create the header bar.
		var title = new TextView({
			superview: this.view,
			autoFontSize: true,
			x: 0,
			y: 20,
			height: device.height * .10,
			width: this.view.style.width,
			size: device.height * .10,
			zIndex: 1,
			text: "Text View Clock",
			color: '#888888',
			backgroundColor: 'white',
			outlineColor: 'black',
			verticalPadding: 5,
			horizontalPadding: 20
		});

		// Create a TextView to hold the date
		var dateTextView = new TextView({
			superview: this.view,
			autoFontSize: true,
			x: 0,
			y: title.style.y + title.style.height + device.height * .05,
			height: device.height * .25,
			width: this.view.style.width,
			size: device.height * .125,
			zIndex: 1,
			wrap: true,
			text: "Date\n",
			color: '#FF8888',
			backgroundColor: '#DDDDDD',
			outlineColor: 'black',
			verticalPadding: 5,
			horizontalPadding: 20
		});

		// Create a TextView to hold the time
		var timeTextView = new TextView({
			superview: this.view,
			autoFontSize: true,
			x: 0,
			y: dateTextView.style.y + dateTextView.style.height + 40,
			height: device.height * .3,
			width: this.view.style.width,
			size: device.height * .15,
			zIndex: 1,
			wrap: true,
			text: "Time\n",
			color: '#4488FF',
			outlineColor: 'white',
			verticalPadding: 5,
			horizontalPadding: 20
		});

		// Check what the date / time it is every half second, and 
		// adjust date and time appropriately within the text views.
		// Make sure we don't miss a second!
		setInterval(bind(this, function() {
			var date = new Date();
			dateTextView.setText("Date\n" + date.toLocaleDateString().replace(/\//g, ' / '));
			timeTextView.setText("Time\n" + date.toLocaleTimeString());
		}, 500));
	}
});

//Place this in the `Application.js` file of your project and you should see something like the following screenshot.
//<img src="./doc/screenshot1.png" alt="many textviews screenshot" class="screenshot">