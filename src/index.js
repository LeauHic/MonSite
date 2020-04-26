
/*Fonction permettant de determiner mon age en fonction de la date du jour*/
//Instanciation de l'objet date et récupération du jour, moi et annee actuelle
let date = Date.now();
let anniv = Date.parse("14 May 1991 23:00");
let ageEnJour = (date - anniv) / 3600 / 1000 / 24;
let ageEnAnnee = ageEnJour / 365.24;
ageEnAnnee = Math.floor(ageEnAnnee);
let mois = Math.floor((ageEnJour - ageEnAnnee * 365.24) / 30.4375);
let jour = Math.floor((ageEnJour - ageEnAnnee * 365.24) % 30.4375);


//attribution au div "age" de l'age calculé
document.querySelector("#age").textContent = `${ageEnAnnee} ans (${mois} mois et ${jour} jours...)`;


//Gestion de l'affichage de la partie parcours
let parcoursBefore = document.querySelector(".timelineBefore");
let parcoursNext = document.querySelector(".timelineNext");
let mission = document.querySelectorAll(".mission")
let index = mission.length; 

//Gestion de la flèche before
parcoursBefore.addEventListener("click", function () {
    (index > 1) ? index-- : index;
    for (let i = 1; i < mission.length; i++) {
        if (index > i) {
            mission[i].classList.add("complete");
        }
        else {
            mission[i].classList.remove("complete");
        }
    }
});

//Gestion de la flèche next
parcoursNext.addEventListener("click", function () {
   (index <= mission.length)? index++ : index;
    for (let i = 1; i < mission.length; i++) {
        if (index > i) {
            mission[i].classList.add("complete");
        }
        else {
            mission[i].classList.remove("complete");
        }
    }
});

//Gestion de l'affichage des panel de la partie "formations"
let titreFormation = document.querySelectorAll(".titreFormation");
let imagesFormation = document.querySelectorAll(".imagesFormation");

for (let i = 0; i < titreFormation.length; i++) {
    titreFormation[i].addEventListener("click", function () {

        for (let j = 0; j < titreFormation.length; j++) {
            let panel = titreFormation[j].nextElementSibling;
            if (titreFormation[i] === titreFormation[j]) { //Cas de la formation en cours
                if (!panel.style.maxHeight) {
                    panel.style.maxHeight = 80 + "px";
                    titreFormation[j].firstElementChild.classList.toggle("arrowActive");
                    imagesFormation[j].style.display = "block";
                }
                else {
                    panel.style.maxHeight = null;
                    titreFormation[j].firstElementChild.classList.toggle("arrowActive");
                    imagesFormation[j].style.display = "none";
                };
            }
            else { //Cas des autres formations
                if (panel.style.maxHeight) {
                    panel.style.maxHeight = null;
                    titreFormation[j].firstElementChild.classList.toggle("arrowActive");
                    imagesFormation[j].style.display = "none";
                };
            };
        } //Fin boucle for
    }); // Fin callback
};

