// DEBUT PAGE ENTREPRISE




// debut du conteur

const conteurCapital = document.querySelector(".ct-capital");
const conteurProjet = document.querySelector(".ct-projet");
const conteurRendement = document.querySelector(".ct-rendement");

// capital
let maxCapital = 10;
let ctCapital = 0;
setInterval(() => {
  if (ctCapital < maxCapital) {
    ctCapital++;
  } else null;
  conteurCapital.innerHTML = ctCapital;
}, 300);

// projet
let maxProjet = 4;
let ctProjet = 0;
setInterval(() => {
  if (ctProjet < maxProjet) {
    ctProjet++;
  } else null;
  conteurProjet.innerHTML = ctProjet;
}, 700);

// rendement
let maxRendement = 25;
let ctRendement = 0;
setInterval(() => {
  if (ctRendement < maxRendement) {
    ctRendement++;
  } else null;
  conteurRendement.innerHTML = ctRendement;
}, 115);

// fin du conteur



// redirection de la map

const map = document.querySelector(".mapEconomie");

map.addEventListener("click", (e) => {
  alert("redirection vers la map intéractive"); // ici mettre le chemin de redirection vers la page de la map intéractive
});
