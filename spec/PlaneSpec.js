describe('Plane', function(){

  var plane;
  var airport;

  describe('responds to functions', function() {

    beforeEach(function(){
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding', 'clearForTakeOff']);
    });

    it('#clearForLanding', function(){
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });

    it('#clearForTakeOff', function() {
      plane.land(airport);
      plane.takeOff(airport);
      expect(airport.clearForTakeOff).toHaveBeenCalledWith(plane);
    });
  });
});
