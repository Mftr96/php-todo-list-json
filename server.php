<?php

//array lista cose da fare
$to_do=[
[
    'evento' => 'lavare i piatti',
    'completato'=>false,       


],

[
    'evento'=>'fare la spesa',
    'completato'=>false,

],

[
    'evento'=> 'fare es boolean',
    'completato'=>false,

],

[
    'evento'=> 'fare un evento',
    'completato'=>false,

],

];

//stringa per importare poi contenuto
header('Content-type: application/json');
//converto array in formato JSON   
$json_string=json_encode($to_do);
//stampo risultato 
echo $json_string;
?>