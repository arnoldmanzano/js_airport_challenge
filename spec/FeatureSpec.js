describe('Airport', function(){

  var plane;
  var airport;
  var weather;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather);
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
    spyOn(Math, 'random').and.returnValue(0.84);
    plane.land(airport);
    plane.takeOff(airport);
    expect(airport.planes()).toEqual([]);
  });

  // USER STORY THREE
  // As an air traffic controller
  // To ensure safety
  // I want to prevent takeoff when weather is stormy

  it('prevents take off when weather is stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.86);
    plane.land(airport);
    // expect(plane.takeOff(airport)).toThrowError("Cannot takeoff in stormy weather");
    expect(function() {plane.takeOff(airport);}).toThrowError("Weather is to stormy to take off");
    expect(airport.planes()).toContain(plane);
  });
});
