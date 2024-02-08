// Codice per usare l'api di pexels:

let imageList = document.getElementById("image-list");
let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", (event) => {
  let searchInput = document.getElementById("search-img");
  let searchValue = searchInput.value;
  console.log(searchValue)
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
      imageList.innerHTML = "";
      data.photos.forEach((element, i) => {
        createCard(data, i);
      });
    });
}

function createCard(data, i) {
  imageList.innerHTML += ` 
  <div class='col-6 col-md-3'> 
  <div class="card overflow-hidden" id="card-original">
  <img src="${data.photos[i].src.tiny}" class="card-img-top" alt="${data.photos[i].alt}">
  <div class="card-body">
      <p class="card-text"> ${data.photos[i].alt} </p> 
  </div>
  </div>
  </div>
   `;
}
