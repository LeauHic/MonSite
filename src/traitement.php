<?php

/* Récupération des informations du formulaire*/

 $nom = trim($_POST['familyName']);
 $prenom = trim($_POST['firstName']);
 $telephone = trim($_POST['phone']);
 $email = trim($_POST['emailAddress']);
 $message = trim($_POST['message']);

/*Envoi du mail*/

/*Le destinataire*/
$to="loickbrouard@yahoo.fr";

/*Le sujet du message qui apparaitra*/
$sujet="Demande de contact depuis site loickbrouard";
/*Le message en lui même*/
/*$msg = 'Mail envoye depuis le site' "rnrn";*/
$msg = '';
$msg .= $nom;
$msg .= $prenom;
$msg .= $telephone;
$msg .= $email;
$msg .= $message;

/*Les en-têtes du mail*/
$headers = 'From: Message de ton site !!';
/*L'envoi du mail - Et page de redirection*/
mail($to, $sujet, $msg, $headers);
header('Location:http://loickbrouard.alwaysdata.net');
?>