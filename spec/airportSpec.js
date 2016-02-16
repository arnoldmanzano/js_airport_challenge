describe('Airport', function(){

  var airport;

    beforeEach(function(){
      airport = new Airport();
    });

    it('has no planes on creation', function(){
      expect(airport.planes()).toEqual([]);
    });

    it('can clear planes for landind', function(){
      airport.clearForLanding(plane);
      expect(airport.planes()).toEqual([plane]);
    });
    
});
