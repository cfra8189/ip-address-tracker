***REMEMBER***

const pokemonName = document.getElementById("pokemonName");
const pokemonSprite = document.getElementById("pokemonSprite");
const pokename = document.getElementById("pokename");
const pokeheight = document.getElementById("pokeheight");
const pokeweight = document.getElementById("pokeweight");
const poketype = document.getElementById("poketype");

async function fetchData() {
  {
    try {
      await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName.value}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);

          pokemonName.value = "";

          pokemonSprite.src = data.sprites.front_default;
          pokemonSprite.style.display = "block";
          pokename.textContent = `Name: ${data.name}`;
          pokeheight.textContent = `Height: ${data.height}`;
          pokeweight.textContent = `Weight: ${data.weight}`;
        });
    } catch {
      console.error(error);
    }
  }
}

fetchData();

==========================NOTES================================================

- Set the ApiKey and UserIP before the ApiURL


==========================RESOURCES============================================
1.4: JSON - Working with Data and APIs in JavaScript
https://www.youtube.com/watch?v=uxf0--uiX0I&t=774s

1.5 Mapping Geolocation with Leaflet.js - Working with Data and APIs in JavaScript
https://www.youtube.com/watch?v=nZaZ2dB6pow

List of IP Address to demonstrate:
- Google Public DNS: 8.8.8.8 
- Cloudflare DNS: 1.1.1.1 
- Amazon.com: 72.21.211.176 
- Wikipedia.org: 208.80.152.201 
