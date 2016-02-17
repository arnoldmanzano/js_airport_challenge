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
  if (this.weather.isStormy() === true) {
    throw new Error("Weather is to stormy to take off");
  } else {
      this.hanger.splice(this.hanger.indexOf(plane), 1);
    }
};

// Airport.prototype.checkWeather = function() {
//   return this.weather;
// };
