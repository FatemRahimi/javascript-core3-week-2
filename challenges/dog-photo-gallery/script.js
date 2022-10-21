function dogImages() {
  let image = document.createElement("img");
  let liElement = document.createElement("li");

  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      listElement.appendChild(liElement);
      liElement.appendChild(image);

      liElement.classList.add("no-bullet");
      image.classList.add("img");

      image.src = data.message;
    })
    .catch((error) => {
      errorDiv.innerHTML = "<p>Sorry... Not found</p>";
      contentDiv.innerHTML = "";
      contentDiv.appendChild(errorDiv);
    });
}

let buttonEl = document.createElement("button");
let contentDiv = document.querySelector("#content");
let listElement = document.createElement("ul");
let errorDiv = document.createElement("div");

buttonEl.innerText = "Dog";

listElement.classList.add("list-element");
errorDiv.classList.add("error-text");

contentDiv.appendChild(buttonEl);
contentDiv.appendChild(listElement);

buttonEl.addEventListener("click", dogImages);