// I want to instruct a plane to land at an airport and confirm that it has landed

describe('Airport', function(){

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });

  it('knows to instruct a plane to land', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

});
