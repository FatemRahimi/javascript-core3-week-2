let button = document.getElementById("addImage");
let ulTag = document.getElementsByTagName("ul");
let liTag = document.getElementById("list");
let imgTag = document.createElement("img");

button.addEventListener("click", addImage());

function addImage() {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      imgTag.src = data.message;
    })
    .catch((err) => console.log(err));
}
liTag.append(imgTag);