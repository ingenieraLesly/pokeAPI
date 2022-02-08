const API = "https://pokeapi.co/api/v2/pokemon?limit=52&offset=00";
let html = "";

const getAPI = (pokeApi) => {
  //A pokeApi va a llegar lo que le envíe getApi
  // console.log("Ingresó");
  return fetch(pokeApi) //No ejecute nada más traiga los personajes
    .then((response) => response.json())
    .then((json) => {
      fillData(json.results), pagination(json);
    })
    .catch((error) => {
      console.log("Error in the API : ", error);
    });
};
//ahora traeré la url con el contenido adicional de peso e imagen de cada pokemon
const getPokeData = (urlData) => {
  // console.log("Datos de cada poke");
  return fetch(urlData)
    .then((response) => response.json())
    .then((json) => {
      fillPokeData(json);
    })
    .catch((error) => {
      console.error("Error in the API:", error);
    });
};

const fillData = (data) => {
  data.forEach((item) => {
    getPokeData(item.url);
  });
};

const fillPokeData = (poke) => {
  html += '<div class="col">';
  html += '<div class="text-white card h-100">';
  html += '<div class="card-body card">';
  html += '<div class="font">';
  html += `<h5 class="card-title font"> ${poke.name.toUpperCase()}</h5>`;
  html +=  '<br>'
  html += `<p class="card-text font">ID: ${poke.id}</p>`;
  html += `<p class="card-text font">Height: ${poke.height}</p>`;
  html += `<p class="card-text font">Weight: ${poke.weight}</p>`;
  html += '</div>'
  html +=  '<br>'
  html += `<img src="${poke.sprites.other.dream_world.front_default}" class="card-img-top card-img-bottom image" alt="...">`;
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("characters").innerHTML = html;
};


// const pagination = (info) => {
//   let html = "";

//   info.prev == null ? "disabled" : "";

//   info.next == null ? "disabled" : "";

//   html += `<li class="page-item ${
//     info.prev == null ? "disabled" : ""
//   }"><a class="page-link" onclick="getAPI('${info.prev}')"><</a></li>`;
//   html += `<li class="page-item ${
//     info.next == null ? "disabled" : ""
//   }"><a class="page-link" onclick="getAPI('${info.next}')">></a></li>`;


//   document.getElementById("pagination").innerHTML = html;
// };

getAPI(API);
