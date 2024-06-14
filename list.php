<?php

//milestone 1 consegna 14/06/2024:sposto array in data.json
//richiamo l'array dal file json in una variabile:
$file_content=file_get_contents(("dati.json"));


//stringa per importare poi contenuto
header('Content-type: application/json');
//converto array in formato JSON   
$json_string=json_encode($file_content);
//stampo risultato 
echo $file_content;
?>