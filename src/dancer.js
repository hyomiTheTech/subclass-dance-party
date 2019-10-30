// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {
  this.time = timeBetweenSteps;
  // use jQuery to create an HTML <span> tag
  // this.step = this.step.bind(this); // what do we do with this? changed 'dancer' to 'this'
  this.step();
  this.setPosition(top, left);
};

Dancer.prototype.step = function() {
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  setTimeout(this.step.bind(this), this.time); // changed 'dancer' to 'this'
};

Dancer.prototype.setPosition = function(top, left) {
  // Use css top and left properties to position our <span> tag
  // where it belongs on the page. See http://api.jquery.com/css/
  //
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings); // changed 'dancer' to 'this' before .$node
};

// now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
// this one sets the position to some random default point within the body
