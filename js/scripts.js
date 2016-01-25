function Place (locations, year, reason) {
  this.locations = locations;
  this.year = year;
  this.reason = reason;
}
"You went to Paris in 2015 for fun"
Place.prototype.together = function() {
  return "You went to" + " " + this.locations + " "
 + "in" + " " + this.year + " " + "for" + " " + this.reason}
