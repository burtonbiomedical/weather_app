$(document).ready(function(){
  var location = {
    "lat": 0.0,
    "long": 0.0
  };
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      location["lat"] = position.coords.latitude;
      location["long"] = position.coords.longitude;
    });
  } else {
    
  }
});
