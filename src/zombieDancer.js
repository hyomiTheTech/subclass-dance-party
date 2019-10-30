var ZombieDancer = function(top, left, timeBetweenSteps) {
  this.$node = $(
    '<img id="zombie" src="https://media.giphy.com/media/LcUduIyV4ee2s/giphy.gif">'
  );
  Dancer.call(this, top, left, timeBetweenSteps);
};

ZombieDancer.prototype = Object.create(Dancer.prototype);
ZombieDancer.prototype.constructor = ZombieDancer;

ZombieDancer.prototype.step = function() {
  // Dancer.prototype.step.call(this);
  // toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
};

ZombieDancer.prototype.lineUp = function() {};
