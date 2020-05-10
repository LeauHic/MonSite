
/*
 #### AFFICHAGE AGE ####
 */

function age() {

    /*Fonction permettant de determiner mon age en fonction de la date du jour*/
    //Instanciation de l'objet date et récupération du jour, moi et annee actuelle
    let date = Date.now();
    let anniv = Date.parse("14 May 1991 23:00");
    let ageEnJour = (date - anniv) / 3600 / 1000 / 24;
    let ageEnAnnee = ageEnJour / 365.24;
    let mois = (ageEnJour - Math.floor(ageEnAnnee) * 365.24) / 30.4375;
    let jour = (ageEnJour - Math.floor(ageEnAnnee) * 365.24) % 30.4375;
    let heure = (ageEnJour - Math.floor(ageEnJour)) * 24;
    let minute = (heure - Math.floor(heure)) * 60;
    let seconde = (minute - Math.floor(minute)) * 60;

    //Appel de la fonction toute les secondes
    setTimeout("age()", 1000);

    //attribution au div "age" de l'age calculé
    document.querySelector("#age").innerHTML =
        `${Math.floor(ageEnAnnee)} ans, ${Math.floor(mois)} mois, ${Math.floor(jour)} jours, ${Math.floor(heure)}
heures, ${Math.floor(minute)} minutes et ${Math.floor(seconde)} secondes (à peu près...)`;
    
}

age();



/*
#### GESTION ANIMATION HEADER ####
 */

let body = document.querySelector("body");
let media = window.matchMedia("(max-width: 900px)");

let jeScroll = (media) => {
    if (!media.matches) {
        stikyHeader();
        activeNav()
    }//fin if media.matches
    else {
        body.classList.remove("stickyHeader");
    };
}; //fin onscroll()

media.addListener(jeScroll); //En cas de changement de taille de fenêtre

window.onscroll = function () { //en cas de scroll sur la page
    jeScroll(media);
};


function stikyHeader() {
    let sc = document.documentElement.scrollTop
    if (sc > 1) {
        body.classList.add("stickyHeader");
    } else {
        body.classList.remove("stickyHeader");
    }
}//Fin fonction

/*
#### GESTION DES ANCRES DU NAV ####
 */

//scrollspy
function activeNav() {
    let menu = document.querySelectorAll(".menu");
    let section = document.querySelectorAll("section");
    for (let i = 0; i < section.length; i++) {
        let top = section[i].offsetTop; //repérage du début de la section
        let bottom = top + section[i].scrollHeight; //Repérage de la fin de la section
        if (document.documentElement.scrollTop >= top && document.documentElement.scrollTop <= bottom) {
            menu[i].classList.add('active');
        }
        else {
            menu[i].classList.remove('active');
        };
    };//Fin boucle for section
};//Fin fonction activeNav



/*
#### AFFICHAGE DE LA PARTIE CREATION ####
 */

let slideIndex = [1]; //Index de départ du slide show
let slideId = ["slide"] //Array regroupant les nom de classes
showSlides(0, 0); //Affiche la première image du slideshow 1s

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let slideshowSelected = document.getElementsByClassName("slide");
    if (n > slideshowSelected.length) { slideIndex[no] = 1 }
    if (n < 1) { slideIndex[no] = slideshowSelected.length }
    for (let i = 0; i < slideshowSelected.length; i++) {
        slideshowSelected[i].style.display = "none";
    }
    slideshowSelected[slideIndex[no] - 1].style.display = "flex";
}

/*
 #### AFFICHAGE PARTIE "PARCOURS" ####
 */
let parcoursBefore = document.querySelector(".timelineBefore"); //bouton flèche before
let parcoursNext = document.querySelector(".timelineNext");//bouton flèche next
let mission = document.querySelectorAll(".mission")
let missionDescription = document.querySelectorAll(".missionDescription") //Nom de la mission du .timeline
let dateFormation = document.querySelectorAll(".date") //Nom de la mission du .timeline
let textPanelHistogramme = document.querySelectorAll(".textePanelHistogramme"); // Description de la mission active
let index = mission.length - 1;

const timelineAnimation = (index) => {
    /*Fonction parcourant les différents élement de .timeline et de .panelHistogramme
     * pour activer/afficher les élements correspondant la mission active et/où passée
     */
    for (let i = 0; i <= mission.length - 1; i++) {
        if (index > i) { //Mission dans le scope avant l'index
            mission[i].classList.add("complete");
            missionDescription[i].classList.remove("active");
            dateFormation[i].classList.remove("active");
            textPanelHistogramme[i].style.display = "none";
        }
        else { //Mission hors scope (après l'index)
            mission[i].classList.remove("complete");
            missionDescription[i].classList.remove("active");
            dateFormation[i].classList.remove("active");
            textPanelHistogramme[i].style.display = "none";
            if (i === index) { //Mission correspondant à l'index
                missionDescription[i].classList.add("active")
                dateFormation[i].classList.add("active")
                mission[i].classList.add("complete");
                textPanelHistogramme[i].style.display = "block";
                textPanelHistogramme[i].style.heigth = "0px";
                textPanelHistogramme[i].style.heigth = "auto";
            }
        }
    } //fin boucle for
} //Fin fonction timelineAnimation


//Affichage de la mission en cours à la chargement de la page
window.addEventListener('DOMContentLoaded', () => {
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
    (index < mission.length - 1) ? index++ : index;
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


/*
#### GESTION DU FORMULAIRE DE CONTACT ####
 */
$(document).ready(function () {

    let $firstName = $('#firstName');
    let $familyName = $('#familyName');
    let $phone = $('#phone');
    let $email = $('#emailAddress');
    let $message = $('#message');

    $("#envoi").click(function (e) {
        e.preventDefault(); // on annule la fonction par défaut du bouton d'envoi

        $.post(
            './src/traitement.php',
            {
                firstName: $firstName.val(),
                familyName: $familyName.val(),
                phone: $phone.val(),
                emailAddress: $email.val(),
                message: $message.val()
            },
            function (data) {
                alert(data);
            });
    });
});
