(function($){

  $(document).ready(function(){
    $('.modal').modal();
    $('.datepicker').datepicker();
    
    $('.carousel').carousel(
    {
      dist: 0,
      padding: 0,
      fullWidth: true,
      indicators: true,
      duration: 100,
    }
    );
    autoplay()   
  function autoplay() {
      $('.carousel').carousel('next');
      setTimeout(autoplay, 4500);
  }
  });
  
  

  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    var mymap = L.map('mapid').setView([48.688, 6.187], 14.5);
    L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
      attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: 'pk.eyJ1IjoicmFhbGtlbnpvIiwiYSI6ImNqdndkOHl1dTN5Z3A0Ym1neWNmbTNweWsifQ.d2tQXU8qwaNFzokYLyAZGA'
    }).addTo(mymap);

    var redIcon = new L.Icon({
      iconUrl: 'https://cdn.rawgit.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
      shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowSize: [41, 41]
    });

    var marker = L.marker([48.688, 6.187],{icon: redIcon}).addTo(mymap);
    
    var markerP1 = L.marker([48.6898, 6.182]).addTo(mymap);
    
    var markerP2 = L.marker([48.6897, 6.189]).addTo(mymap);


    marker.bindPopup("<b>Au chat-lait</b><br>XX Rue Saint Nicolas NANCY").openPopup();
    markerP2.bindPopup("<b>Parking 2</b><br>Ecole XXX").openPopup();

    markerP1.bindPopup("<b>Parking 1</b><br>Charles III").openPopup();
          


  }); // end of document ready
})(jQuery); // end of jQuery name space
