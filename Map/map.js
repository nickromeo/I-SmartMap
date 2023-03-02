

// sets the starting map view
var map = L.map('map',
{
  
    maxBoundsViscosity: 1.0
}).setView([44.40, -77.7735599], 6.4);




// all clickable circles
var circle12 = L.circle([47.9, -73.95], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle13 = L.circle([48.1, -73.95], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle2 = L.circle([43.5, -77.95], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle1 = L.circle([43.5, -83.24], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle = L.circle([44.5, -84.24], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle3 = L.circle([47.532, -82.24], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle5 = L.circle([46.5, -80.24], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle8 = L.circle([47.35, -80.54], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle9 = L.circle([48.5, -83.1], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.7,
    radius: 4000
}).addTo(map);

var circle10 = L.circle([44.420, -80.5], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 4000
}).addTo(map);

var circle11 = L.circle([46.5, -75.24], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.5,
    radius: 4000
}).addTo(map);



// var polygon = L.polygon([
//     [48.1, -73.95],
//     [48.5, -72],
//     [47, -76.5],
//     [48.1, -74.99]
// ]).addTo(map);

map.on('click', function(e) {
  console.log("Lat, Lon : " + e.latlng.lat + ", " + e.latlng.lng)
});


// background image with max and min view
var osm = L.tileLayer('HTMLimage/whiteb.png', {
    minZoom: 4.75,
    mazZoom: 13,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

//var imageUrl = 'map.png';
var imageUrl = 'HTMLimage/TestMap.png';
var errorOverlayUrl = 'https://cdn-icons-png.flaticon.com/512/110/110686.png';
var altText = 'map of thing';

//this is where the map is set to
var corner1 = L.latLng(40, -88),
corner2 = L.latLng(50, -64),
bounds = L.latLngBounds(corner1, corner2);

// this is the max boundry you can scoll on the map
map.setMaxBounds([[53, -96.88], [35.5, -52.5]]);

var imageOverlay = L.imageOverlay(imageUrl, bounds, {
    errorOverlayUrl: errorOverlayUrl,
    alt: altText,
    interactive: true
}).addTo(map);


function SetOff(){
    map.dragging.disable();
    map.touchZoom.disable();
    map.doubleClickZoom.disable();
    map.scrollWheelZoom.disable();
    map.boxZoom.disable();
    map.keyboard.disable();
    if (map.tap) map.tap.disable();
    document.getElementById('map').style.cursor='default';
}

function SetOn(){
map.dragging.enable();
map.touchZoom.enable();
map.doubleClickZoom.enable();
map.scrollWheelZoom.enable();
map.boxZoom.enable();
map.keyboard.enable();
if (map.tap) map.tap.enable();
document.getElementById('map').style.cursor='grab';
}


// Function that creates the SmartBox box below the map  
function getdata(){
    selectElement = document.querySelector("#SM");
    output = selectElement.value
fetch("data.json")
.then(response => response.json())
.then( (data) => {
    data.forEach(item => {
        console.log(item)
        map.zoomOut(1);
        document.querySelector("#SMBB").innerHTML = 
        `
        
        <table class="orangeTable">
          <thead>
            <tr>
              <th>${item.SM[output].name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${item.SM[output].IP}</td>
            </tr>
            <tr>
              <td>Adapter: ${item.SM[output].Adapters_IP}</td>
            </tr>
            <tr>
              <td><a href=http://${item.SM[output].Agent_IP} target="_blank">Active Agents: ${item.SM[output].Agent_IP}</a></td>
            </tr>
            <tr>
            <td><a href=http://${item.SM[output].Admin} target="_blank">IOS ${item.SM[output].Admin}</a></td>
            </tr>
          </tbody>
        </table>                         
        `;
        map.zoomIn(3.5);
        map.flyTo(item.SM[output].Cords);
        

    }) ;   
})


};
// Function that creates the CNC box below the map 
function getdataCNC(){
    selectElement1 = document.querySelector("#CNC");
    output1 = selectElement1.value
    fetch("CNC.json")
    .then(response => response.json())
    .then( (data) => {
        console.log(data)
        data.forEach(item => {
            console.log(item)
            document.querySelector("#CNCB").innerHTML = 
        `
        
        <table class="blueTable">
          <thead>
            <tr>
              <th>${item.CNC[output1].name}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>${item.CNC[output1].SMB}</td>
            </tr>
            <tr>
              <td>Adapter Port: ${item.CNC[output1].AdapterPort}</td>
            </tr>
            <tr>
              <td>Agent Port: ${item.CNC[output1].AgentPort}</td>
            </tr>
          </tbody>
        </table>                         
        `;
    });   
})};

function zoomTo(){

};


// all of the circle popup data
circle.bindPopup("FMF-SMARTBOX1 <br>IP: (172.26.70.10-172.26.70.11)<br> Adapters IP: (192.168.0.11-192.168.0.20) <br> Agent IP: 172.26.70.35, 172.26.70.23");

circle1.bindPopup("FAB-SMARTBOX1 <br>IP: (172.26.70.34-172.26.70.35)<br> Adapters IP: (192.168.0.10(MITS adapter), 192.168.0.11-192.168.0.13, 192.168.0.15) <br> Agent IP: 172.26.70.11 <br> <a href=http://${item.SM[output].Admin}>")

circle2.bindPopup("FMF-SMARTBOX2 <br>IP: (172.26.70.13-172.26.70.14)<br> Adapters IP: (192.168.0.11-192.168.0.13, 192.168.0.15-192.168.0.18) <br> Agent IP: 172.26.70.14");

circle3.bindPopup("FMF-SMARTBOX3 <br>IP: (172.26.70.16-172.26.70.17)<br>Adapters IP: 192.168.0.11-192.168.0.12 <br> Agent IP: 172.26.70.17");

circle5.bindPopup("FMF-SMARTBOX5 <br>IP: (172.26.70.22-172.26.70.23)<br> Adapters IP: 192.168.0.11, 192.168.0.12, 192.168.0.14, 192.168.0.15, 192.168.0.17, 192.168.0.19, 192.168.0.22, 192.168.0.24 <br> Agent IP: 172.26.70.23  <br> L2NAT: 172.26.70.24 => 172.26.81.157, 172.26.70.25 => 172.26.81.157");

circle8.bindPopup("FMF-SMARTBOX8 <br>IP: (172.26.70.31-172.26.70.32) <br> Adapters IP: (192.168.0.11-192.168.0.13), 192.168.0.15 <br> Agent IP: 172.26.81.157(not on SB8), 172.26.70.32");

circle9.bindPopup("FMF-SMARTBOX9 <br>IP: (172.26.70.37-172.26.70.38)<br>Adapters IP: 192.168.0.11 <br>Agent IP: 172.26.70.38");

circle10.bindPopup("FMF-SMARTBOX10 <br>IP: (172.26.70.40-172.26.70.41)<br>Adapters IP: 192.168.0.11(SM), <br>Agent IP: 172.26.70.42(v2 agent on server and v1.8 on web server)<br> Agent IP: 172.26.70.41, 172.26.81.157");

circle11.bindPopup("FMF-SMARTBOX11 <br>IP: (172.26.70.43-172.26.70.44)<br>Adapters IP: 192.168.0.11-192.168.0.13, 192.168.0.15 <br>Agent IP: 172.26.70.44");

circle12.bindPopup("FMF-SMARTBOX12 <br>IP: (172.26.70.46-172.26.70.47)<br>Adapters IP: 192.168.0.11(SM), <br>172.26.70.48(v2 agent on server)<br> Agent IP: 172.26.70.47, 172.26.81.157");

circle13.bindPopup("FMF-SMARTBOX13 <br>IP: (172.26.70.50-172.26.70.51)<br>Adapters IP: (192.168.0.11-192.168.0.16), (172.26.70.68-172.26.70.72), 172.26.70.80<br> Agent IP: 172.26.70.51, 172.26.70.157");
