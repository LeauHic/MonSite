<?php

/*Fonction de traitement des inputs pour éviter les attaques basiques*/
function verif($input){
    $input = trim($input);
    $input = htmlspecialchars($input);
    return $input;
};

/*Définition de regex de vérification*/
$regexNom = "/^[aA-zZ éèïöüëäà,.'-]+$/";

/* Récupération des informations du formulaire*/

 $nom = verif($_POST['familyName']);
 $prenom = verif($_POST['firstName']);
 $telephone = verif($_POST['phone']);
 $email = verif($_POST['emailAddress']);
 $message = verif($_POST['message']);
 $error = "";

 /*vérification des champs nom et prénom*/
if (!preg_match($regexNom, $nom)){
    $error = "Ne vous vexer pas mais votre \"Nom\" n\'est pas considéré comme valide \n";
};

if (!preg_match($regexNom, $prenom)){
    $error = "Oups, votre prénom ne répond pas aux critères \"normaux\" \n";
};

 /*Vérifiaction email*/
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
     $error = "Je ne suis pas sur de pouvoir vous recontacter avec une telle addresse email... \n";
 };

 /*Vérifiaction du message*/
 if (!strlen($message)>0){
     $error = "Vous ne souhaitez pas me laisser de message ? :( \n";
 }

 /*S'il y a eu une erreur elle est renvoyée à l'utilisateur*/
 if ($error){
	echo $error;
}
/*S'il n'y a pas eu d'erreurs, le message est envoyé*/
else{
    /*Paramètre de l'email */
    $to="loickbrouard@yahoo.fr";
    $headers = 'From: Message de ton site !!';
    $sujet="Demande de contact depuis site loickbrouard";

    $msg = "
    Nom : $nom \n
    Prénom : $prenom\n
    Téléphone : $telephone\n
    Email : $email\n
    Message : $message\n
    ";

    /*L'envoi du mail - Et page de redirection*/
    mail($to, $sujet, $msg, $headers);
    echo "Votre email à bien été envoyé, mserci à vous !";
}
?>