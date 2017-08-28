$(document).ready(function() {
  $("#try").on("click", function() {
    // prevent any default events from happening without ajax
    event.preventDefault();
    console.log("yep");



    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        x.innerHTML = "Geolocation is not supported by this browser.";
    }

  })
})

// non jquery 
function showPosition(position) {
  var x = document.getElementById("location");
  x.innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
}
