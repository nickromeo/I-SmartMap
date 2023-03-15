

// sets the starting map view
var map = L.map('map',
{
  
    maxBoundsViscosity: 1.0
}).setView([44.40, -77.7735599], 6.4);




// all clickable circles
var circle12 = L.circle([42.75, -79.28], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle13 = L.circle([47.10, -81.61], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle2 = L.circle([45.43, -79.10], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle1 = L.circle([46.03, -74.07], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle = L.circle([45.50, -79.51], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle3 = L.circle([45.35, -79.44], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle5 = L.circle([44.07, -78.32], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle8 = L.circle([47.10, -81.41], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle9 = L.circle([44.29, -81.28], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle10 = L.circle([44.92, -80.93], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
}).addTo(map);

var circle11 = L.circle([44.53, -81.86], {
    color: 'black',
    fillColor: '#ff6600',
    fillOpacity: 0.9,
    radius: 7500
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



// THESE ARE JUST TESTING WAYS TO PARSE XML DATA FROM MTCONNECT TO DISPLAY ON THE WEB PAGE





// function checkDaAgent() {
//   selectElement = document.querySelector("#SM");
//   output = selectElement.value
// fetch("data.json")
// .then(response => response.json())
// .then( (data) => {
//   data.forEach(item => {

//   var xmlhttp = new XMLHttpRequest();
//   xmlhttp.onreadystatechange = function() {
//     if (this.readyState == 4 && this.status == 200) {
//       myFunction(this);
//     }
//   };
//   xmlhttp.open("GET", `http://${item.SM[output].Agent_IP}:5000/current?path=//DataItem[@type="AVAILABILITY"]`, true);
//   xmlhttp.send();
//   document.getElementById("demo").innerHTML

// });
// });
// }

// function checkDaAgent(xml){
// var x, i, xmlDoc, txt;
// xmlDoc = xml.responseXML;
// txt = "Hello";
// x = xmlDoc.getElementsByTagName("Availability");
// for (i = 0; i < x.length; i++) {
//     txt += x[i].childNodes[0].nodeValue + "<br>";
// }
// document.getElementById("demo").innerHTML = txt;


// }

    // let xmlContent = '';
    // let availabileCHk = document.getElementById('demo');
    // fetch(`http://${item.SM[output].Agent_IP}:5000/current?path=//DataItem[@type="AVAILABILITY"]`).then((response)=>{
    //   response.text().then((xml)=>{
    //     let parser = new DOMParser();
    //     let xmlDOM = parser.parseFromString(xmlContent,'text/xml');
    //     let CNC = xmlDOM.querySelectorAll('Availability')
    //     CNC.forEach(XMLNode => {
    //       let p = document.createElement('p')
    //       p.innerHTML = XMLNode.children[0].innerHTML;

     

//   });
// });

//   selectElement = document.querySelector("#SM");
//   output = selectElement.value
// fetch("data.json")
// .then(response => response.json())
// .then( (data) => {
//   data.forEach(item => {
//     var parseXml;

//     if (typeof window.DOMParser != "undefined") {
//         parseXml = function(xmlStr) {
//             return ( new window.DOMParser() ).parseFromString(xmlStr, "text/xml");
//         };
//     } else if (typeof window.ActiveXObject != "undefined" &&
//            new window.ActiveXObject(`http://${item.SM[output].Agent_IP}:5000/current?path=//DataItem[@type="AVAILABILITY"]`)) {
//         parseXml = function(xmlStr) {
//             var xmlDoc = new window.ActiveXObject(`http://${item.SM[output].Agent_IP}:5000/current?path=//DataItem[@type="AVAILABILITY"]`);
//             xmlDoc.async = "false";
//             xmlDoc.loadXML(xmlStr);
//             return xmlDoc;
//         };
//     } else {
//         throw new Error("No XML parser found");
//     }
//     var xml = parseXml("<Availability>AVAILABLE</Availability>");
//     document.getElementById("demo").innerHTML = "FUck you: " + xml.documentElement.nodeName;
//   })
// })
  







// Function that creates the SmartBox box below the map  
function getdata(){
    selectElement = document.querySelector("#SM");
    output = selectElement.value
fetch("data.json")
.then(response => response.json())
.then( (data) => {
    data.forEach(item => {
        console.log(item)
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
              <td>Active Agents: <a href=http://${item.SM[output].Agent_IP} target="_blank">${item.SM[output].Agent_IP}</a></td>
            </tr>
            <tr>
            <td>IOS: <a href=http://${item.SM[output].Admin} target="_blank">${item.SM[output].Admin}</a></td>
            </tr>
            <tr>
            <td>Status: </td>
            </tr>
          </tbody>
        </table>                         
        `;
        map.flyTo([item.SM[output].Cords[0], item.SM[output].Cords[1]], 9, {
          animate: true,
          duration: 1 // in seconds
        });
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
  target="_blank"
};


// all of the circle popup data
circle.bindPopup(`<b>FMF-SMARTBOX1</b> <br><b>IOS:</b>172.26.70.10<a href=https://172.26.70.10/ target="_blank"> Management</a><br>  <b>IOX:</b>172.26.70.11<a href=https://172.26.70.11:8443 target="_blank"> Management</a><br> <b>Active Agents:</b> MC1, MC2, MC3, MC4<a href=http://172.26.70.11:5010 target="_blank"> Management</a>`);

circle1.bindPopup(`<b>FAB-SMARTBOX1</b> <br><b>IOS:</b>172.26.70.34<a href=https://172.26.70.34/ target="_blank"> Management</a><br>  <b>IOX:</b>172.26.70.35<a href=https://172.26.70.35:8443 target="_blank"> Management</a><br> <b>Active Agents:</b> MC1-10 <a href=http://172.26.70.35:5010 target="_blank"> Management</a>`)

circle2.bindPopup(`<b>FMF-SMARTBOX2</b> <br><b>IOS:</b>172.26.70.13<a href=https://172.26.70.13/ target="_blank"> Management</a><br>  <b>IOX:</b>172.26.70.14<a href=https://172.26.70.14:8443 target="_blank"> Management</a><br> <b>Active Agents:</b> MC1-8 <a href=http://172.26.70.14:5010 target="_blank"> Management</a>`);

circle3.bindPopup(`<b>FMF-SMARTBOX3</b> <br><b>IOS:</b>172.26.70.16<a href=https://172.26.70.16/ target="_blank"> Management</a><br>  <b>IOX:</b>172.26.70.17<a href=https://172.26.70.17:8443 target="_blank"> Management</a><br> <b>Active Agents:</b> MC1, MC2 <a href=http://172.26.70.17:5010 target="_blank"> Management</a>`);

circle5.bindPopup("FMF-SMARTBOX5 <br>IP: (172.26.70.22-172.26.70.23)<br> Adapters IP: 192.168.0.11, 192.168.0.12, 192.168.0.14, 192.168.0.15, 192.168.0.17, 192.168.0.19, 192.168.0.22, 192.168.0.24 <br> Agent IP: 172.26.70.23  <br> L2NAT: 172.26.70.24 => 172.26.81.157, 172.26.70.25 => 172.26.81.157");

circle8.bindPopup("FMF-SMARTBOX8 <br>IP: (172.26.70.31-172.26.70.32) <br> Adapters IP: (192.168.0.11-192.168.0.13), 192.168.0.15 <br> Agent IP: 172.26.81.157(not on SB8), 172.26.70.32");

circle9.bindPopup("FMF-SMARTBOX9 <br>IP: (172.26.70.37-172.26.70.38)<br>Adapters IP: 192.168.0.11 <br>Agent IP: 172.26.70.38");

circle10.bindPopup("FMF-SMARTBOX10 <br>IP: (172.26.70.40-172.26.70.41)<br>Adapters IP: 192.168.0.11(SM), <br>Agent IP: 172.26.70.42(v2 agent on server and v1.8 on web server)<br> Agent IP: 172.26.70.41, 172.26.81.157");

circle11.bindPopup("FMF-SMARTBOX11 <br>IP: (172.26.70.43-172.26.70.44)<br>Adapters IP: 192.168.0.11-192.168.0.13, 192.168.0.15 <br>Agent IP: 172.26.70.44");

circle12.bindPopup("FMF-SMARTBOX12 <br>IP: (172.26.70.46-172.26.70.47)<br>Adapters IP: 192.168.0.11(SM), <br>172.26.70.48(v2 agent on server)<br> Agent IP: 172.26.70.47, 172.26.81.157");

circle13.bindPopup("FMF-SMARTBOX13 <br>IP: (172.26.70.50-172.26.70.51)<br>Adapters IP: (192.168.0.11-192.168.0.16), (172.26.70.68-172.26.70.72), 172.26.70.80<br> Agent IP: 172.26.70.51, 172.26.70.157");
