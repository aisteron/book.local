var map;

function initMap() {
let initpoint = {lat: 53.723737, lng: 24.175376};

map = new google.maps.Map(document.querySelector('#map'), {
  zoom: 12,
  center: initpoint
});

};