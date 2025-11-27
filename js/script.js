const IPIFY_API_KEY = "at_JNMdz7vg9bg0K3HIaPUN8OEZEvzPb";
const API_BASE_URL = "https://geo.ipify.org/api/v2/country,city?apiKey=" + IPIFY_API_KEY;
let ipAddress = document.getElementById("ip-address");
let locationData = document.getElementById("location");
let timezone = document.getElementById("timezone");
let isp = document.getElementById("isp");


//geoipify
fetch(API_BASE_URL)
    .then((response) => response.json())
    .then((data) => {
        document.getElementById("ip-address").textContent = data.ip;
        document.getElementById("location").textContent =
            data.location.city + ", " + data.location.region + " " + data.location.postalCode;
        document.getElementById("timezone").textContent =
            "UTC " + data.location.timezone;
        document.getElementById("isp").textContent = data.isp;
        const latitude = data.location.lat;
        const longitude = data.location.lng;
        map.setView([latitude, longitude], 16);
        marker.setLatLng([latitude, longitude]);

        try {
            if(data) {
                console.log("Data fetched successfully:", data);
            } else {
                console.error("No data received from the API");
            }
        } catch (error) {
            console.error("Error processing data:", error);
        } finally {
            console.log("Fetch attempt completed");
        }
    });

//leaflet
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
      
        map.setView([latitude, longitude], 16);
        marker.setLatLng([latitude, longitude]);
    });
} else {
    console.log("geolocation is NOT available");
}