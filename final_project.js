 
let mymap = L.map("map", {zoomControl: false}).setView([30, 0], 2);
        

var streets = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 2,
    maxZoom: 19
}).addTo(mymap);
        
        
var grayscale = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/light-v9',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 2,
    maxZoom: 19
}).addTo(mymap);
        
var satellite = L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZ2NoYXVkaHVyaSIsImEiOiJjazBtcG5odG8wMDltM2JtcjdnYTgyanBnIn0.qwqjMomdrBMG36GQKXBlMw', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, ' +
        'Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox/satellite-v9',
    tileSize: 512,
    zoomOffset: -1,
    minZoom: 2,
    maxZoom: 19
}).addTo(mymap);
    
        
var myIcon1 = L.icon({
    iconUrl: 'images/steely_dan_logo.png',
    iconSize: [30, 30],
    iconAnchor: [10, 10],
    popupAnchor: [-2, -10],
});
        
var myIcon2 = L.icon({
    iconUrl: 'images/doobie_brothers_logo.png',
    iconSize: [30, 30],
    iconAnchor: [10, 10],
    popupAnchor: [-2, -10],
});
        
var myIcon3 = L.icon({
    iconUrl: 'images/eagles_logo.png',
    iconSize: [30, 30],
    iconAnchor: [10, 10],
    popupAnchor: [-2, -10],
});


// Load GeoJSON from an external file
        
        
//Steely Dan
        
var steely = L.geoJSON(steely, {
    pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng, {icon: myIcon1});
    marker.bindPopup(feature.properties.pic + '<br><b>Song: </b>' + feature.properties.song +
        '<br><b>Artist: </b>' + feature.properties.artist + 
        '<br><b>Album: </b>' + feature.properties.album +
        '<br><b>Year: </b>' + feature.properties.year +
        '<p style="color:blue">' + '"' + feature.properties.lyric + '"');
        return marker;
    }
});

        
//The Doobie Brothers
        
var doobie = L.geoJSON(doobie, {
    pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng, {icon: myIcon2});
    marker.bindPopup(feature.properties.pic + '<br><b>Song: </b>' + feature.properties.song +
        '<br><b>Artist: </b>' + feature.properties.artist + 
        '<br><b>Album: </b>' + feature.properties.album +
        '<br><b>Year: </b>' + feature.properties.year +
        '<p style="color:blue">' + '"' + feature.properties.lyric + '"');
        return marker;
    }
});

        
//Eagles
        
var eagles = L.geoJSON(eagles, {
    pointToLayer: function(feature,latlng){
        var marker = L.marker(latlng, {icon: myIcon3});
    marker.bindPopup(feature.properties.pic + '<br><b>Song: </b>' + feature.properties.song +
        '<br><b>Artist: </b>' + feature.properties.artist + 
        '<br><b>Album: </b>' + feature.properties.album +
        '<br><b>Year: </b>' + feature.properties.year +
        '<p style="color:blue">' + '"' + feature.properties.lyric + '"');
        return marker;
    }
});

var miniMap = new L.Control.MiniMap(L.tileLayer('https://api.maptiler.com/maps/topo/{z}/{x}/{y}.png?key=tZnptaeI9RvKHsX18rbW'), {
            toggleDisplay: false,
            position: 'bottomleft'
        }).addTo(mymap);        
        

L.control.scale({position: 'bottomright', maxWidth: '150', metric: 'True'}).addTo(mymap); 

var propcirc = new L.geoJson(propcirc, {
    onEachFeature: function(feature, featureLayer){
        featureLayer.bindPopup('<p>City: <b>'+feature.properties.City+ '</b></br>' +
                                   'Total Number of References: <b>'+feature.properties.Total_References+ '</b></br>' +
                                   ' Number of Steely Dan References: <b>'+feature.properties.Steely+ '</b></br>' +
                                   ' Number of Doobie Brothers References: <b>'+feature.properties.Doobie+ '</b></br>' +
                                   ' Number of Eagles References: <b>'+feature.properties.Eagle+'</p>');
    },
    pointToLayer: function(feature, latlng) {
      return L.circleMarker(latlng, {
          fillColor: "#920101", 
          color: '#920101',
          weight: 2,       
          radius: feature.properties.Total_References,
          fillOpacity: .35
      }).on({
            mouseover: function(e) {
                this.openPopup();
                this.setStyle({fillOpacity: .8, fillColor: '#2D8F4E'});

            },
            mouseout: function(e) {
                this.closePopup();
                this.setStyle({fillOpacity: .35, fillColor: '#920101'});  
            }
    });
  }
});

propcirc.addTo(mymap)
        
var menu = {
    "<img src='images/steely_dan_logo.png' height=16> Steely Dan": steely,
    "<img src='images/doobie_brothers_logo.png' height=16> The Doobie Brothers": doobie,
    "<img src='images/eagles_logo.png' height=16> Eagles": eagles,
    "<img src='images/red_circle.png' height=16> Common City References": propcirc,
};

var baseLayers = {
    'Grayscale': grayscale,
    'Satellite': satellite,
    'Streets': streets,
};        

var layerControl = L.control.layers(baseLayers, menu, {collapsed: false}).addTo(mymap);  


L.easyButton(('<img src="images/home-button.svg", height=60%>'), function(btn, map){
    map.setView([30, 0], 2);
}, {position: 'topright'}).addTo(mymap);
        
L.control.zoom({
    position: "topright"
}).addTo(mymap);
        
