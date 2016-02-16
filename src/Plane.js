// var Plane = function() {};
function Plane(){}
Plane.prototype.land = function(airport){
  airport.clearForLanding(this);
};
