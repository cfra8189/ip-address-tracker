const ipAdd = document.getElementById("ip-address");
const locationEl = document.getElementById("location");
const timezoneEl = document.getElementById("timezone");
const ispEl = document.getElementById("isp");
const searchBtn = document.getElementById("search-btn");
const ipInput = document.getElementById("search-input");

const apiKey = "at_SFOD5JiuWTzp4vcHnp9dMAjDY4eio";
let userIp = "8.8.8.8";
const apiUrl = `https://geo.ipify.org/api/v2/country?apiKey=${apiKey}&ipAddress=${userIp}`;



async function searchIp(ip) {
    const response = await fetch(`https://geo.ipify.org/api/v2/country,city?apiKey=${apiKey}&ipAddress=${ip}`);
    const data = await response.json();
    console.log(data);

    try{}
    catch{}
    finally{}


    
}

searchIp(userIp);