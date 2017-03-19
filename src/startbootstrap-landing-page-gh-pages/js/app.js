$(document).ready(function() {
    fetchData();
 });

function fetchData() {
    console.log(1);

    var tempLocation = new google.maps.LatLng(-33.8665433,151.1956316);

    var request = {
    location: tempLocation,
    radius: '500',
    types: ['food']
  };

  var service = new google.maps.places.PlacesService(document.createElement('div'));
  service.nearbySearch(request, function(results, status){
  	for (var i = 0; i < results.length; i++) {
      //console.log(results[i]);

      service.getDetails({placeId: results[i].place_id}, function(place, status) {
      	if (status === google.maps.places.PlacesServiceStatus.OK) {
      		console.log(place);
      		/*for (var k = 0; k < 7; k++) {
      			console.log(place.name, place.opening_hours.weekday_text[k]);
      			console.log("ZZZ");
      		}*/
      	}
      })
    }
  });

}


