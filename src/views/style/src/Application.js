//## Modify a View's Style
//Create many views with random positions, sizes, rotations, and colors.

//Import ui.View class.
import ui.View as View;

//## Class: Application
exports = Class(GC.Application, function () {
  this.initUI = function () {
    //Create 200 views
    for (var i = 0; i < 200; i++) {
			//Randomize the size, shape, position, and color of each View.
      var view = new View({
        superview: this.view,
        x: Math.random() * device.width - 50,
        y: Math.random() * device.height - 50,
        width: Math.random() * 50,
        height: Math.random() * 50,
        r: Math.random() * (Math.PI * 2),
        backgroundColor: getRandomColor()
      });
    }
  };
});

//Generate a random color string in hexadecimal format.
function getRandomColor () {
	return '#' + ('000000' + Math.floor(Math.random() * 0xFFFFFF).toString(16)).substr(-6);
}

//<img src="./doc/screenshot1.png" alt="view style screenshot" class="screenshot">
