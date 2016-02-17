describe('Weather', function() {

  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

  it('responds to #isStormy', function() {
    expect(weather.isStormy).toBeDefined();
  });

  it('can be stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.86);
    expect(weather.isStormy()).toBe(true);
  });

  it('can be not stormy', function() {
    spyOn(Math, 'random').and.returnValue(0.84);
    expect(weather.isStormy()).toBe(false);
  });
});
