<?php

/*Fonction de traitement des inputs pour �viter les attaques basiques*/
function verif($input){
    $input = trim($input);
    $input = htmlspecialchars($input);
    return $input;
};

/*D�finition de regex de v�rification*/
$regexNom = "/^[aA-zZ ��������,.'-]+$/";
$regexPhone = "/^[0-9 ()+'-]*$/";


/* R�cup�ration des informations du formulaire*/

 $nom = verif($_POST['familyName']);
 $prenom = verif($_POST['firstName']);
 $telephone = verif($_POST['phone']);
 $email = verif($_POST['emailAddress']);
 $message = verif($_POST['message']);
 $error = "";

 /*v�rification des champs nom et pr�nom*/
if (!preg_match($regexNom, $nom)){
    $error .= "Ne vous vexez pas mais votre \"Nom\" n'est pas considere comme valide \n";
};

if (!preg_match($regexNom, $prenom)){
    $error .= "Oups, votre prenom ne repond pas aux criteres \"normaux\" \n";
};

if (!preg_match($regexPhone, $telephone)){
    $error .= "Le numero de telephone n'est obligatoire mais si vous le remplissez essayer de le faire avec des chiffres";
};

 /*V�rifiaction email*/
 if (!filter_var($email, FILTER_VALIDATE_EMAIL)){
     $error .= "Je ne suis pas sur de pouvoir vous recontacter avec une telle addresse email... \n";
 };

 /*V�rifiaction du message*/
 if (!strlen($message)>0){
     $error .= "Vous ne souhaitez pas me laisser de message ? :( \n";
 }

 /*S'il y a eu une erreur elle est renvoy�e � l'utilisateur*/
 if ($error){
	echo $error;
}
/*S'il n'y a pas eu d'erreurs, le message est envoy�*/
else{
    /*Param�tre de l'email */
    $to="loickbrouard@alwaysdata.net";
    $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
    $headers = 'From: Message de ton site !!' . "\r\n";
    $headers .= 'Cc: loickbrouard@yahoo.fr' . "\r\n";
    $sujet="Demande de contact depuis site loickbrouard";

    $msg = "
    Nom : $nom \n
    Pr�nom : $prenom\n
    T�l�phone : $telephone\n
    Email : $email\n
    Message : $message\n
    ";

    /*L'envoi du mail - Et page de redirection*/
    mail($to, $sujet, $msg, $headers);
    echo "Votre email a bien ete envoye, merci a vous !";
}
?>