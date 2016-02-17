describe('Features', function(){

  var plane;
  var airport;
  var weather;
  var capacity;

  beforeEach(function() {
    plane = new Plane();
    weather = new Weather();
    airport = new Airport(weather, capacity);
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
    spyOn(Math, 'random').and.returnValue(0.84);
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
    airport.hanger.push(plane);
    spyOn(Math, 'random').and.returnValue(0.86);
    expect(function() {plane.takeOff(airport);}).toThrowError("Weather is to stormy to take off");
    expect(airport.planes()).toContain(plane);
  });

// USER STORY FOUR
// As an air traffic controller
// To ensure safety
// I want to prevent landing when weather is stormy

  it('prevents landing when weather is stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.86);
    expect(function() {plane.land(airport);}).toThrowError("Weather is to stormy to land");
    expect(airport.planes()).not.toContain(plane);
  });

// USER STORY FIVE
// As an air traffic controller
// To ensure safety
// I want to prevent landing when the airport is full

  it('prevents landing when airport is full', function() {
    spyOn(Math, 'random').and.returnValue(0.84);
    for(p=1; p<=20; p++) {
      plane.land(airport);
    }
    expect(function() {plane.land(airport);}).toThrowError("Airport is to full to land");
    expect(airport.planes().length).toEqual(20);
  });

// USER STORY SIX
// As the system designer
// So that the software can be used for many different airports
// I would like a default airport capacity that can be overridden as appropriate

  it('capacity can be set on initialize', function() {
    spyOn(Math, 'random').and.returnValue(0.84);
    capacity = 1;
    airport = new Airport(weather, capacity);
    plane.land(airport);
    expect(function() {plane.land(airport);}).toThrowError("Airport is to full to land");
    expect(airport.planes().length).toEqual(1);
  });

});
