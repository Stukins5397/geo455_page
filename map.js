var mymap = L.map("map").setView([38.21678237054013, -109.91711430310424], 10);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3R1a2luczUzOTciLCJhIjoiY2xzM2VlaXMxMG1lazJsbTJyZHViMDh0eiJ9.54DqtCCMabhv1dPtqpRalA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);

L.marker([38.21678237054013, -109.91711430310424])
    .addTo(mymap)
    .bindPopup("<b>Hello!</b><br>I am Canyonlands National Park, Utah.")
    .openPopup();