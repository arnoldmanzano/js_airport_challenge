describe('Plane', function(){

  var plane;
  var airport;

  // describe('responds to functions', function() {

    beforeEach(function(){
      plane = new Plane();
      airport = jasmine.createSpyObj('airport',['clearForLanding']);
    });

    it('can land at an airport', function(){
      plane.land(airport);
      expect(airport.clearForLanding).toHaveBeenCalledWith(plane);
    });
  // });
});
