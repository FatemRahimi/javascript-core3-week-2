let divTag = document.getElementById("displayImage");
let imageTag = document.createElement("img");

fetch("https://xkcd.now.sh/?comic=latest")
  .then((response) => response.json())
  .then((data) => {
      console.log(data);
     imageTag.src = data.img;
  })
  .catch((err) => console.log(err));
divTag.append(imageTag);