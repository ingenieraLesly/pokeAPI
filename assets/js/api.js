const API = "https://pokeapi.co/api/v2/pokemon?limit=50&offset=00";
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
const getUrlDatos = (pokeDatos) => {
  // console.log("Datos de cada poke");
  return fetch(pokeDatos)
    .then((response) => response.json())
    .then((json) => {
      fillDataPokes(json);
    })
    .catch((error) => {
      console.error("Error in the API:", error);
    });
};

const fillData = (data) => {
  data.forEach((item) => {
    getUrlDatos(item.url);
  });
};

const fillDataPokes = (image) => {
  html += '<div class="col">';
  html += '<div class="text-white card h-100 bg-dark">';
  html += `<img src="${image.sprites.other.dream_world.front_default}" class="card-img-top card-img-bottom" alt="...">`;
  html += '<div class="card-body">';
  html += `<h5 class="card-title font">Name: ${image.name}</h5>`;
  html +=  '<br>'
  html += `<p class="card-text font">Height: ${image.height}</p>`;
  html += `<p class="card-text font">Weight: ${image.weight}</p>`;
  html += `<p class="card-text font">Experience: ${image.base_experience}</p>`;
  html += "</div>";
  html += "</div>";
  html += "</div>";

  document.getElementById("characters").innerHTML = html;
};


const pagination = (jason) => {
  let prevDisabled = data.previous == null ? "disabled" : "";
  let nextDisabled = data.next == null ? "disabled" : "";

  document.getElementById(
    "next"
  ).innerHTML = `<a class="btn ${nextDisabled}" onclick="getData('${data.next}')"><i class="fas fa-chevron-right"></i></a>`;
  document.getElementById(
    "prev"
  ).innerHTML = `<a class="btn ${prevDisabled}" onclick="getData('${data.previous}')"><i class="fas fa-chevron-left"></i></a>`;
};

getAPI(API);
