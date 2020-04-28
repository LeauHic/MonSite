<?php
/* Récupération des informations du formulaire*/

 $nom = trim($_POST['familyName']);
 $prenom = trim($_POST['firstName']);
 $telephone = trim($_POST['phone']);
 $email = trim($_POST['emailAddress']);
 $message = trim($_POST['message']);

   
/* On vérifie qu'il n'y a aucun header dans les champs */ 
if (preg_match($regex_head, $nom)
 || preg_match($regex_head, $prenom)
 || preg_match($regex_head, $telephone)
 || preg_match($regex_head, $email)
 || preg_match($regex_head, $message))
{  
 $alert = 'En-têtes interdites dans les champs du formulaire'; 
}
else
{ 
 $header = 1;
}   
/* On affiche l'erreur s'il y en a une */ 
if (!empty($alert))
{
 $header = 0;
}
if (empty($telephone) 
 || empty($nom) 
 || empty($message))
{  
 $alert = 'Tous les champs doivent être renseignés';
} 
else
{  
 $renseigne = 1;
}   
/* On affiche l'erreur s'il y en a une */ 
if (!empty($alert))
{
 $renseigne = 0;
}
/* Si les variables sont bonne */
if ($renseigne == 1 AND $header == 1)
{
/*Envoi du mail*/

/*Le destinataire*/
$to="loickbrouard@yahoo.fr";

/*Le sujet du message qui apparaitra*/
$sujet="Demande de contact depuis site loickbrouard";
$msg = '';
/*Le message en lui même*/
/*$msg = 'Mail envoye depuis le site' "rnrn";*/
$msg .= 'Nom : '.$nom."rnrn";
$msg .= 'Prenom : '.$prenom."rnrn";
$msg .= 'Dossier : '.$dossier."rnrn";
$msg .= 'Societe : '.$societe."rnrn";
$msg .= 'RCS : '.$rcs."rnrn";
$msg .= 'Adresse : '.$adresse."rnrn";
$msg .= 'Code : '.$code."rnrn";
$msg .= 'Ville : '.$ville."rnrn";
$msg .= 'Telephone : '.$telephone."rnrn";
$msg .= 'Fax : '.$fax."rnrn";
$msg .= 'Mail : '.$mail."rnrn";
$msg .= 'Motif : '.$motif."rnrn";
$msg .= 'Message : '.$message."rnrn";
/*Les en-têtes du mail*/
$headers = 'From: MESSAGE DU SITE FAFA<demo@fafa-informatique>'."rn";
$headers .= "rn";
/*L'envoi du mail - Et page de redirection*/
mail($to, $sujet, $msg, $headers);
header('Location:http://www.google.fr');
}
else
{
header('Location:http://www.wordreference.com');
}
?>