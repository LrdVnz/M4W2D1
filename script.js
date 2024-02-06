// Codice per usare l'api di pexels:

let imageList = document.getElementById("image-list");

let searchButton = document.getElementById("search-btn");

searchButton.addEventListener("click", () => {
  let searchInput = document.getElementById("search-img");
  let searchValue = searchInput.value;
  loadImages(searchValue);
});

function loadImages(value) {
  fetch(`https://api.pexels.com/v1/search?query=${value}`, {
    headers: {
      'Authorization': "AP2bjQI65gAh52FK0G1vAapuq7dkdOdd5ukW5g4eeyDvr2CBzJ2ixubf",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      let newImg = document.createElement("img");
      newImg.src = data.photos[0].src.medium;
      imageList.appendChild(newImg);
    });
}


