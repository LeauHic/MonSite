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


//Gestion de l'affichage des panel de la partie "formations"
let accordeon = document.querySelectorAll(".titreFormation");

for (let i = 0; i < accordeon.length; i++) {

    accordeon[i].addEventListener("click", function () {
        /* Toogle sur la class"active" des images flèches*/
        this.firstElementChild.classList.toggle("arrowActive");

        /* Toogle*/
        let panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        }
        else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
};