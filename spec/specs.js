describe('Place', function() {
  it("creates a new Place you have visited", function() {
    var testContact = new Place("London","2010", "");
    expect(testContact.locations).to.equal("London");
    expect(testContact.year).to.equal("2010");
    expect(testContact.reason).to.equal("");
  });
});
