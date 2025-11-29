const ipAdd = document.getElementById("ip-address");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
const searchBtn = document.getElementById("search-btn");
const ipInput = document.getElementById("search-input");

const apiKey = "at_SFOD5JiuWTzp4vcHnp9dMAjDY4eio";
let userIp = "8.8.8.8";
const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${userIp}`;

let map;

let myIcon = L.icon({
    iconUrl: './images/icon-location.svg',
    iconSize: [46, 56],
    iconAnchor: [22, 94],
    popupAnchor: [-3, -76],
    shadowUrl: './images/icon-location-shadow.png',
    shadowSize: [68, 95],
    shadowAnchor: [22, 94]
});
searchBtn.addEventListener("click", () => {
  userIp = ipInput.value;
  searchIp(userIp);
});

async function searchIp(ip) {
  const response = await fetch(
    `https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`
  );
  const data = await response.json();
  console.log(data);

  try {
    ipAdd.innerText = data.ip;
    locationEl.innerText = `${data.location.city}, ${data.location.region} ${data.location.postalCode}`;
    timezoneEl.innerText = `UTC ${data.location.timezone}`;
    ispEl.innerText = data.isp;

    if (!response.ok) {
      throw new Error(`SOMETHING WENT WRONG: ${data.message}`);
    }
  } catch {
    alert("d>_<b " + error.message);
  } finally {
    console.log("Search completed!!! d^_^b");
  }

  const latitude = data.location.lat;
  const longitude = data.location.lng;

  if (!map) {
    map = L.map("map").setView([latitude, longitude], 13);
    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);
    marker = L.marker([latitude, longitude], {icon: myIcon}).addTo(map);
  } else {
    map.setView([latitude, longitude], 13);
    marker.setLatLng([latitude, longitude]);
  }
}

searchIp(userIp);
