// Codice per usare l'api di pexels:

let imageList = document.getElementById("image-list");
let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", (event) => {
  let searchInput = document.getElementById("search-img");
  let searchValue = searchInput.value;
  loadImages(searchValue);
});

function loadImages(value) {
  fetch(`https://api.pexels.com/v1/search?query=${value}`, {
    headers: {
      Authorization: "AP2bjQI65gAh52FK0G1vAapuq7dkdOdd5ukW5g4eeyDvr2CBzJ2ixubf",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      imageList.innerHTML = '';
      for (let i = 0; i < data.photos.length ; i++) {
        createCard(data, i);
      }
    });
}

function createCard(data, i){
  console.log(data.photos[i])
  imageList.innerHTML += ` 
  <div class='col-3'> 
  <div class="card overflow-hidden" id="card-original">
  <img src="${data.photos[i].src.tiny}" class="card-img-top" alt="${data.photos[i].alt}">
  <div class="card-body">
      <p class="card-text"> ${data.photos[i].alt} </p> 
  </div>
  </div>
  </div>
   `
}