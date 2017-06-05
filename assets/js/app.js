
function initMap() {
        var uluru = {lat: 19.4177453, lng: -99.1671662}; 
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
        var marker = new google.maps.Marker({
          position: uluru,
          map: map
        });
      }

$(document).ready(initMap);
