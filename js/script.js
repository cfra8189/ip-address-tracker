const IPIFY_API_KEY = "at_JNMdz7vg9bg0K3HIaPUN8OEZEvzPb";
const API_BASE_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=";

fetch(API_BASE_URL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data);
    })


const map = L.map("map").setView([0, 0], 1);
const myIcon = L.icon({
    iconUrl: "./images/icon-location.svg",
    iconSize: [46, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
});
const marker = L.marker([0, 0], { icon: myIcon }).addTo(map);


L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

if ("geolocation" in navigator) {
    console.log("geolocation is available");
    navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        document.getElementById("latitude").textContent = latitude;
        document.getElementById("longitude").textContent = longitude;
        console.log(position);
        map.setView([latitude, longitude], 16);

        marker.setLatLng([latitude, longitude]);
    });
} else {
    console.log("geolocation is NOT available");
}