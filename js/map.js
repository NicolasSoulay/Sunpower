let map = L.map('map').setView([43.610769, 3.876716], 13);


L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker1 = L.marker([43.567044, 3.943067]).addTo(map);
marker1.bindPopup("<h4>Pradeo</h4><br>nombre d'ombrelles: 3<br>capacité: 12 Wh").openPopup();

let marker2 = L.marker([43.57119189294555, 3.944850180592113]).addTo(map);
marker2.bindPopup("<h4>Greenx</h4><br>nombre d'ombrelles: 7<br>capacité: 23 Wh").openPopup();

let marker3 = L.marker([43.580029830572066, 3.930319133070283]).addTo(map);
marker3.bindPopup("<h4>e3</h4><br>nombre d'ombrelles: 5<br>capacité: 18 Wh").openPopup();

let marker4 = L.marker([43.5767955843162, 3.918006132209793]).addTo(map);
marker4.bindPopup("<h4>ExpX</h4><br>nombre d'ombrelles: 2<br>capacité: 12 Wh").openPopup();

let marker5 = L.marker([43.57292250029829, 3.910868572186806]).addTo(map);
marker5.bindPopup("<h4>Prosaic</h4><br>nombre d'ombrelles: 3<br>capacité: 17 Wh").openPopup();

let marker6 = L.marker([43.575271102211566, 3.905550948258604]).addTo(map);
marker6.bindPopup("<h4>testam</h4><br>nombre d'ombrelles: 3<br>capacité: 17 Wh").openPopup();

let marker7 = L.marker([43.588998746115195, 3.922262375095761]).addTo(map);
marker7.bindPopup("<h4>loopX</h4><br>nombre d'ombrelles: 6<br>capacité: 32 Wh").openPopup();

let marker8 = L.marker([43.593426867911354, 3.908214747604587]).addTo(map);
marker8.bindPopup("<h4>soapL</h4><br>nombre d'ombrelles: 6<br>capacité: 13 Wh").openPopup();

let marker9 = L.marker([43.599275741161804, 3.8797166221546115]).addTo(map);
marker9.bindPopup("<h4>Digigi</h4><br>nombre d'ombrelles: 7<br>capacité: 45 Wh").openPopup();

let marker10 = L.marker([43.60519267120589, 3.8639512413617707]).addTo(map);
marker10.bindPopup("<h4>sunX</h4><br>nombre d'ombrelles: 1<br>capacité: 7 Wh").openPopup();

let marker11 = L.marker([43.62164407845158, 3.881687511542558]).addTo(map);
marker11.bindPopup("<h4>freakZ</h4><br>nombre d'ombrelles: 3<br>capacité: 16 Wh").openPopup();

let marker12 = L.marker([43.62596089414691, 3.841287595793522]).addTo(map);
marker12.bindPopup("<h4>espera</h4><br>nombre d'ombrelles: 4<br>capacité: 15 Wh").openPopup();