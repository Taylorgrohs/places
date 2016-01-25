function Place (locations, year, reason) {
  this.locations = locations;
  this.year = year;
  this.reason = reason;
}
"You went to Paris in 2015 for fun"
Place.prototype.together = function() {
  return "You went to" + " " + this.locations + " "
 + "in" + " " + this.year + " " + "for" + " " + this.reason;
};

$(document).ready(function(){
  $("form#new-place").submit(function(event){
    var inputtedPlace = $("input#new-place").val();
    var inputtedYear = parseInt($("input#new-year").val());
    var inputtedReason = $("input#new-reason").val();
    var newPlace = new Place(inputtedPlace, inputtedYear, inputtedReason);

    $("ul#place").append("<li><span class='places'>" + newPlace.locations + "</span></li>");

    $("input#new-place").val("");
    $("input#new-year").val("");
    $("input#new-reason").val("");

    $(".places").last().click(function(){
      $("#show-place").show();
      $("#show-place h2").text("Info: ");
      $(".info").text(newPlace.together());
    });

    event.preventDefault();
  });
});
