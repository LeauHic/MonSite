
/*
 #### AFFICHAGE AGE ####
 */

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

/*
#### AFFICHAGE DE LA PARTIE CREATION ####
 */

let slideIndex = [1, 1, 1,1]; //Index de départ des deux slide show
let slideId = ["slides1", "slides2", "slides3", "slides4"] //Array regroupant les nom de classes des slideshows
showSlides(1, 0); //Affiche la première image du slideshow 1
showSlides(1, 1);//Affiche la première image du slideshow 2
showSlides(1, 2);//Affiche la première image du slideshow 3
showSlides(1, 3);//Affiche la première image du slideshow 4

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let slideshowSelected = document.getElementsByClassName(slideId[no]);
    if (n > slideshowSelected.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slideshowSelected.length }
    for (let i = 0; i < slideshowSelected.length; i++) {
        slideshowSelected[i].style.display = "none";
    }
    slideshowSelected[slideIndex[no] - 1].style.display = "block";
}

/*
 #### AFFICHAGE PARTIE "PARCOURS" ####
 */
let parcoursBefore = document.querySelector(".timelineBefore"); //bouton flèche before
let parcoursNext = document.querySelector(".timelineNext");//bouton flèche next
let mission = document.querySelectorAll(".mission")
let missionDescription = document.querySelectorAll(".missionDescription") //Nom de la mission du .timeline
let textPanelHistogramme = document.querySelectorAll(".textePanelHistogramme"); // Description de la mission active
let index = mission.length-1; 

const timelineAnimation = (index) => {
    /*Fonction parcourant les différents élement de .timeline et de .panelHistogramme
     * pour activer/afficher les élements correspondant la mission active et/où passée
     */
    for (let i = 0; i <= mission.length - 1; i++) {
        if (index > i) { //Mission dans le scope avant l'index
            mission[i].classList.add("complete");
            missionDescription[i].classList.remove("active");
            textPanelHistogramme[i].style.display = "none";
        }
        else { //Mission hors scope (après l'index)
            mission[i].classList.remove("complete");
            missionDescription[i].classList.remove("active");
            textPanelHistogramme[i].style.display = "none";
            if (i === index) { //Mission correspondant à l'index
                missionDescription[i].classList.add("active")
                mission[i].classList.add("complete");
                textPanelHistogramme[i].style.display = "block";
            }
        }
    } //fin boucle for
} //Fin fonction timelineAnimation


//Affichage de la mission en cours à la chargement de la page
window.addEventListener('DOMContentLoaded', () =>{
    timelineAnimation(index);
});

//affichage de la mission selectionnée, par initiation d'une callback par élément
for (let i = 0; i <= mission.length - 1; i++) {
    mission[i].addEventListener("click", () => {
        timelineAnimation(i);
        return index = i;
    })
};

//Gestion de la flèche before
parcoursBefore.addEventListener("click", function () {
    (index > 0) ? index-- : index;
    timelineAnimation(index);
});

//Gestion de la flèche next
parcoursNext.addEventListener("click", function () {
   (index < mission.length-1)? index++ : index;
    timelineAnimation(index);
});

/*
 #### AFFICHAGE PARTIE "FORMATION" ####
 */
let titreFormation = document.querySelectorAll(".titreFormation");
let imagesFormation = document.querySelectorAll(".imagesFormation");

const formationAnimation = (i) => {
    /*Fonction permettant d'ouvrir la formation i et de refermer les autres*/
    for (let j = 0; j < titreFormation.length; j++) {
        let panel = titreFormation[j].nextElementSibling;
        if (titreFormation[i] === titreFormation[j]) { //Cas de la formation en cours
            if (!panel.style.maxHeight) {
                panel.style.maxHeight = 300 + "px";
                titreFormation[j].firstElementChild.classList.toggle("arrowActive");
                imagesFormation[j].style.display = "block";
            }
            else {
                panel.style.maxHeight = null;
                titreFormation[j].firstElementChild.classList.toggle("arrowActive");
                imagesFormation[j].style.display = "none";
            };
        } //Fin if principal
        else { //Cas des autres formations
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
                titreFormation[j].firstElementChild.classList.toggle("arrowActive");
                imagesFormation[j].style.display = "none";
            };
        };//Fin else principal
    } //Fin boucle for
}

formationAnimation(0); //Ouverture de la dernière formation par défaut

for (let i = 0; i < titreFormation.length; i++) {
    titreFormation[i].addEventListener("click", function () {
        formationAnimation(i);
    }); // Fin callback
};

