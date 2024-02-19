var mymap = L.map("map").setView([39.29450317659978, -109.94171051031826], 6);
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1Ijoic3R1a2luczUzOTciLCJhIjoiY2xzM2VlaXMxMG1lazJsbTJyZHViMDh0eiJ9.54DqtCCMabhv1dPtqpRalA', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1
}).addTo(mymap);
var myIcon1 = L.icon({
    iconUrl: 'images/icon_1.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon2 = L.icon({
    iconUrl: 'images/icon_2.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon3 = L.icon({
    iconUrl: 'images/icon_3.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon4 = L.icon({
    iconUrl: 'images/icon_4.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon5 = L.icon({
    iconUrl: 'images/icon_5.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon6 = L.icon({
    iconUrl: 'images/icon_6.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon7 = L.icon({
    iconUrl: 'images/icon_7.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon8 = L.icon({
    iconUrl: 'images/icon_8.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon9 = L.icon({
    iconUrl: 'images/icon_9.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon10 = L.icon({
    iconUrl: 'images/icon_10.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon11 = L.icon({
    iconUrl: 'images/icon_11.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon12 = L.icon({
    iconUrl: 'images/icon_12.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon13 = L.icon({
    iconUrl: 'images/icon_13.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon14 = L.icon({
    iconUrl: 'images/icon_14.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon15 = L.icon({
    iconUrl: 'images/icon_15.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var myIcon16 = L.icon({
    iconUrl: 'images/icon_16.png',
    iconSize: [30, 30],
    iconAnchor: [0, 0],
    popupAnchor: [15,10],
});
var badlands = L.marker([43.82387362238498, -102.36237878889602], {icon: myIcon1}).bindPopup("<b>Badlands").addTo(mymap);
var yellowstone = L.marker([44.33647886794053, -110.60863239134693], {icon: myIcon2}).bindPopup("<b>Yellowstone").addTo(mymap);
var teton = L.marker([43.7680955256216, -110.69587298270477], {icon: myIcon3}).bindPopup("<b>Grand Teton").addTo(mymap);
var cotm = L.marker([43.397310299852414, -113.54735062341149], {icon: myIcon4}).bindPopup("<b>Craters of the Moon").addTo(mymap);
var craterlake = L.marker([42.95382088643358, -122.14487181514973], {icon: myIcon5}).bindPopup("<b>Crater Lake").addTo(mymap);
var redwood = L.marker([41.396602869633284, -124.02431550126578], {icon: myIcon6}).bindPopup("<b>Redwood").addTo(mymap);
var sanfran = L.marker([37.70638335951964, -122.45480749781022], {icon: myIcon7}).bindPopup("<b>San Francisco").addTo(mymap);
var sandiego = L.marker([32.755183209897815, -117.17151850587942], {icon: myIcon8}).bindPopup("<b>San Diego").addTo(mymap);
var grandcanyon = L.marker([36.30009964107, -112.41351562400057], {icon: myIcon9}).bindPopup("<b>Grand Canyon").addTo(mymap);
var zion = L.marker([37.2689135054497, -113.01375631125323], {icon: myIcon10}).bindPopup("<b>Zion").addTo(mymap);
var bryce = L.marker([37.58644470586105, -112.18938651799425], {icon: myIcon11}).bindPopup("<b>Bryce Canyon").addTo(mymap);
var escalante = L.marker([37.45850826670482, -111.6093406708336], {icon: myIcon12}).bindPopup("<b>Grand Staircase-Escalante").addTo(mymap);
var capitolreef = L.marker([38.08310277716724, -111.14807520947221], {icon: myIcon13}).bindPopup("<b>Capitol Reef").addTo(mymap);
var canyonlands = L.marker([38.206051777189046, -109.90198202315855], {icon: myIcon14}).bindPopup("<b>Canyonlands").addTo(mymap);
var arches = L.marker([38.7162339349443, -109.5840825813654], {icon: myIcon15}).bindPopup("<b>Arches").addTo(mymap);
var dillon = L.marker([39.628006393654154, -106.04349839849111], {icon: myIcon16}).bindPopup("<b>Dillon").addTo(mymap);