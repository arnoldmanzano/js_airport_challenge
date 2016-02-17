function Airport(weather) {
  this.hanger = [];
  this.weather = weather;
}

Airport.prototype.planes = function(){
  return this.hanger;
};

Airport.prototype.clearForLanding = function(plane) {
  this.hanger.push(plane);
};

Airport.prototype.clearForTakeOff = function(plane) {
  this.hanger.splice(this.hanger.indexOf(plane), 1);
};

// Airport.prototype.checkWeather = function() {
//   return this.weather;
// };
