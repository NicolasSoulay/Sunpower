/* Affiche la liste de pays dans un sélect */
let elements = document.getElementsByClassName("select");
const flag = ["FR", "GB", "IT", "PL"];

for (let index = 0; index < elements.length; index++) {

    elements[index].innerHTML = "<option>Pays</option>";


    for (let innerIndex = 0; innerIndex < flag.length; innerIndex++) {
        elements[index].innerHTML += "<option>" + flag[innerIndex] + "</option>";
    }

}

/* Quand on clique sur le radio bouton, ça inverse l'état du radio bouton */
let element = document.getElementById("checkbox_responsable");
element.addEventListener("click", inverse);

let value = false;

function inverse() {
    value = !value;
    element.checked = value;
}

/* Affiche une pop up quand on clique sur le bouton envoyer */
function sendForm() {
    alert("Votre message a bien été envoyé")
}