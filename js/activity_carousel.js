let ordreCartes = [1, 0, 0, 0]
let id_cards = ["solar_card", "power_card", "elec_card", "battery_card"]
let id_article = ["solar_article", "power_article", "elec_article", "battery_article"]
let visible = 0;

function hide() {
    for (let i = 0; i < ordreCartes.length; i++) {
        if (ordreCartes[i] === 1) {
            document.getElementById(id_cards[i]).style.visibility = "visible";
        }
        else {
            document.getElementById(id_cards[i]).style.visibility = "collapse";
        }
    }
}

function choose_article(){
    for (let i = 0; i < ordreCartes.length; i++) {
        if (ordreCartes[i] === 1) {
            if (visible === 1) {
                 document.getElementById(id_article[i]).style.visibility = "visible";                
                 document.getElementById(id_article[i]).style.position = "relative";
            }

            else {
                document.getElementById(id_article[i]).style.visibility = "collapse";
                document.getElementById(id_article[i]).style.position = "absolute";
            }
        }
        else {
            document.getElementById(id_article[i]).style.visibility = "collapse";
            document.getElementById(id_article[i]).style.position = "absolute";
        }
    }
}

function display_article(){
    if (visible === 0){
        visible = 1;
    }
    else {
        visible = 0;
    }
    choose_article()
}

function appuiGauche() {
    ordreCartes.push(ordreCartes.shift());
    hide();
    choose_article()
}

function appuiDroite() {
    ordreCartes.unshift(ordreCartes.pop());
    hide();
    choose_article()
}



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

