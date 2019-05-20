(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();

    var mymap = L.map('mapid').setView([48.688, 6.187], 14.5);
    L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicmFhbGtlbnpvIiwiYSI6ImNqdndkOHl1dTN5Z3A0Ym1neWNmbTNweWsifQ.d2tQXU8qwaNFzokYLyAZGA'
    }).addTo(mymap);

    var marker = L.marker([48.688, 6.187]).addTo(mymap);
    marker.bindPopup("<b>Au chat-lait</b><br>XX Rue Saint Nicolas NANCY").openPopup();


  }); // end of document ready
})(jQuery); // end of jQuery name space
