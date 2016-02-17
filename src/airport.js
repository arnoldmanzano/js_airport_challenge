function Airport(){

  this.hanger = [];

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
