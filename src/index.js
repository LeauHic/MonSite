function age() {
    /*Fonction permettant de determiner mon age en fonction de la date du jour*/
    //Instanciation de l'objet date et récupération du jour, moi et annee actuelle
    let date = new Date();
    let jour = date.getDate();
    let mois = date.getMonth();
    let annee = date.getFullYear();
    let age = 0;
    //Si le mois est inférieur à mai ou si la date est inférieure à 14 dans le mois de mai
    if (mois < 5 || (mois < 5 && jour < 14)) {
        age = (annee - 1991)
        return age;
    }
    else {
        age = (annee - 1 - 1991)
        return age;
    }
};

//attribution au div "age" de l'age calculé
document.querySelector("#age").textContent = age();


//Gestion de l'affichage de la partie parcours
let parcoursBefore = document.querySelector(".timelineBefore");
let parcoursNext = document.querySelector(".timelineNext");

//Gestion de la flèche before
parcoursBefore.addEventListener("click", function () {
    let mission = document.querySelectorAll(".mission")
    for (let i = 0; i < mission.length; i++) {
        mission[i].classList.toggle("complete");
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
                    imagesFormation[j].style.display ="block";
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

