
const button = document.querySelector(".button");
const ul = document.querySelector(".ul");
const getImage = () => {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
      const liNew = document.createElement("li");
      liNew.innerHTML = `<div id='container'>
            <div class='container'>
            <div class='img_div'><img src='${data.img}'/><div>
            
            </div>
            </div>`;
      ul.appendChild(liNew);
    })
        .catch((err) => console.log(err));

button.addEventListener("click", getImage);

/*
const button=document.queryElement