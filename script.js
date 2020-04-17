function age()
{
/*Fonction permettant de determiner mon age en fonction de la date du jour*/
	//Instanciation de l'objet date et récupération du jour, moi et annee actuelle
	var date = new Date();
	var jour = date.getDate();
	var mois = date.getMonth();
	var annee = date.getFullYear();
	//Si le mois est inférieur à mai ou si la date est inférieure à 14 dans le mois de mai
	if(mois <5 || (mois <5 && jour<14))
	{
		var age = (annee - 1991) 
		return age;
	}
	else
	{
		var age = (annee - 1 - 1991) 
		return age;
	}
};

//attribution au div "age" de l'age calculé
document.querySelector("#age").textContent = age();

