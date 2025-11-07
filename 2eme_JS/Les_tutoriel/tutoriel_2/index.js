let titre = document.getElementById("titre");
let image = document.querySelector("img");
let bouton = document.querySelector(".btn");

bouton.addEventListener("click", 
function()
{
  titre.innerText = "google 2222 !";
  titre.setAttribute("style", "font-size : 100px ");
  titre.classList.toggle("highlight");
  
  

  image.setAttribute("src", "asset/4img_C.jpg");

  image.setAttribute("width", "400");

  image.setAttribute("alt", "Nouvelle image");
}

);