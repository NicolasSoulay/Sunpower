/* Crée la map du formulaire général avec la lattitude et la longitude */
var map = L.map('map').setView([43.645090, 3.872190], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([43.645090, 3.872190]).addTo(map)
    .bindPopup('Retrouvez Sunpower ici')
    .openPopup();