describe('Airport', function(){

  var plane;
  var airport;

  beforeEach(function() {
    plane = new Plane();
    airport = new Airport();
  });


//         ______
//         _\____\___
// =  = ==(____MA____)
//           \_____\___________________,-~~~~~~~`-.._
//           /     o o o o o o o o o o o o o o o o  |\_
//           `~-.__       __..----..__                  )
//                 `---~~\___________/------------`````
//                 =  ===(_________)

// USER STORY ONE
// As an air traffic controller
// So I can get passengers to a destination
// I want to instruct a plane to land at an airport and confirm that it has landed

  it('knows to instruct a plane to land', function() {
    plane.land(airport);
    expect(airport.planes()).toContain(plane);
  });

// USER STORY TWO
// As an air traffic controller
// So I can get passengers on the way to their destination
// I want to instruct a plane to take off from an airport and confirm that it is no longer in the airport

  it('knows to instruct a plane to take off', function() {
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).toEqual([]);
  });
});
