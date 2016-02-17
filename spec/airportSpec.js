describe('Airport', function(){

  var airport;
  var plane;
  var weather;

    beforeEach(function(){
      airport = new Airport(weather);
      weather = jasmine.createSpyObj('weather', ['sunny']);
    });

    it('has no planes on creation', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for landing', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });

    it('can clear planes for take off', function() {
      airport.clearForLanding(plane);
      airport.clearForTakeOff(plane);
      expect(airport.planes()).toEqual([]);
    });

    it('responds to weather', function() {
      expect(airport.weather).toBeDefined();
    });

    it('knows when the weather is stormy', function() {
      expect(airport.weather.isStormy()).toBe(true);
    });
});
