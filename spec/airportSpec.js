describe('Airport', function() {

  var Airport;

    beforeEach(function() {
      airport = new Airport();
    });

    it('has no planes on creation', function() {
      expect(airport.planes()).toEqual([]);
    });
});
