describe('Plane', function() {

  var plane;

  describe('responds to functions', function() {

    beforeEach(function() {
      plane = new Plane();
    });

    it('#land', function() {
      expect(plane.land).not.toBeUndefined();
    });
  });
});
