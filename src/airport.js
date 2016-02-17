function Airport(weather) {
  this.hanger = [];
  this.weather = weather;
}

Airport.prototype.planes = function(){
  return this.hanger;
};

Airport.prototype.clearForLanding = function(plane) {
  if (this.weather.isStormy() === true) {
    throw new Error("Weather is to stormy to land");
  }
  else if (this._isFull() === true) {
    throw new Error("Airport is to full to land");
  }
  else {
    this.hanger.push(plane);
  }
};

Airport.prototype.clearForTakeOff = function(plane) {
  if (this.weather.isStormy() === true) {
    throw new Error("Weather is to stormy to take off");
  }
  else {
    this.hanger.splice(this.hanger.indexOf(plane), 1);
  }
};

Airport.prototype._isFull = function() {
  if (this.hanger.length >= 20) {
    return true;
  }
  else {
    return false;
  }
};

// Airport.prototype.checkWeather = function() {
//   return this.weather;
// };
