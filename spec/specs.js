describe('Place', function() {
  it("creates a new Place you have visited", function() {
    var testPlace = new Place("London","2010", "");
    expect(testPlace.locations).to.equal("London");
    expect(testPlace.year).to.equal("2010");
    expect(testPlace.reason).to.equal("");
  });
  it("adds the together method to all Place", function() {
    var testPlace = new Place("Paris", 2015, "fun");
    expect(testPlace.together()).to.equal("You went to Paris in 2015 for fun")
  });
});
