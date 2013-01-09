//# Playing effects <a title="View raw file" href="https://raw.github.com/gameclosure/addon-examples/master/src/sound/effect/src/Application.js"><img src="../../include/download_icon.png" class="icon"></a>
//This example shows how to play different sound effects.
//You can click on one of the views to play an effect

import device;
import AudioManager;
import ui.View as View;

//## Class: Application
//Create an application and set the default settings.
exports = Class(GC.Application, function () {

	this._settings = {
		logsEnabled: window.DEV_MODE,
		showFPS: window.DEV_MODE,
		clearEachFrame: true,
		alwaysRepaint: true,
		preload: []
	};

	this.initUI = function () {
		this._sound = new AudioManager({
			path: 'resources/audio/',
			// Load three sound effects:
			//    "resources/audio/sound1.mp3"
			//    "resources/audio/sound2.mp3"
			//    "resources/audio/sound3.mp3"
			// or:
			//    "resources/audio/sound1.ogg"
			//    "resources/audio/sound2.ogg"
			//    "resources/audio/sound3.ogg"
			files: {
				sound1: {
					volume: 0.8
				},
				sound2: {
					volume: 0.8
				},
				sound3: {
					volume: 0.8
				}
			}
		});

		// Create three views, click on them the hear an effect play...
		var w = device.width / 3,
				colors = ["#FF0000", "#00FF00", "#0000FF"];
		
		for (var i = 0; i < 3; i++) {
			var soundview = new SoundView({
				superview: this.view,
				x: i * w + 10,
				y: 10,
				width: w - 20,
				height: 100,
				sound: this._sound,
				index: "sound" + (i + 1),
				backgroundColor: colors[i]
			})
		}
	};

	this.launchUI = function () {};
});

//## Class: SoundView
var SoundView = Class(View, function(supr) {
	this.init = function(opts) {
		supr(this, "init", [opts]);

		this._sound = opts.sound;
		this._index = opts.index;
	};

	this.onInputSelect = function() {
		this._sound.play(this._index);
	};
});
