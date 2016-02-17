describe('Airport', function(){

  var airport;
  var plane;
  var weather;
  var capacity;

  beforeEach(function() {
    weather = {
      isStormy: function() {}
    };
    airport = new Airport(weather, capacity);
  });

  describe('when weather is not stormy', function() {

    it('has no planes on creation', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for take off', function() {
      spyOn(weather, 'isStormy').and.returnValue(false);
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });

    it('responds to weather', function() {
      spyOn(weather, 'isStormy');
      expect(airport.weather).toBeDefined();
    });

  });

  describe('when weather is stormy', function() {

    it('throws error when #takeOff is called and #isStormy', function() {
      airport.clearForLanding(plane);
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() {airport.clearForTakeOff(plane);}).toThrowError("Weather is to stormy to take off");
    });

    it('throws error when #land is called and #isStormy', function() {
      spyOn(weather, 'isStormy').and.returnValue(true);
      expect(function() {airport.clearForLanding(plane);}).toThrowError("Weather is to stormy to land");
    });

  });

  describe('when full', function() {

    it('responds to #_isFull', function() {
      expect(airport._isFull()).toBe(false);
      for (i=1; i<=20; i++) {
        airport.clearForLanding(plane);
      }
      expect(airport._isFull()).toBe(true);
    });

    it('throws and error', function() {
      spyOn(airport, '_isFull').and.returnValue(true);
      expect(function() {airport.clearForLanding(plane);}).toThrowError("Airport is to full to land");
    });

  });

  describe('capacity', function() {

    it('can be set on initialize', function() {
      capacity = 0;
      airport = new Airport(weather, capacity);
      expect(airport._isFull()).toBe(true);
    });

  });

});
